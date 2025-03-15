"use client"
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const ExamTipsPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            MUJ Toppers Exam Survival Guide
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Practical strategies, proven techniques, and essential tips to help
            you ace your exams like a pro.
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.main
        className="py-12 px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ace Your Papers Like a Pro
          </h2>
          <p className="text-gray-600">
            Exams can be challenging, but with the right approach, you can
            maximize your potential and achieve excellent results. Our
            comprehensive guide covers everything from preparation strategies to
            exam day tactics.
          </p>
        </motion.div>

        {/* Tips Sections */}
        <div className="space-y-12">
          {/* Mid-Terms Section */}
          <motion.section
            className="bg-blue-50 rounded-xl overflow-hidden border border-blue-200"
            variants={itemVariants}
          >
            <div className="bg-blue-600 py-3 px-6">
              <h2 className="text-xl font-bold text-white">MID-TERMS</h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Prepare strategically</span> -
                    Mid-Terms are comparatively easier, and you need to prepare
                    less syllabus. Try to score higher marks in Mid-Terms as
                    they are a significant opportunity to boost your overall
                    grade.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">
                      Enhance your answer sheet
                    </span>{" "}
                    - While attempting the exam, incorporate diagrams, tables,
                    formulas, and even brief introductions on all topics. This
                    helps you to perform a near-perfect answer sheet and
                    increases your chances to score marks even if some other
                    teacher grades your script.
                  </p>
                </li>
              </ol>
            </div>
          </motion.section>

          {/* End-Terms Section */}
          <motion.section
            className="bg-indigo-50 rounded-xl overflow-hidden border border-indigo-200"
            variants={itemVariants}
          >
            <div className="bg-indigo-600 py-3 px-6">
              <h2 className="text-xl font-bold text-white">END-TERMS</h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Create a strategic plan</span>{" "}
                    - End-Terms cover a vast syllabus, so it is advisable to
                    make a list of important topics. Also, reach out to students
                    of other sections to get question banks.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Presentation matters</span> -
                    While attempting the exam, incorporate diagrams, tables,
                    formulas, and even brief introduction on all topics. This
                    helps you to perform a near-perfect answer sheet and
                    increases your chances to score marks even if some other
                    teacher grades your script.
                  </p>
                </li>
              </ol>
            </div>
          </motion.section>

          {/* Lab Exam Section */}
          <motion.section
            className="bg-purple-50 rounded-xl overflow-hidden border border-purple-200"
            variants={itemVariants}
          >
            <div className="bg-purple-600 py-3 px-6">
              <h2 className="text-xl font-bold text-white">LAB EXAM</h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Focus on what matters</span> -
                    Pay more attention to working principle, observations and
                    calculations and less on theory while writing lab exams as
                    they do not carry much weightage. Also use GPT for the
                    entire syllabus so as to get viva questions.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Build relationships</span> -
                    Common mistake of lab exams is not being regular and
                    attentive in lab. Build a good rapport with teachers and lab
                    assistants and revise all experiments by performing them
                    before End-Term Lab Exam.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Master viva questions</span> -
                    Co-relate topics taught in class and lab viva questions.
                    Make list of questions of important viva questions that
                    teachers inform about in class. Try to fully understand such
                    questions in class itself so that you can ace the viva. This
                    is particularly beneficial for EP and EC labs.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Stay organized</span> - Be
                    continuous with lab work so it does not pile up in the end.
                    Remember to clear out answers on viva questions from your
                    teacher beforehand so that no scope of failure is left when
                    External viva is conducted. This is advice common to all
                    labs.
                  </p>
                </li>
              </ol>
            </div>
          </motion.section>

          {/* General Instructions Section */}
          <motion.section
            className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            variants={itemVariants}
          >
            <div className="bg-gray-700 py-3 px-6">
              <h2 className="text-xl font-bold text-white">
                GENERAL INSTRUCTIONS
              </h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Be prepared</span> - For
                    effective study to be done in advance, having a clarity on
                    syllabus is important. Have access to Course handouts, refer
                    notes and study materials, obtained from seniors and
                    interact with teachers to remove haziness on syllabus.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Leverage resources</span> -
                    Request teachers or Class Representatives to efficiently
                    share PPTs and study material so that you can prepare in
                    advance.
                  </p>
                </li>
                <li className="text-gray-700">
                  <p>
                    <span className="font-medium">Manage time effectively</span>{" "}
                    - Be quick with your assignments submissions, specially
                    before End-Terms as work of all subjects pile up and you may
                    find it harder to cope with studies then.
                  </p>
                </li>
              </ol>
            </div>
          </motion.section>

          {/* Study Strategies Section */}
          <motion.section
            className="bg-blue-50 rounded-xl overflow-hidden border border-blue-200"
            variants={itemVariants}
          >
            <div className="bg-blue-600 py-3 px-6">
              <h2 className="text-xl font-bold text-white">STUDY STRATEGIES</h2>
            </div>
            <div className="p-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Start Early, Stay Ahead
                  </h3>
                  <p className="text-gray-700">
                    Procrastination feels tempting until the deadlines hit. Plan
                    your preparation wisely. Prioritize subjects based on
                    difficulty and exam dates. Use Notion, Google Calendar, or
                    sticky notes to schedule study blocks. Leave some buffer
                    time for revisions and last-minute reviews.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Set Up Your Study Zone
                  </h3>
                  <p className="text-gray-700">
                    A well-organized space boosts concentration. Whether you
                    prefer a minimal setup or an organized mess, make sure you
                    have good lighting, a comfortable chair, and zero
                    distractions (keep your phone on Do Not Disturb). Some focus
                    better with background music, while others need complete
                    silence.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Ditch Passive Learning
                  </h3>
                  <p className="text-gray-700">
                    Simply reading notes isn&apos;t enough. Engage your brain with
                    Mind Maps to connect key ideas visually, Flashcards using
                    apps like Anki or Quizlet, and teaching someone (if you can
                    explain it, you understand it). Find the method that suits
                    you and move beyond rote memorization.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Practice Like It&apos;s Game Day
                  </h3>
                  <p className="text-gray-700">
                    Past year questions are your best resource. Solve them under
                    real exam conditions - no distractions, timed sessions, and
                    handwritten answers. This improves time management and
                    builds confidence.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Take Smart Breaks
                  </h3>
                  <p className="text-gray-700">
                    Studying for hours without a break leads to burnout. Try the
                    Pomodoro Technique: Study for 25 minutes, then take a
                    5-minute break. After four cycles, take a longer break of
                    20-30 minutes. Use breaks to stretch, hydrate, or step
                    outside for fresh air.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-blue-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    Use Technology Wisely
                  </h3>
                  <p className="text-gray-700">
                    Technology can be helpful or distracting. Use it wisely with
                    Quizlet for flashcards, Notion/Google Keep to organize
                    notes, and Forest App to maintain focus. Turn off
                    notifications and stay away from social media while
                    studying.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Physical & Mental Wellbeing */}
          <motion.section
            className="bg-indigo-50 rounded-xl overflow-hidden border border-indigo-200"
            variants={itemVariants}
          >
            <div className="bg-indigo-600 py-3 px-6">
              <h2 className="text-xl font-bold text-white">
                PHYSICAL & MENTAL WELLBEING
              </h2>
            </div>
            <div className="p-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-indigo-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                    Eat Smart, Stay Sharp
                  </h3>
                  <p className="text-gray-700">
                    Your diet affects your focus and energy levels. Choose foods
                    that enhance brain function: nuts and berries for memory,
                    whole grains for steady energy, and water for hydration. On
                    exam day, eat a balanced meal to avoid energy crashes.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-indigo-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                    Manage Stress Effectively
                  </h3>
                  <p className="text-gray-700">
                    Exam pressure is real, but staying calm makes a difference.
                    Try meditation or deep breathing exercises, taking short
                    breaks for relaxation, and talking to a friend or mentor for
                    support. A clear mind leads to better performance.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-5 shadow-md border border-indigo-100"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                    Stay Physically Active
                  </h3>
                  <p className="text-gray-700">
                    Exercise boosts memory and concentration. Even short
                    activities like a quick walk between study sessions, a short
                    workout, or stretching at your desk can help. Physical
                    movement improves focus and keeps stress levels low.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Exam Day Preparation */}
        <motion.section
          className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl overflow-hidden shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Exam Day Game Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">
                    Double-check your exam time and venue
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">
                    Pack essentials: ID, pens, calculator, water
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">
                    Get a good night&aspos;s sleep before the exam
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">
                    Arrive 30 minutes early to reduce stress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            With these strategies and tips, you&apos;re well-equipped to excel in
            your exams. Remember, success comes from consistent preparation and
            a positive mindset.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#materials"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Explore More Resources
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default ExamTipsPage;
