// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          About
        </p>
        <h1 className="text-3xl font-semibold text-slate-50">
          About Ethivox
        </h1>
      </header>

      <p className="text-sm text-slate-300">
        Ethivox is an ethical intelligence systems consultancy based in Cleveland,
        Ohio. We design human-centered AI architectures, knowledge systems, and
        governance frameworks for small and mid-sized organizations.
      </p>

      <p className="text-sm text-slate-300">
        This is a test version to confirm the /about route compiles correctly.
        Once this loads, we’ll replace it with the full About layout.
      </p>
    </div>
  );
}
