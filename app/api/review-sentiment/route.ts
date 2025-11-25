// app/api/review-sentiment/route.ts
import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";

type ReviewRequestBody = {
  url: string;
  sourceLabel?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ReviewRequestBody;
    const { url, sourceLabel } = body;

    if (!url) {
      return NextResponse.json(
        { error: "url is required" },
        { status: 400 },
      );
    }

    // 1) Fetch the review page HTML
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch the review page" },
        { status: 400 },
      );
    }

    const html = await res.text();

    // 2) Hard-cap and compress HTML to keep token usage sane
    let truncatedHtml = html.slice(0, 6000); // ~6k chars is enough for most pages
    truncatedHtml = truncatedHtml.replace(/\s+/g, " ");

    const systemPrompt = `
You are a cautious analyst that summarizes a single public review page for a business.
You receive:
- a URL label
- a URL
- a small, truncated HTML snippet

Your job:
- Decide whether this looks like a review/rating page.
- If yes, approximate:
  - average rating (if clearly visible),
  - rating scale (e.g. "out of 5"),
  - rough review count (e.g. "about 20" or "100+"),
  - a brief note on recency of reviews (if visible),
  - 2–4 short pros and 2–4 short cons based on what reviewers say.
- If unclear or there are no obvious reviews, set overallSentiment = "unclear"
  and explain that limitation.

You must respond with JSON like this:

{
  "sourceLabel": string,
  "url": string,
  "approxRating": number | null,
  "ratingScale": string | null,
  "approxReviewCount": string | null,
  "recencyNote": string | null,
  "overallSentiment": "positive" | "mixed" | "negative" | "unclear",
  "summary": string,
  "pros": string[],
  "cons": string[],
  "caveats": string[]
}

Guidelines:
- If you cannot clearly see rating or review-count info, leave approxRating and approxReviewCount null.
- "summary" should be 2–4 sentences in neutral, plain language for a founder.
- "pros" and "cons" should be short bullet phrases like "Friendly staff" or "Long wait times".
- "caveats" should explain limits like:
  - "Review count not clearly visible in this snippet"
  - "Some content may be loaded dynamically and not included here"

Constraints:
- Base everything ONLY on the provided HTML snippet. Do NOT invent or guess facts.
- Use cautious language ("reviews suggest", "appear", "may").
- Do NOT accuse any business of fraud, crime, or illegality.
- If this does not look like a review page, or there is not enough information,
  set overallSentiment = "unclear" and explain that limitation in "summary".
- IMPORTANT: Return ONLY the JSON object, with no prose and no Markdown code fences.
`.trim();

    const userPrompt = `
sourceLabel: ${sourceLabel || "Review page"}
url: ${url}

Truncated HTML snippet for analysis:
"""
${truncatedHtml}
"""
`.trim();

    // 3) Call the Responses API (same pattern as /api/decode)
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const output = (response as any).output?.[0]?.content?.[0];
    if (!output || typeof output.text !== "string") {
      throw new Error("No text content in OpenAI response.");
    }

    // 4) Strip optional ```json fences and parse safely
    let text = (output.text as string).trim();

    if (text.startsWith("```")) {
      const firstNewline = text.indexOf("\n");
      if (firstNewline !== -1) {
        text = text.slice(firstNewline + 1);
      }
      const lastFence = text.lastIndexOf("```");
      if (lastFence !== -1) {
        text = text.slice(0, lastFence);
      }
      text = text.trim();
    }

    let sentiment: any;

    try {
      sentiment = JSON.parse(text);
    } catch (parseErr) {
      console.error("Review sentiment parse error:", parseErr, text);

      // Fallback: safe "unclear" snapshot instead of throwing
      sentiment = {
        sourceLabel: sourceLabel || "Review page",
        url,
        approxRating: null,
        ratingScale: null,
        approxReviewCount: null,
        recencyNote: "unclear",
        overallSentiment: "unclear",
        summary:
          "The structure of this review page made it hard to reliably extract rating or review details from the HTML snippet alone.",
        pros: [],
        cons: [],
        caveats: [
          "The review page HTML appears complex or heavily scripted.",
          "Ratings and review counts could not be safely interpreted from the visible HTML.",
          "Try a direct Google Maps or Yelp business page for clearer results.",
        ],
      };
    }

    return NextResponse.json({ sentiment });
  } catch (err: any) {
    console.error("Review sentiment error:", err);

    const code = err?.code || err?.error?.code;
    const status = err?.status;

    if (code === "rate_limit_exceeded" || status === 429) {
      return NextResponse.json(
        {
          error:
            "Our AI is temporarily handling too many pages at once. Please wait a few seconds and try again.",
        },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "Failed to analyze review sentiment." },
      { status: 500 },
    );
  }
}
