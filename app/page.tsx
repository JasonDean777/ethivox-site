// app/page.tsx
export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Cleveland • Ethical Intelligence Systems
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Architecting{" "}
            <span className="text-emerald-300">
              human-centered AI systems
            </span>{" "}
            for small & mid-sized businesses.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Ethivox designs, implements, and governs AI systems that make
            organizations faster, clearer, and more effective—without losing
            their humanity. We work with leadership teams who want AI as an
            executive partner, not a toy.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
            >
              Schedule an intro call
            </a>
            <a
              href="/services"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Explore services
            </a>
          </div>

          <div className="mt-4 grid gap-4 text-xs text-slate-400 sm:grid-cols-3">
            <div>
              <p className="font-medium text-slate-200">AI Architecture</p>
              <p>Systems, not one-off tools. Multi-agent orchestration, end to end.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Knowledge Systems</p>
              <p>Wikis, SOPs, and institutional memory structured for AI.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Ethical Governance</p>
              <p>Clear policies, risk mitigation, and responsible-use culture.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-xs text-slate-300">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Ethivox Pillars
          </p>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-emerald-300">
                01 · AI Architecture & Operations
              </span>
              <p>Workflow design, multi-agent orchestration, internal AI tools.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                02 · Knowledge Engineering
              </span>
              <p>Wikis, SOPs, and semantic organization for AI-ready knowledge.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                03 · Creative Intelligence
              </span>
              <p>Sora direction, content systems, and emotionally intelligent brand voice.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                04 · AI Governance & Ethics
              </span>
              <p>Responsible-use frameworks, transparency, and literacy training.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Who we work with */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Built for Cleveland leadership teams who are serious about AI.
        </h2>
        <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-3">
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              CEOs & Founders
            </p>
            <p>
              You want AI as a strategic co-executive, not another dashboard. We design
              systems that reflect how you actually make decisions.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Ops & Strategy Leaders
            </p>
            <p>
              We map workflows, data, and knowledge into an AI architecture that reduces
              friction and creates real leverage.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Marketing & Creative Teams
            </p>
            <p>
              From Sora video systems to content engines, we use AI to scale brand
              expression without losing authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50">
              What we actually do.
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              Five service lines that work together as one intelligence architecture.
              We can start with a focused audit or design the full system.
            </p>
          </div>
          <a
            href="/services"
            className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
          >
            View full service overview →
          </a>
        </div>

        <div className="grid gap-4 text-sm text-slate-200 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Intelligence Architecture & Operations
            </p>
            <p className="text-slate-300">
              AI audits, workflow mapping, multi-agent orchestration, and transformation
              roadmaps.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Automation & Integration
            </p>
            <p className="text-slate-300">
              CRM automations, data agents, research pipelines, and internal GPT tools.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Knowledge Systems Engineering
            </p>
            <p className="text-slate-300">
              Wikis, SOP networks, onboarding flows, and policy hubs designed for AI use.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Creative Intelligence & Brand Systems
            </p>
            <p className="text-slate-300">
              Sora-directed video systems, content engines, and PPC/SEO with AI in the loop.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              AI Ethics & Governance
            </p>
            <p className="text-slate-300">
              Responsible-use policies, transparency frameworks, risk audits, and training.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-emerald-400/5 px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Next step
            </p>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Let&apos;s map your intelligence architecture.
            </h2>
            <p className="max-w-xl text-sm text-slate-200">
              In a short working session, we map your workflows, knowledge, and risks into
              an initial AI architecture. You leave with clarity, not buzzwords.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
            >
              Request an intro call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
