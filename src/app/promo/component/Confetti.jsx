"use client";

import { motion } from "framer-motion";

export default function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomDelay = Math.random() * 1.2;
        const randomDuration = 1.5 + Math.random() * 1.5;

        const colors = [
          "bg-blue-500",
          "bg-pink-500",
          "bg-yellow-400",
          "bg-green-500",
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const randomSize = Math.random() * 6 + 4;

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: -40,
              x: randomX,
              rotate: 0,
              scale: Math.random() * 0.4 + 0.8,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-40, 200 + Math.random() * 100],
              x: [randomX, randomX + (Math.random() - 0.5) * 100],
              rotate: 360,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className={`absolute left-1/2 top-0 rounded-sm ${randomColor}`}
            style={{ width: randomSize, height: randomSize }}
          />
        );
      })}
    </div>
  );
}
