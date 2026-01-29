"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full glass" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full glass flex items-center justify-center cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "light" ? "Bytt til mørk modus" : "Bytt til lys modus"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {/* Sun */}
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 w-6 h-6"
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        >
          <circle cx="12" cy="12" r="4" fill="var(--accent)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.line
              key={i}
              x1="12"
              y1="2"
              x2="12"
              y2="4"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transformOrigin: "12px 12px", transform: `rotate(${angle}deg)` }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.svg>

        {/* Moon */}
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 w-6 h-6"
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
            rotate: theme === "dark" ? 0 : -90
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="var(--accent)"
            animate={{
              filter: ["drop-shadow(0 0 4px var(--accent))", "drop-shadow(0 0 8px var(--accent))", "drop-shadow(0 0 4px var(--accent))"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Stars */}
          {[[6, 4], [18, 8], [4, 16]].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="1"
              fill="var(--accent-light)"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </motion.button>
  );
}
