// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethivoxai.com"),
  title: "Ethivox | AI Consultant & Ethical Intelligence Systems in Cleveland",
  description:
    "Ethivox is an AI consultant in Cleveland, Ohio that designs ethical, human-centered AI systems, knowledge architectures, and governance frameworks for small and mid-sized organizations.",
  openGraph: {
    title: "Ethivox | AI Consultant & Ethical Intelligence Systems in Cleveland",
    description:
      "Ethivox helps Cleveland leadership teams architect AI, knowledge, and governance systems that create real leverage without losing their humanity.",
    url: "https://ethivoxai.com",
    siteName: "Ethivox",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethivox | AI Consultant & Ethical Intelligence Systems in Cleveland",
    description:
      "Ethivox is a Cleveland-based AI consultant focused on ethical intelligence systems, knowledge engineering, and AI governance for small and mid-sized organizations.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
                  AI Consultant • Ethical Intelligence Systems • Cleveland, Ohio
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
                <p>Cleveland, Ohio • AI Consultant &amp; Ethical Intelligence Systems</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <span>© {new Date().getFullYear()} Ethivox LLC</span>
                <span className="hidden sm:inline">•</span>
                <span>Architecting human-centered AI for SMBs in Northeast Ohio and beyond.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
