"use client";

import React, { useState } from "react";

type ProposalAnalysis = {
  overallRisk: "low" | "medium" | "high";
  headlineAssessment: string;
  strengths: string[];
  redFlags: string[];
  missingClarity: string[];
  questionsToAsk: string[];
  notesForFounder: string;
};

type ReviewSentiment = {
  sourceLabel: string;
  url: string;
  approxRating?: number;
  ratingScale?: string;
  approxReviewCount?: string;
  recencyNote?: string;
  overallSentiment: "positive" | "mixed" | "negative" | "unclear";
  summary: string;
  pros: string[];
  cons: string[];
  caveats: string[];
};

export function DecoderShell() {
  const [vendorType, setVendorType] = useState("marketing / ads");
  const [vendorName, setVendorName] = useState("");
  const [proposalText, setProposalText] = useState("");

  const [loadingDecode, setLoadingDecode] = useState(false);
  const [analysis, setAnalysis] = useState<ProposalAnalysis | null>(null);
  const [decodeError, setDecodeError] = useState<string | null>(null);

  const [reviewUrl, setReviewUrl] = useState("");
  const [loadingReview, setLoadingReview] = useState(false);
  const [sentiment, setSentiment] = useState<ReviewSentiment | null>(null);
  const [reviewError, setReviewError] = useState<string | null>(null);

  async function handleDecode() {
    setLoadingDecode(true);
    setDecodeError(null);
    setAnalysis(null);
    setSentiment(null);
    setReviewUrl("");
    setReviewError(null);

    try {
      const res = await fetch("/api/decode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vendorType, vendorName, proposalText }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to decode proposal.");
      }

      const data = await res.json();
      setAnalysis(data.analysis);
    } catch (err: any) {
      setDecodeError(err.message || "Something went wrong.");
    } finally {
      setLoadingDecode(false);
    }
  }

  async function handleReviewSentiment() {
    setLoadingReview(true);
    setReviewError(null);
    setSentiment(null);

    try {
      const res = await fetch("/api/review-sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: reviewUrl,
          sourceLabel: "Review page",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to analyze reviews.");
      }

      const data = await res.json();
      setSentiment(data.sentiment);
    } catch (err: any) {
      setReviewError(err.message || "Something went wrong.");
    } finally {
      setLoadingReview(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* 1. Proposal form */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 md:p-6 space-y-4">
        <h2 className="text-lg font-semibold">1. Decode the proposal</h2>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Vendor type</label>
            <select
              value={vendorType}
              onChange={(e) => setVendorType(e.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-2 py-2 text-sm"
            >
              <option>marketing / ads</option>
              <option>software / dev</option>
              <option>fractional exec / advisor</option>
              <option>general business services</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">
              Vendor name (optional)
            </label>
            <input
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              placeholder="Ex: Acme Growth Agency"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-2 py-2 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-300">Proposal text</label>
          <textarea
            value={proposalText}
            onChange={(e) => setProposalText(e.target.value)}
            rows={10}
            placeholder="Paste the full text of the proposal here…"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-2 py-2 text-sm font-mono"
          />
        </div>

        <button
          type="button"
          onClick={handleDecode}
          disabled={loadingDecode || !proposalText.trim()}
          className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-500 text-slate-950 text-sm font-medium disabled:opacity-60"
        >
          {loadingDecode ? "Decoding…" : "Decode proposal"}
        </button>

        {decodeError && (
          <p className="text-sm text-red-400 mt-2">{decodeError}</p>
        )}
      </section>

      {/* 2. Analysis output */}
      {analysis && (
        <section className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 md:p-6 space-y-4">
          <h2 className="text-lg font-semibold">2. Analysis</h2>
          <p className="text-sm text-slate-300">
            Overall risk:{" "}
            <span className="font-semibold capitalize">
              {analysis.overallRisk}
            </span>
          </p>
          <p className="text-sm text-slate-200">
            {analysis.headlineAssessment}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <AnalysisList title="Strengths" items={analysis.strengths} />
            <AnalysisList title="Red flags" items={analysis.redFlags} />
            <AnalysisList
              title="Missing clarity"
              items={analysis.missingClarity}
            />
            <AnalysisList
              title="Questions to ask"
              items={analysis.questionsToAsk}
            />
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-semibold text-slate-200">
              Notes for you
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {analysis.notesForFounder}
            </p>
          </div>

          {/* Proposal Defense CTA */}
          <div className="mt-6 border-t border-slate-800 pt-4">
            <h3 className="text-sm font-semibold text-slate-200">
              Want a second set of eyes on this?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              If this proposal is meaningful for your business, don&apos;t go into
              the next call alone. In a 60-minute{" "}
              <span className="font-semibold">Ethivox Proposal Defense Session</span>, we&apos;ll
              walk through the details with you, pressure-test the promises,
              and help you decide your next move.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href="/proposal-defense" // replace with your actual booking link when ready
                className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Proposal Defense Session
              </a>
              <p className="text-xs text-slate-400">
                60-minute live session • starting at $250
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. Review sentiment */}
      {analysis && (
        <section className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 md:p-6 space-y-4">
          <h2 className="text-lg font-semibold">
            3. Optional: External footprint snapshot
          </h2>
          <p className="text-sm text-slate-300">
            Experimental: paste a Google Maps or Yelp business review URL to see
            a cautious external footprint snapshot. This feature is in beta and
            may occasionally ask you to try again if the AI is busy.
          </p>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">Review page URL</label>
            <input
              value={reviewUrl}
              onChange={(e) => setReviewUrl(e.target.value)}
              placeholder="https://maps.app.goo.gl/... or https://www.yelp.com/biz/..."
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-2 py-2 text-sm"
            />
            <p className="text-xs text-slate-400">
              Hint: you&apos;ll get the best results with a direct business review
              page (e.g. a specific Yelp or Google listing), not a brand or
              directory page.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReviewSentiment}
            disabled={loadingReview || !reviewUrl.trim()}
            className="inline-flex items-center px-4 py-2 rounded-md bg-slate-800 text-slate-100 text-sm font-medium disabled:opacity-60"
          >
            {loadingReview ? "Analyzing reviews…" : "Analyze reviews"}
          </button>

          {reviewError && (
            <p className="text-sm text-red-400 mt-2">{reviewError}</p>
          )}

          {sentiment && (
            <div className="mt-4 border border-slate-800 rounded-lg p-3 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                External footprint
              </p>
              <p className="text-sm text-slate-300">
                Source:{" "}
                <span className="font-medium">{sentiment.sourceLabel}</span>
              </p>
              {sentiment.approxRating !== undefined && (
                <p className="text-sm text-slate-300">
                  Approx. rating:{" "}
                  <span className="font-medium">
                    {sentiment.approxRating}{" "}
                    {sentiment.ratingScale || ""}
                  </span>
                  {sentiment.approxReviewCount &&
                    ` • ~${sentiment.approxReviewCount} reviews`}
                </p>
              )}
              {sentiment.recencyNote && (
                <p className="text-xs text-slate-400">
                  Recency: {sentiment.recencyNote}
                </p>
              )}
              <p className="text-sm text-slate-200">{sentiment.summary}</p>
              <div className="grid gap-3 md:grid-cols-2">
                <AnalysisList
                  title="Pros (from reviews)"
                  items={sentiment.pros}
                />
                <AnalysisList
                  title="Cons (from reviews)"
                  items={sentiment.cons}
                />
              </div>
              {sentiment.caveats.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-slate-400">
                    Caveats
                  </h3>
                  <ul className="mt-1 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    {sentiment.caveats.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

function AnalysisList({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <ul className="mt-1 space-y-1 text-sm text-slate-300 list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
