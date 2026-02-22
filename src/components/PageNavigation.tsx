"use client";

import Link from "next/link";

const PAGE_ORDER = [
  { path: "/tennis", label: "Tennis" },
  { path: "/disiplin", label: "Disiplin" },
  { path: "/akademisk", label: "Akademisk" },
  { path: "/selvstendighet", label: "Selvstendighet" },
  { path: "/hvorfor-wang", label: "Hvorfor Wang" },
];

interface PageNavigationProps {
  currentPath: string;
}

export default function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = PAGE_ORDER.findIndex((p) => p.path === currentPath);
  const prev = currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null;
  const next =
    currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null;

  return (
    <nav
      aria-label="Sidenavigasjon"
      className="relative z-10 px-6 py-16"
    >
      <div
        className="flex items-center gap-4"
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: prev && next ? "space-between" : next ? "flex-end" : "flex-start",
        }}
      >
        {prev && (
          <Link
            href={prev.path}
            className="group flex items-center gap-3 glass rounded-xl px-6 py-4 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--glow-primary)]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--accent)] transition-transform duration-300 group-hover:-translate-x-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <div className="text-left">
              <span className="block text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Forrige
              </span>
              <span className="block text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {prev.label}
              </span>
            </div>
          </Link>
        )}

        {next && (
          <Link
            href={next.path}
            className="group flex items-center gap-3 glass rounded-xl px-6 py-4 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--glow-primary)] ml-auto"
          >
            <div className="text-right">
              <span className="block text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Neste
              </span>
              <span className="block text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {next.label}
              </span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
}
