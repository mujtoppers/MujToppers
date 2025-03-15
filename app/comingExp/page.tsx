"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Clock, Calendar, Star, ExternalLink } from "lucide-react";

// Types
interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function MinimalComingSoon() {
  // Launch date - set to 30 days from now
  const [launchDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  // State for countdown
  const [countdown, setCountdown] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Background animation states
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number }>
  >([]);

  // Calculate countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    setCountdown(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // Generate background stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center relative overflow-hidden">
      <Head>
        <title>Coming Soon</title>
        <meta
          name="description"
          content="Something spectacular is coming soon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}rem`,
              height: `${star.size}rem`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md px-6 py-12 mx-auto z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <Star className="inline-block text-yellow-400" size={32} />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Coming Soon
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-px w-24 bg-gray-700 mx-auto mb-6"
          />

          <motion.p variants={itemVariants} className="text-gray-300 mb-12">
            We're crafting something extraordinary. Stay tuned.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants}>
            <div className="backdrop-blur-sm bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700/60 shadow-xl">
              <div className="grid grid-cols-4 gap-4">
                <CountdownItem
                  value={countdown.days}
                  label="days"
                  icon={<Calendar size={18} className="text-indigo-400" />}
                />
                <CountdownItem
                  value={countdown.hours}
                  label="hours"
                  icon={<Clock size={18} className="text-teal-400" />}
                />
                <CountdownItem
                  value={countdown.minutes}
                  label="min"
                  icon={<Clock size={18} className="text-blue-400" />}
                />
                <CountdownItem
                  value={countdown.seconds}
                  label="sec"
                  icon={<Clock size={18} className="text-purple-400" />}
                />
              </div>
            </div>
          </motion.div>

          {/* Launch Date Display */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-gray-400 mb-12"
          >
            <span className="inline-flex items-center">
              <Calendar size={14} className="mr-2" />
              {launchDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>

          {/* Minimal footer */}
          <motion.div variants={itemVariants} className="text-xs text-gray-500">
            © {new Date().getFullYear()} • All rights reserved
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Countdown Item Component
function CountdownItem({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-light mb-1">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-xs uppercase tracking-widest text-gray-500">
        {label}
      </div>
    </div>
  );
}
