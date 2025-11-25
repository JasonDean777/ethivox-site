// app/api/decode/route.ts
import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";

type DecodeRequestBody = {
  vendorType: string;
  vendorName?: string;
  proposalText: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as DecodeRequestBody;
    const { vendorType, vendorName, proposalText } = body;

    if (!proposalText || !vendorType) {
      return NextResponse.json(
        { error: "vendorType and proposalText are required." },
        { status: 400 },
      );
    }

    const systemPrompt = `
You are an expert evaluator of vendor, agency, and consultant proposals.
Your job is to help founders and business owners spot vague, one-sided,
or risky contracts.

You will receive:
- vendorType (e.g. "marketing / ads", "software / dev", "fractional exec", "general services")
- vendorName (optional)
- proposalText (the raw text of the proposal)

You must respond with JSON matching this TypeScript type:

type ProposalAnalysis = {
  overallRisk: "low" | "medium" | "high";
  headlineAssessment: string;
  strengths: string[];
  redFlags: string[];
  missingClarity: string[];
  questionsToAsk: string[];
  notesForFounder: string;
};

Guidelines:
- Focus on structure, clarity, scope, accountability, incentives.
- Do NOT make legal accusations (no "fraud", "illegal", "scam").
- Use cautious language like "may", "appears", "could".
- "redFlags" = specific structural concerns (no metrics, one-sided termination, vague scope, etc.).
- "missingClarity" = important details the proposal should specify but does not.
- "questionsToAsk" = practical, direct questions the founder can ask the vendor.
- "notesForFounder" = 1 short paragraph of strategic guidance.
- IMPORTANT: Return ONLY the JSON object, with no prose and no Markdown code fences.
`.trim();

    const userPrompt = `
vendorType: ${vendorType}
vendorName: ${vendorName || "N/A"}

Proposal text:
"""
${proposalText}
"""
`.trim();

    // Call the Responses API
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    // Extract the text content
    const output = (response as any).output?.[0]?.content?.[0];
    if (!output || typeof output.text !== "string") {
      throw new Error("No text content in OpenAI response.");
    }

    // The model sometimes wraps JSON in ```json ... ```; strip that.
    let text = (output.text as string).trim();

    if (text.startsWith("```")) {
      // Remove opening fence line (``` or ```json)
      const firstNewline = text.indexOf("\n");
      if (firstNewline !== -1) {
        text = text.slice(firstNewline + 1);
      }
      // Remove trailing ``` if present
      const lastFence = text.lastIndexOf("```");
      if (lastFence !== -1) {
        text = text.slice(0, lastFence);
      }
      text = text.trim();
    }

    const analysis = JSON.parse(text);

    return NextResponse.json({ analysis });
  } catch (err) {
    console.error("Decode error:", err);
    return NextResponse.json(
      { error: "Failed to decode proposal." },
      { status: 500 },
    );
  }
}
