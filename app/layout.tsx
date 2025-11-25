// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethivoxai.com"),
  title: "Ethivox | Ethical Intelligence Systems for Cleveland Businesses",
  description:
    "Ethivox designs ethical, human-centered AI systems for small and mid-sized organizations in Cleveland and beyond. We architect AI, knowledge, and governance systems that act as a co-executive partner.",
  openGraph: {
    title: "Ethivox | Ethical Intelligence Systems for Cleveland Businesses",
    description:
      "Ethivox helps leadership teams architect AI, knowledge, and governance systems that create real leverage without losing their humanity.",
    url: "https://ethivoxai.com",
    siteName: "Ethivox",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethivox | Ethical Intelligence Systems for Cleveland Businesses",
    description:
      "Ethivox designs ethical, human-centered AI architectures, knowledge systems, and governance frameworks for small and mid-sized organizations.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Header / Navigation */}
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              {/* Brand */}
              <Link href="/" className="flex items-baseline gap-2">
                <span className="text-lg font-semibold tracking-tight">
                  Ethivox
                </span>
                <span className="hidden text-xs text-slate-400 sm:inline">
                  Ethical Intelligence Systems • Cleveland
                </span>
              </Link>

              {/* Nav links */}
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>

                <Link href="/about" className="hover:text-white">
                  About
                </Link>

                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 shadow-sm hover:border-emerald-300 hover:bg-emerald-500/20"
                >
                  Schedule an intro call
                </Link>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-800 bg-slate-950/90">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-300">Ethivox</p>
                <p>Cleveland, Ohio • Ethical Intelligence Systems</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <span>© {new Date().getFullYear()} Ethivox LLC</span>
                <span className="hidden sm:inline">•</span>
                <span>Architecting human-centered AI for SMBs.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
