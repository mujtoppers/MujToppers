"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(97, 142, 61)", // Muted green
    "rgb(56, 160, 103)", // Soft teal
    "rgb(58, 145, 178)", // Muted blue
    "rgb(28, 104, 170)", // Deeper blue
    "rgb(95, 64, 196)", // Soft purple
    "rgb(154, 70, 187)", // Muted violet
    "rgb(196, 63, 144)", // Deep magenta
    "rgb(209, 89, 89)", // Warm red
    "rgb(217, 117, 78)", // Soft orange
    "rgb(233, 148, 64)", // Warm sunset
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre nunito-className tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
