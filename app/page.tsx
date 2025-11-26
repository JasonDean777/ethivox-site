// app/page.tsx

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            AI Consultant • Ethical Intelligence Systems • Based in Cleveland, Ohio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A human-centered{" "}
            <span className="text-emerald-300">AI consultant</span> for small &amp;
            mid-sized organizations.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Ethivox designs ethical, human-centered AI systems and knowledge
            architectures for leadership teams. We architect workflows and governance
            so AI functions as a co-executive partner—clear, explainable, and aligned
            with how your organization actually runs.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
            >
              Talk with an AI consultant
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

      {/* Cleveland Vendor Decoder – feature card */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          New • Built in Cleveland
        </p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Cleveland Vendor Decoder
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Before you sign a retainer or services agreement, run it through the Cleveland
          Vendor Decoder. Paste a proposal and get a structured breakdown of risk, red
          flags, missing clarity, and the questions you should ask next—built by Ethivox
          to protect Cleveland founders and leadership teams.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/cleveland-vendor-decoder"
            className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
          >
            Open the Cleveland Vendor Decoder →
          </a>
          <p className="text-xs text-slate-400">
            Hyper-local, ethics-first AI for proposals, agencies, and vendors.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          AI consulting for leadership teams.
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Ethivox works with small and mid-sized organizations that want serious AI
          systems—not experiments that create more noise than clarity. We focus on
          leaders who are accountable for outcomes, culture, and long-term trust.
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
              AI consulting services.
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
              tailored to how your organization actually operates.
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

      {/* Local / proximity focus */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Why work with a nearby AI consultant instead of a distant vendor?
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Many AI consulting firms are built around slide decks and buzzwords. Ethivox
          is built for organizations that need pragmatic, high-ethics AI systems. We
          understand the constraints of real-world businesses: budgets, staffing,
          culture, and long-term relationships.
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
              When it matters, we can combine remote design work with live workshops
              and leadership sessions to align on decisions and governance.
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
      {/* Why I built Ethivox */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-slate-50">
    Why I built Ethivox instead of being just a “fractional CMO”.
  </h2>
  <p className="max-w-2xl text-sm text-slate-300">
    I didn&apos;t start Ethivox because the world needed another AI consultant.
    I started it because I watched, from the inside, how AI, vendors, ads, and
    funnels can quietly distort reality for a real business.
  </p>
  <p className="max-w-2xl text-sm text-slate-300">
    At The Lonely Entrepreneur (TLE), I wasn&apos;t running slide decks. I was
    inside the actual system:
  </p>
  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
    <li>Google Ads traffic that looked “good” on dashboards but was polluted by bot clicks.</li>
    <li>Landing pages and forms that were fine alone but broke when chained together.</li>
    <li>Vendors and tools with big promises, vague accountability, and no coherent architecture.</li>
  </ul>
  <p className="max-w-2xl text-sm text-slate-300">
    My role became less “run campaigns” and more:
  </p>
  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
    <li>Map the entire flow: traffic → landing pages → forms → HubSpot → sales → recurring revenue.</li>
    <li>Separate signal from noise in the data.</li>
    <li>Decide where AI should actually live in that system—and where it shouldn&apos;t.</li>
  </ul>
  <p className="max-w-2xl text-sm text-slate-300">
    Ethivox exists because most leaders don&apos;t need more AI demos. They need
    someone who can see the whole system, call out structural risk and vendor BS
    before it compounds, and design AI into the architecture of the business—not
    as decoration on top.
  </p>
</section>

{/* How I think as an AI architect */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-slate-50">
    How I think as an AI architect.
  </h2>
  <p className="max-w-2xl text-sm text-slate-300">
    When I look at a company&apos;s AI and digital stack—TLE&apos;s or yours—I
    score it across four dimensions:
  </p>
  <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
    <div className="space-y-1">
      <p className="text-xs font-semibold text-emerald-300">
        01 · Architecture &amp; Flow
      </p>
      <p>
        Does data, intent, and action move through the system in a deliberate way?
        At TLE, this meant mapping Google Ads → landing pages → hidden field tagging
        → HubSpot deals → Sidekick calls → LC membership.
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs font-semibold text-emerald-300">
        02 · Automation &amp; Agents
      </p>
      <p>
        Where should humans stop doing glue work, and where should AI actually carry load?
        For TLE, that looked like AI-assisted keyword analysis, and future agents to
        summarize calls, proposals, and content into usable assets.
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs font-semibold text-emerald-300">
        03 · Measurement &amp; Feedback
      </p>
      <p>
        Can we see what&apos;s working fast enough to change it? At TLE, that meant
        chasing down a 10k traffic spike and invalid clicks instead of just celebrating
        “more visitors,” and measuring landing pages against real HP leads, not just CTR.
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs font-semibold text-emerald-300">
        04 · Ethics &amp; Reality Alignment
      </p>
      <p>
        Is the system aligned with how the business actually runs, without quietly
        misleading everyone? With TLE and Ethivox, that means no fake certainty in
        sentiment or vendor quality, and tools like the Cleveland Vendor Decoder to
        surface risk transparently.
      </p>
    </div>
  </div>
  <p className="max-w-2xl text-xs text-slate-400">
    When we work together, I apply the same scorecard to your system that I applied
    to TLE&apos;s: is this architecture clear, measurable, automatable in the right
    places, and honest about reality?
  </p>
</section>


      {/* FAQ for SEO */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          AI consultant FAQ.
        </h2>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              What does an AI consultant actually do?
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
              We primarily work with small and mid-sized organizations—businesses,
              agencies, and institutions that are big enough to benefit from AI systems
              but small enough to care deeply about culture.
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
              Talk with an AI consultant about your systems.
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
