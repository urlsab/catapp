import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  // Respect user's motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const NUM_BUBBLES = 8;
  const blueShades = [
    "#1a79f6",
    "#0e2a47",
    "#0a1931",
    "#3b82f6",
    "#2563eb",
    "#60a5fa"
  ];

  function randomPos() {
    return {
      top: Math.random() * 100,
      left: Math.random() * 100
    };
  }

  function randomSize() {
    return Math.random() * 150 + 50;
  }

  // State: array of { pos, size, color1, color2 }
  const [bubbles, setBubbles] = React.useState(() =>
    Array.from({ length: NUM_BUBBLES }).map(() => ({
      pos: randomPos(),
      dest: randomPos(),
      size: randomSize(),
      color1: blueShades[Math.floor(Math.random() * blueShades.length)],
      color2: blueShades[Math.floor(Math.random() * blueShades.length)],
      rotationDirection: Math.random() > 0.5 ? 1 : -1,
      movementType: Math.random() > 0.5 ? 'circular' : 'linear'
    }))
  );

  // When a bubble finishes its animation, move it to a new random destination
  const handleComplete = (i: number) => {
    setBubbles(prev => {
      const next = [...prev];
      next[i] = {
        ...next[i],
        pos: next[i].dest,
        dest: randomPos(),
        // Optionally: randomize size and color for more variety
        size: randomSize(),
        color1: blueShades[Math.floor(Math.random() * blueShades.length)],
        color2: blueShades[Math.floor(Math.random() * blueShades.length)],
        rotationDirection: Math.random() > 0.5 ? 1 : -1,
        movementType: Math.random() > 0.5 ? 'circular' : 'linear'
      };
      return next;
    });
  };

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 bg-black z-10" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-black z-10">
      {/* Regular animated bubbles */}
      {bubbles.map((bubble, i) => {
        const isCircular = bubble.movementType === 'circular';
        const duration = 12 + Math.random() * 8; // Slower movement
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: `${bubble.pos.top}%`,
              left: `${bubble.pos.left}%`,
              background: `radial-gradient(circle, ${bubble.color1} 60%, ${bubble.color2} 100%)`,
              filter: 'blur(10px)'
            }}
            animate={{
              x: isCircular 
                ? [0, 100 * bubble.rotationDirection, 0, -100 * bubble.rotationDirection, 0]
                : [(bubble.dest.left - bubble.pos.left) * 0.1, (bubble.dest.left - bubble.pos.left)],
              y: isCircular
                ? [0, 0, 100 * bubble.rotationDirection, 0, 0]
                : [(bubble.dest.top - bubble.pos.top) * 0.1, (bubble.dest.top - bubble.pos.top)],
              // Breathing effect for opacity
              opacity: [0, 0.1, 0.3, 0.5, 0.3, 0.1, 0],
              // Breathing effect for scale
              scale: [0.5, 0.8, 1, 1.2, 1, 0.8, 0.5],
              rotate: isCircular ? [0, 360 * bubble.rotationDirection] : [0, 45 * bubble.rotationDirection]
            }}
            transition={{
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            onAnimationComplete={() => handleComplete(i)}
          />
        );
      })}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
    </div>
  );
};

export default AnimatedBackground;
