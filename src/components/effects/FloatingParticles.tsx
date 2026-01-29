"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "ball" | "dot";
}

function TennisBallParticle({ size }: { size: number }) {
  return (
    <div
      className="rounded-full relative"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #c5e84d 0%, #9fc439 50%, #7ea32d 100%)",
        boxShadow: `
          inset -${size * 0.1}px -${size * 0.1}px ${size * 0.25}px rgba(0,0,0,0.2),
          inset ${size * 0.05}px ${size * 0.05}px ${size * 0.125}px rgba(255,255,255,0.4),
          0 ${size * 0.125}px ${size * 0.5}px rgba(45, 90, 39, 0.15)
        `,
      }}
    >
      <div
        className="absolute top-1/2 left-0 right-0"
        style={{
          height: size * 0.05,
          background: "rgba(255,255,255,0.6)",
          transform: "translateY(-50%) rotate(-20deg) scaleX(1.2)",
          borderRadius: "50%",
          filter: "blur(0.5px)",
        }}
      />
      <div
        className="absolute top-0 bottom-0 left-1/2"
        style={{
          width: size * 0.05,
          background: "rgba(255,255,255,0.4)",
          transform: "translateX(-50%) rotate(20deg) scaleY(1.1)",
          borderRadius: "50%",
          filter: "blur(0.5px)",
        }}
      />
    </div>
  );
}

function DotParticle({ size }: { size: number }) {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: "var(--accent)",
        opacity: 0.4,
        boxShadow: `0 0 ${size}px var(--glow-primary)`,
      }}
    />
  );
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];

    // Tennis balls (fewer, larger)
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        type: "ball",
      });
    }

    // Small dots (more, smaller)
    for (let i = 5; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        type: "dot",
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, -200, -100, 0],
            x: [0, 30, -20, 40, 0],
            rotate: particle.type === "ball" ? [0, 180, 360] : [0, 0, 0],
            opacity: [0.3, 0.6, 0.8, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === "ball" ? (
            <TennisBallParticle size={particle.size} />
          ) : (
            <DotParticle size={particle.size} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
