// app/blog/page.tsx

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          Blog
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Ethivox Field Notes
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Short, practical pieces on AI architecture, knowledge systems, and ethical
          deployment — written for Cleveland leadership teams who want AI as an
          executive partner, not a toy.
        </p>
      </header>

      {/* Placeholder posts list */}
      <section className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Coming soon
          </p>
          <h2 className="mt-2 text-base font-semibold text-slate-50">
            The first Ethivox field notes are on the way.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            This will become the home for case studies, architecture breakdowns,
            and ethical AI playbooks. For now, if you&apos;d like to talk through
            your specific situation, the fastest path is still a direct
            conversation.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
          >
            Schedule an intro call
          </a>
        </div>
      </section>
    </div>
  );
}
