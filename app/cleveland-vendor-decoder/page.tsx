import React from "react";
import { DecoderShell } from "./DecoderShell";

export default function ClevelandVendorDecoderPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Ethivox • Cleveland
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Cleveland Vendor Decoder
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Paste a vendor or agency proposal and get a structured breakdown of
            risk, red flags, missing clarity, and questions to ask before you
            sign. Built in Cleveland to protect founders.
          </p>
        </header>

        <DecoderShell />
      </div>
    </main>
  );
}
