// app/services/page.tsx

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          Services
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          What Ethivox actually does.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Ethivox is not a generic AI consultant or marketing agency. We architect
          ethical, human-centered intelligence systems across five connected service
          lines. You can engage us for a focused audit or a full architecture build.
        </p>
      </header>

      {/* Service categories */}
      <section className="grid gap-6 text-sm text-slate-200 md:grid-cols-2">
        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs font-semibold text-emerald-300">
            01 · Intelligence Architecture & Operations
          </p>
          <p className="text-slate-300">
            We map how information, decisions, and workflows move through your
            organization and design an AI architecture around that reality — not
            around buzzwords.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-400">
            <li>• AI audits & opportunity mapping</li>
            <li>• Workflow & system mapping</li>
            <li>• Multi-agent orchestration design</li>
            <li>• Transformation roadmaps & governance models</li>
          </ul>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs font-semibold text-emerald-300">
            02 · Automation & Integration
          </p>
          <p className="text-slate-300">
            We connect your CRM, docs, data, and tools into AI-powered pipelines that
            remove manual work without creating opaque black boxes.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-400">
            <li>• CRM and marketing automations</li>
            <li>• Research and reporting agents</li>
            <li>• Internal GPT tools and copilots</li>
            <li>• Operational dashboards and alerts</li>
          </ul>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs font-semibold text-emerald-300">
            03 · Knowledge Systems Engineering
          </p>
          <p className="text-slate-300">
            Most organizations are not AI-ready because their knowledge is scattered.
            We turn wikis, SOPs, and policies into a semantic, AI-usable system.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-400">
            <li>• Internal wikis and SOP networks</li>
            <li>• Onboarding & training systems</li>
            <li>• Policy & compliance hubs</li>
            <li>• Information architecture for RAG</li>
          </ul>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs font-semibold text-emerald-300">
            04 · Creative Intelligence & Brand Systems
          </p>
          <p className="text-slate-300">
            We use AI to scale your voice — not replace it. From Sora direction to
            content engines, we build creative systems that feel human.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-400">
            <li>• Sora video direction & pipelines</li>
            <li>• Content engines across channels</li>
            <li>• PPC & SEO with AI as a layer</li>
            <li>• Narrative and emotional design</li>
          </ul>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5 md:col-span-2">
          <p className="text-xs font-semibold text-emerald-300">
            05 · AI Ethics & Governance
          </p>
          <p className="text-slate-300">
            We treat AI as infrastructure that needs clear rules. Ethivox helps you
            deploy AI responsibly, with transparency and guardrails that leadership and
            staff can trust.
          </p>
          <ul className="mt-3 grid gap-1 text-xs text-slate-400 sm:grid-cols-2">
            <li>• Responsible-use frameworks and policies</li>
            <li>• Risk and bias audits</li>
            <li>• Transparency & communication standards</li>
            <li>• AI literacy and leadership training</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-200">
        <h2 className="text-base font-semibold text-slate-50">
          Not sure where to start?
        </h2>
        <p className="mt-1 text-slate-300">
          Many clients begin with an AI & Knowledge Architecture Audit — a focused
          engagement where we map your systems, identify quick wins, and define a
          responsible path forward.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
        >
          Talk about an audit
        </a>
      </section>
    </div>
  );
}
