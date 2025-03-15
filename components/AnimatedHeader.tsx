"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedHeader({
  title,
  subtitle = "Pick your specialization and dive into curated study resources, notes, and more.",
}: {
  title: string;
  subtitle?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for staggered text animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const titleWords = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative px-4 py-8 md:py-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 blur-3xl"
          animate={{
            x: mounted ? [0, 10, -10, 0] : 0,
            y: mounted ? [0, -15, 5, 0] : 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-gradient-to-r from-orange-400 to-red-500 blur-3xl"
          animate={{
            x: mounted ? [0, -15, 15, 0] : 0,
            y: mounted ? [0, 10, -5, 0] : 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="inline-block relative">
            <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 md:mb-4">
              <span className="inline-block mr-3">Explore</span>
              <motion.span
                className="inline-block bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00] text-transparent bg-clip-text"
                variants={item}
              >
                {titleWords.join(" ")}
              </motion.span>
              <span className="inline-block ml-3">Year {title == "first" ? "Cycle" : "Branches"}</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="mt-2 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Underline accent */}
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
