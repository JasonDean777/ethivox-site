// app/page.tsx

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Cleveland, Ohio • AI Consultant &amp; Ethical Intelligence Systems
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Cleveland-based{" "}
            <span className="text-emerald-300">AI consultant</span> for small &amp;
            mid-sized organizations.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Ethivox designs ethical, human-centered AI systems for leadership teams
            in Cleveland and across Northeast Ohio. We architect workflows, knowledge
            bases, and governance so AI functions as a co-executive partner—clear,
            explainable, and aligned with how your organization actually runs.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
            >
              Talk with a Cleveland AI consultant
            </a>
            <a
              href="/services"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Explore AI consulting services
            </a>
          </div>

          <div className="mt-4 grid gap-4 text-xs text-slate-400 sm:grid-cols-3">
            <div>
              <p className="font-medium text-slate-200">AI Architecture</p>
              <p>Systems over tools: workflow mapping, agents, and operating models.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Knowledge Systems</p>
              <p>Wikis, SOPs, and institutional memory designed for AI use.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Ethical Governance</p>
              <p>Policies, risk mitigation, and AI literacy for leadership and teams.</p>
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
                01 · AI Architecture &amp; Operations
              </span>
              <p>Workflow design, multi-agent patterns, and operational integration.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                02 · Knowledge Engineering
              </span>
              <p>Semantic organization of wikis, SOPs, and policy hubs for AI.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                03 · Creative Intelligence
              </span>
              <p>Sora video direction, content systems, and emotionally intelligent messaging.</p>
            </li>
            <li>
              <span className="font-medium text-emerald-300">
                04 · AI Governance &amp; Ethics
              </span>
              <p>Responsible-use frameworks, transparency standards, and training.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Who we work with */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          AI consulting for Cleveland leadership teams.
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Ethivox works with small and mid-sized organizations in Cleveland and Northeast
          Ohio that want serious AI systems—not experiments that create more noise than
          clarity. We focus on leaders who are accountable for outcomes and culture.
        </p>
        <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-3">
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              CEOs &amp; Founders
            </p>
            <p>
              You need AI to amplify decision-making, not generate more dashboards.
              We build systems that reflect how you actually run the business.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Operations &amp; Strategy Leaders
            </p>
            <p>
              We map processes, data, and knowledge to design AI architectures that
              reduce friction and increase throughput across teams.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Marketing &amp; Creative Teams
            </p>
            <p>
              From Sora-driven campaigns to content engines, we scale brand expression
              in a way that still feels distinctly yours.
            </p>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50">
              AI consulting services in Cleveland.
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              Ethivox combines AI architecture, automation, knowledge systems, creative
              intelligence, and governance into one integrated practice. You can start
              with a focused AI audit or a full intelligence architecture engagement.
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
              Intelligence Architecture &amp; Operations
            </p>
            <p className="text-slate-300">
              AI audits, workflow and system mapping, and multi-agent orchestration plans
              tailored to how your Cleveland organization actually operates.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Automation &amp; Integration
            </p>
            <p className="text-slate-300">
              CRM automations, research agents, internal GPT tools, and data pipelines
              that tie AI into your existing stack without breaking it.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Knowledge Systems Engineering
            </p>
            <p className="text-slate-300">
              Wikis, SOP networks, onboarding flows, and policy hubs structured so AI
              can reliably use your institutional knowledge.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Creative Intelligence &amp; Brand Systems
            </p>
            <p className="text-slate-300">
              Sora video direction, short-form systems, and PPC/SEO with AI in the loop,
              tuned to your brand voice and risk tolerance.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              AI Ethics &amp; Governance
            </p>
            <p className="text-slate-300">
              Responsible-use policies, risk audits, and transparency frameworks so AI
              deployments in your organization are defensible and trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Local focus section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Why work with a Cleveland AI consultant instead of a distant vendor?
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Many AI consulting firms are built around slide decks and buzzwords. Ethivox
          is rooted in Cleveland and built for organizations that need pragmatic,
          high-ethics AI systems. We understand the constraints of regional businesses:
          budgets, staffing, culture, and long-term relationships.
        </p>
        <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <li className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Context-aware architecture
            </p>
            <p>
              We design AI systems that fit your existing tools, teams, and compliance
              requirements—rather than forcing a generic model on you.
            </p>
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              In-person or hybrid collaboration
            </p>
            <p>
              As a Cleveland AI consultant, we can combine remote design work with
              on-site workshops and leadership sessions when needed.
            </p>
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs font-semibold text-emerald-300">
              Ethical and long-term by design
            </p>
            <p>
              Our work is anchored in responsible-use and long-term maintainability,
              not one-off experiments that staff quietly abandon.
            </p>
          </li>
        </ul>
      </section>

      {/* FAQ for SEO */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Cleveland AI consultant FAQ.
        </h2>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              What does an AI consultant in Cleveland actually do?
            </h3>
            <p>
              Ethivox focuses on system design, not just tools. We map your workflows,
              data, and knowledge, then design AI architectures, automations, and
              governance structures that align with your organization&apos;s goals and
              risk tolerance.
            </p>
          </div>
          <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              What size organizations does Ethivox work with?
            </h3>
            <p>
              We primarily work with small and mid-sized organizations in Cleveland and
              Northeast Ohio—businesses, agencies, and institutions that are big enough
              to benefit from AI systems but small enough to care about culture and
              ethics.
            </p>
          </div>
          <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              How do we start working with Ethivox?
            </h3>
            <p>
              Most clients begin with a short discovery call and an AI &amp; knowledge
              architecture audit. From there, we recommend a sequence of practical,
              ethical steps—not a one-size-fits-all transformation.
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
              Talk with a Cleveland AI consultant about your systems.
            </h2>
            <p className="max-w-xl text-sm text-slate-200">
              In a focused working session, we map your workflows, knowledge, and risks
              into an initial AI architecture. You leave with clarity on what to build,
              what to avoid, and how to move forward responsibly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
            >
              Schedule an intro call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
