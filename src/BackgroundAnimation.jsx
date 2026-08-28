import React from "react";
import { motion } from "framer-motion";

const bubbles = [
  // Cyan
  { size: 4, left: "2%", top: "90%", x: 950, y: -550, duration: 14, delay: 0, color: "#22d3ee" },
  { size: 3, left: "12%", top: "75%", x: 850, y: -450, duration: 17, delay: 2, color: "#06b6d4" },
  { size: 5, left: "28%", top: "95%", x: 900, y: -650, duration: 20, delay: 5, color: "#67e8f9" },
  { size: 3, left: "55%", top: "85%", x: 800, y: -500, duration: 16, delay: 8, color: "#22d3ee" },
  { size: 4, left: "78%", top: "92%", x: 950, y: -600, duration: 19, delay: 3, color: "#06b6d4" },

  // Blue
  { size: 3, left: "8%", top: "60%", x: 1000, y: -300, duration: 18, delay: 6, color: "#3b82f6" },
  { size: 5, left: "22%", top: "82%", x: 850, y: -500, duration: 21, delay: 1, color: "#60a5fa" },
  { size: 3, left: "45%", top: "70%", x: 900, y: -400, duration: 15, delay: 9, color: "#2563eb" },
  { size: 4, left: "68%", top: "88%", x: 1000, y: -550, duration: 22, delay: 4, color: "#38bdf8" },
  { size: 3, left: "90%", top: "65%", x: 750, y: -350, duration: 17, delay: 11, color: "#60a5fa" },

  // Violet / Purple
  { size: 4, left: "5%", top: "45%", x: 900, y: -350, duration: 20, delay: 4, color: "#a78bfa" },
  { size: 3, left: "18%", top: "95%", x: 1000, y: -650, duration: 23, delay: 7, color: "#8b5cf6" },
  { size: 5, left: "38%", top: "80%", x: 850, y: -500, duration: 18, delay: 12, color: "#c084fc" },
  { size: 3, left: "60%", top: "92%", x: 900, y: -600, duration: 21, delay: 5, color: "#a855f7" },
  { size: 4, left: "82%", top: "78%", x: 800, y: -450, duration: 19, delay: 9, color: "#8b5cf6" },

  // Pink
  { size: 3, left: "15%", top: "88%", x: 850, y: -550, duration: 22, delay: 10, color: "#f472b6" },
  { size: 4, left: "32%", top: "65%", x: 950, y: -400, duration: 20, delay: 6, color: "#ec4899" },
  { size: 3, left: "72%", top: "90%", x: 900, y: -600, duration: 24, delay: 2, color: "#f9a8d4" },

  // Emerald - very subtle
  { size: 3, left: "25%", top: "55%", x: 800, y: -350, duration: 25, delay: 14, color: "#34d399" },
  { size: 4, left: "75%", top: "70%", x: 850, y: -400, duration: 23, delay: 8, color: "#10b981" },

  // White highlights
  { size: 2, left: "40%", top: "90%", x: 950, y: -600, duration: 18, delay: 3, color: "#ffffff" },
  { size: 2, left: "85%", top: "85%", x: 750, y: -500, duration: 20, delay: 13, color: "#ffffff" },
];

const BackgroundAnimation = () => {
  return (
    <div
      className="fixed inset-0 -z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Moving bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            backgroundColor: bubble.color,
            boxShadow: `0 0 10px ${bubble.color}`,
            willChange: "transform, opacity",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: bubble.x,
            y: bubble.y,
            opacity: [0, 0.65, 0.65, 0],
            scale: [0.5, 1, 1.15, 0.5],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}

      {/* Cyan ambient glow */}
      <motion.div
        className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple ambient glow */}
      <motion.div
        className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[130px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue bottom glow */}
      <motion.div
        className="absolute bottom-[-200px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};

export default React.memo(BackgroundAnimation);