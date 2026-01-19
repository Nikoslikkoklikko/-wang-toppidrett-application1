"use client";

import { ReactNode } from "react";

interface QuoteBlockProps {
  children: ReactNode;
}

export default function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <div
      className="relative my-6 py-6 px-8 rounded-r-2xl"
      style={{
        background: "linear-gradient(135deg, rgba(45, 90, 39, 0.06) 0%, rgba(74, 143, 65, 0.1) 100%)",
        borderLeft: "3px solid var(--accent)",
      }}
    >
      <p className="font-serif text-lg md:text-xl italic text-[var(--text-primary)] leading-relaxed">
        {children}
      </p>
    </div>
  );
}
