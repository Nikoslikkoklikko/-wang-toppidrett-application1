"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glow = false,
  glowColor,
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        relative rounded-2xl overflow-hidden
        bg-[var(--bg-card)] backdrop-blur-xl
        border border-[var(--border)]
        transition-all duration-300
        ${glow ? "glow-pulse" : ""}
        ${hover ? "hover:border-[var(--accent)] hover:shadow-lg" : ""}
        ${className}
      `}
      style={glow && glowColor ? {
        boxShadow: `0 0 30px ${glowColor}`,
      } : undefined}
    >
      {/* Gradient overlay for glass effect */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, var(--glass-overlay-start) 0%, transparent 50%, var(--glass-overlay-end) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
