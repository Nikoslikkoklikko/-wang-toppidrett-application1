"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Hjem" },
  { href: "/tennis", label: "Tennis" },
  { href: "/disiplin", label: "Disiplin" },
  { href: "/akademisk", label: "Akademisk" },
  { href: "/selvstendighet", label: "Selvstendighet" },
  { href: "/fremtiden", label: "Fremtiden" },
  { href: "/hvorfor-wang", label: "Hvorfor Wang?" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[100] w-12 h-12 flex items-center justify-center rounded-full glass hover:border-[var(--border-hover)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-0.5 bg-[var(--text-primary)] rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-0.5 bg-[var(--text-primary)] rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-0.5 bg-[var(--text-primary)] rounded-full origin-center"
          />
        </div>
      </motion.button>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
          >
            {/* Background gradient orb */}
            <div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
                filter: "blur(100px)",
              }}
            />

            {/* Menu Items */}
            <nav className="relative z-10">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative block py-3 px-8 text-center"
                      >
                        <span
                          className={`font-serif text-4xl md:text-5xl lg:text-6xl block transition-all duration-300 ${
                            isActive
                              ? "text-[var(--accent)]"
                              : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                          }`}
                        >
                          {item.label}
                        </span>

                        {/* Underline animation */}
                        <motion.span
                          className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--accent)] rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          whileHover={{ width: "80%" }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Active indicator dot */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute -left-4 top-1/2 w-2 h-2 rounded-full bg-[var(--accent)]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Tennis ball decoration */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 flex justify-center"
              >
                <div
                  className="w-14 h-14 rounded-full relative"
                  style={{
                    background: "linear-gradient(135deg, #c5e84d 0%, #9fc439 50%, #7ea32d 100%)",
                    boxShadow: `
                      inset -4px -4px 10px rgba(0,0,0,0.2),
                      inset 2px 2px 5px rgba(255,255,255,0.4),
                      0 4px 20px rgba(45, 90, 39, 0.2)
                    `,
                  }}
                >
                  {/* Tennis ball curve lines */}
                  <div
                    className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      transform: "translateY(-50%) rotate(-20deg) scaleX(1.2)",
                      borderRadius: "50%",
                      filter: "blur(0.3px)",
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2"
                    style={{
                      background: "rgba(255,255,255,0.4)",
                      transform: "translateX(-50%) rotate(20deg) scaleY(1.1)",
                      borderRadius: "50%",
                      filter: "blur(0.3px)",
                    }}
                  />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
