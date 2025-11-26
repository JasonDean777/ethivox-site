// app/proposal-defense/page.tsx
import Link from "next/link";

export default function ProposalDefensePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Ethivox • Proposal Defense
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold">
          Book your Proposal&nbsp;Defense Session
        </h1>

        <p className="text-sm text-slate-300">
          In a focused 60-minute working session, we&apos;ll review your vendor
          proposal process, highlight AI use methodology, and help you decide how
          to move forward — with confidence.
        </p>

        <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
          <li>Objective review of promises, pricing, and scope</li>
          <li>Plain-language explanation of risk and fine print</li>
          <li>Concrete questions and negotiation angles you can use immediately</li>
        </ul>

        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule your session
          </a>
        </div>

        <p className="text-xs text-slate-500">
          Not ready to book yet?{" "}
          <Link href="/contact" className="underline">
            Get in touch with Ethivox
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
