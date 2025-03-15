"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import CardGrid from "@/components/CardGrid";
import Link from "next/link";
import { Instagram } from "lucide-react";
export default function Home() {
  const ref = useRef(null);

  return (
    // 1. Add `overflow-x-hidden` to clip any content that extends horizontally
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* 🚀 Hero Section */}
      <HeroParallaxDemo />
      <HeroScrollDemo />
      {/* 🚀 Infinite Moving Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col gap-y-8 items-center justify-center my-10 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="font-bold tracking-tight 
                     bg-gradient-to-r text-black
                     text-2xl sm:text-4xl md:text-5xl flex flex-wrap justify-center"
        >
          {Array.from("More Than Just Notes – MUJ Life, Sorted!").map(
            (letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    rotate: -10,
                    filter: "blur(5px)",
                  },
                  visible: {
                    opacity: 1,
                    y: [20, -10, 0],
                    rotate: [0, 5, -5, 0],
                    filter: ["blur(5px)", "blur(0px)"],

                    textShadow: [
                      "0px 0px 10px rgba(255, 189, 89, 0.8)",
                      "0px 0px 5px rgba(255, 189, 89, 0.5)",
                      "none",
                    ],
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.05,
                    },
                  },
                }}
                className="whitespace-pre"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            )
          )}
        </motion.h1>
      </motion.div>
      <div className="px-4">
        <InfiniteMovingCardsDemo />
      </div>

      {/* Additional sections below */}
      <motion.div
        ref={ref}
        className="flex flex-col justify-center px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-y-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center font-bold leading-tight tracking-tight 
                      text-black
          
                       text-2xl sm:text-4xl md:text-5xl"
          >
            Your College Journey, Simplified: Study, Eat & Chill
            <div className="text-center text-sm sm:text-base md:text-lg">
              We’ve Got You Covered!
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-medium text-base sm:text-xl md:text-2xl text-gray-900 text-center leading-loose max-w-5xl mx-auto"
          >
            <motion.span
              initial={{ filter: "blur(8px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-blackfont-extrabold"
            >
              College life is hectic,
            </motion.span>{" "}
            but we make it effortless.
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-black font-semibold"
            >
              {" "}
              Whether you need toppers’ notes, PYQs, food delivery, or cab
              booking,
            </motion.span>{" "}
            we ensure you focus on what matters while we handle the rest.
            <motion.span
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              className="text-black font-bold italic"
            >
              {" "}
              Just study, relax, and enjoy your college life.
            </motion.span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-10 mb-24"
          id="material"
        >
          <CardGrid />
        </motion.div>
      </motion.div>

      {/* ADDITIONAL SECTION 1 - About Us */}
      <motion.div
        className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.img
              src="/AboutUs.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              We are a dedicated team on a mission to simplify college life by
              offering comprehensive resources, curated study materials, and a
              range of services designed to help students excel.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ADDITIONAL SECTION 2 - Our Services */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Comprehensive resources designed to help you excel in your academic
            journey at MUJ
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Exam Tips
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Access a comprehensive collection of best exam tips to
                understand exam patterns and prepare effectively.
              </p>
              <button className="mt-auto py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1">
                <Link href="/examTips">View Tips</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Placement Tips
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Watch how Manipal University Jaipur students secured placements
                at top tech companies and learn from their experiences..
              </p>
              <button className="mt-auto py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1">
                <Link href="/placementTips">View Placement Stories</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Startup Culture
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Gain insights into fast-paced, innovative work environments
                where adaptability and problem-solving are key.
              </p>
              <button className="mt-auto py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-1">
                <Link href={"/collegeTip"}>Have a Look</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ADDITIONAL SECTION 3 - Get In Touch */}
      <motion.div
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let’s Connect!
          </motion.h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Have questions or need assistance? We’d love to hear from you. Drop
            us a message, and we’ll get back to you as soon as possible!
          </p>

          {/* Contact Button */}
          <motion.a
            href="https://www.instagram.com/mujtoppers/"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6a00] to-[#ff914d] text-white font-semibold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-label="Contact Us via Instagram"
          >
            <Instagram className="w-6 h-6" /> Contact Us
            <span className="absolute inset-x-0 bottom-0 h-1 bg-white opacity-0 transition-opacity group-hover:opacity-100"></span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
