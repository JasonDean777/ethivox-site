// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          Contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Schedule an intro conversation.
        </h1>
        <p className="text-sm text-slate-300">
          Share a bit about your organization, your role, and what you&apos;re hoping
          AI can do for you. We&apos;ll follow up to schedule a focused working
          session, not a generic sales pitch.
        </p>
      </header>

      <form
        className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm"
        action="https://formspree.io/f/mdkvdnkd" // ⬅️ replace with your real Formspree endpoint
        method="POST"
      >
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium text-slate-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="you@company.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="company" className="text-xs font-medium text-slate-200">
            Organization
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="Company, agency, or institution"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="role" className="text-xs font-medium text-slate-200">
            Role
          </label>
          <input
            id="role"
            name="role"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="CEO, founder, COO, director, etc."
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="focus" className="text-xs font-medium text-slate-200">
            What do you want AI to help with?
          </label>
          <textarea
            id="focus"
            name="focus"
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="Briefly describe your current situation, risks, or goals."
          />
        </div>

        {/* Metadata for your inbox */}
        <input type="hidden" name="_subject" value="New Ethivox intro request" />
        <input type="hidden" name="source" value="ethivoxai.com" />

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-300"
        >
          Submit
        </button>

        <p className="mt-2 text-xs text-slate-400">
          Submissions are delivered securely via Formspree. We&apos;ll respond
          personally, not with an automated bot.
        </p>
      </form>
    </div>
  );
}
