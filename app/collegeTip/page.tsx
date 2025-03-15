"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  Brain,
  Coffee,
  BookOpen,
  Lightbulb,
  Target,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LampDemo } from "@/components/LampDemo";

export default function ExamTipsPage() {
  // References for scroll animations
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });
  const router = useRouter();

  // State for popup
  const [showPopup, setShowPopup] = useState(false);
  const [currentTip, setCurrentTip] = useState<Tip | null>(null);

  // Parallax scroll effect for hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
  });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);

  interface Tip {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    iconBg: string;
    link?: string;
  }
  // Tips data
  const examTips = [
    {
      icon: <Brain className="w-12 h-12 text-indigo-600" />, // ✅ Correct
      title: "Exam Tips",
      description:
        "Practice past papers and timed mock tests to simulate real exam conditions. Focus on weak areas and use active recall techniques for better retention.",
      color: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100",
      link: "/examTips",
    },
    {
      icon: <Target className="w-12 h-12 text-emerald-600" />, // 🎯 Represents placement goals
      title: "Placement Tips",
      description:
        "Get updates on the latest college placements at MUJ. Stay informed about company visits, placement statistics, and interview experiences to prepare effectively.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      link: "/placementTips",
    },
    {
      icon: <Coffee className="w-12 h-12 text-amber-600" />, // ☕ Represents staying alert during internships
      title: "Internships",
      description:
        "Stay updated on upcoming and past internship experiences. Learn from peers and explore opportunities to enhance your skills through real-world projects.",
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
    },
    {
      icon: <User className="w-12 h-12 text-rose-600" />, // 👥 BookOpen fits networking and learning
      title: "Connect With Seniors",
      description:
        "Seek mentorship from seniors who have been through the process. Ask for guidance on coursework, projects, and career opportunities.",
      color: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />, // 💡 Represents collaboration and new ideas
      title: "Project Collaboration",
      description:
        "Connect with college students to build your dream projects. Collaborate on innovative ideas and leverage teamwork for impactful solutions.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />, // 🛠 Consider using Code2 or Git-related icon
      title: "Startup Culture",
      description:
        "Discover past and current startups from college. Learn from entrepreneurial journeys and get inspired to launch your own venture.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
    },
  ];

  // Custom popup component
  const TipPopup = ({ tip, onClose }: {tip: Tip; onClose: () => void}) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
          <LampDemo />
      </motion.div>
    );
  };

  const TipCard = ({ tip, index }: { tip: Tip; index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    const handleCardClick = () => {
      if (tip.link) {
        router.push(tip.link);
      } else {
        // Open popup for items without link
        setCurrentTip(tip);
        setShowPopup(true);
      }
    };

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`rounded-xl border p-6 shadow-sm ${tip.color} hover:cursor-pointer hover:shadow-md transition-shadow`}
        onClick={handleCardClick}
      >
        <div className="flex items-start gap-4">
          <div className={`rounded-full p-3 ${tip.iconBg}`}>{tip.icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-200/80">
      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block mb-2 bg-indigo-100 px-4 py-1 rounded-full border border-indigo-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHeroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-indigo-800 font-medium">
                College Success Strategies
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Navigate College Life Like a Pro!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From acing exams to landing your dream placement, we’ve got you
              covered! Explore expert tips on time management, resume building,
              interview prep, and exam strategies to make the most of your
              college journey
            </p>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-lg text-lg">
                Get Study Plan
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-700 hover:bg-indigo-50 px-6 py-6 rounded-lg text-lg"
              >
                Browse All Tips
              </Button>
            </motion.div> */}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200 shadow-lg rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {examTips.map((tip, index) => (
            <TipCard key={index} tip={tip} index={index} />
          ))}
        </div>

        {/* Study Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl mb-20"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Connect With Our WhatsApp Community
              </h2>

              <div>
                <a
                  href="https://chat.whatsapp.com/CIpJdSePM5r9aT1xWjKr8O"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-6 rounded-lg text-lg">
                    Join Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="h-full flex items-center justify-center p-12">
                <motion.div
                  className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/dndyofbi8/image/upload/v1741894800/u58davqznjicmy6s24bb.jpg"
                    alt="Community Image"
                    width={500}
                    height={500}
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup */}
      {showPopup && currentTip && (
        <TipPopup
          tip={currentTip}
          onClose={() => {
            setShowPopup(false);
            setCurrentTip(null);
          }}
        />
      )}
    </div>
  );
}
