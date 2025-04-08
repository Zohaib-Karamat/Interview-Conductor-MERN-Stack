"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FiBarChart2,
  FiCheckCircle,
  FiXCircle,
  FiAward,
  FiArrowRight,
  FiHome,
  FiUser,
  FiSettings,
  FiBell,
} from "react-icons/fi"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { useRouter, useSearchParams } from "next/navigation"
import confetti from 'canvas-confetti'
import { fetchWithAuth } from '@/utils/api'

// Modern font imports
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

// Modern color palette
const colors = {
  primary: "from-indigo-900 to-purple-900",
  secondary: "from-gray-900 to-gray-800",
  accent: "bg-gradient-to-r from-teal-400 to-cyan-500",
  text: "text-gray-100",
  mutedText: "text-gray-400",
}

// Animation variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-gray-700 py-3 ${inter.variable} font-sans`}
    >
      <div className="flex justify-around max-w-md mx-auto">
        {[
          { icon: <FiHome size={20} />, label: "Home", href: "/" },
          { icon: <FiUser size={20} />, label: "Profile" },
          { icon: <FiSettings size={20} />, label: "Settings" },
          { icon: <FiBell size={20} />, label: "Notifications" },
        ].map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center px-4 py-2 rounded-lg"
          >
            <span className="text-gray-300 group-hover:text-white">{item.icon}</span>
            <span className={`text-xs mt-1 text-gray-400 ${spaceGrotesk.variable} font-mono`}>{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}

export default function ResultsPage({ params }) {
  const [results, setResults] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchWithAuth(`/results/${params.id}/`);
        setResults(data);
        // Trigger confetti for high scores
        if (data.percentage >= 70) {
          const duration = 3 * 1000
          const end = Date.now() + duration
          const colors = ["#6366F1", "#8B5CF6", "#EC4899"]

          ;(function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            })

            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            })

            if (Date.now() < end) {
              requestAnimationFrame(frame)
            }
          })()
        }
      } catch (error) {
        console.error('Failed to fetch results:', error);
        // Show error message to user
      }
    };

    fetchResults();
  }, [params.id]);

  if (!results) return <div>Loading...</div>;

  const percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100)

  const getFeedback = () => {
    if (percentage >= 90) return "Outstanding! You're a MERN stack master!"
    if (percentage >= 80) return "Excellent! You have strong MERN knowledge!"
    if (percentage >= 70) return "Great job! You know your MERN stack well!"
    if (percentage >= 60) return "Good effort! Keep learning MERN stack concepts!"
    if (percentage >= 50) return "Not bad! More practice will help you improve!"
    return "Keep studying! The MERN stack takes time to master."
  }

  const handleTryAgain = () => {
    router.push("/dashboard/interview/new")
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.primary} pb-20 ${inter.variable} font-sans`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1
            className={`text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 ${spaceGrotesk.variable} font-mono tracking-tight`}
          >
            Your MERN Interview Results
          </h1>

          {/* Score Circle */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <svg className="w-48 h-48">
                <circle cx="96" cy="96" r="86" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="12" />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="86"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 540 }}
                  animate={{
                    strokeDashoffset: isAnimating ? 540 - (540 * percentage) / 100 : 540,
                  }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  strokeDasharray="540"
                  transform="rotate(-90 96 96)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className={`text-5xl font-bold text-white ${spaceGrotesk.variable} font-mono`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {percentage}%
                </motion.span>
                <motion.span
                  className="text-sm text-blue-200 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  {results.correctAnswers}/{results.totalQuestions} correct
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Feedback Card */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className={`p-6 rounded-xl shadow-lg mb-8 bg-white/10 backdrop-blur-lg border border-white/20 ${jetbrainsMono.variable} font-mono`}
          >
            <h2 className={`text-2xl font-bold mb-3 text-white ${spaceGrotesk.variable} font-mono tracking-tight`}>
              {getFeedback()}
            </h2>
            <p className="text-blue-100 leading-relaxed">
              You completed the MERN stack interview in {results.timeTaken}. Your performance shows{" "}
              {percentage >= 70 ? "strong understanding" : "areas for improvement"} across the MERN stack technologies.
            </p>
          </motion.div>

          {/* Category Breakdown - Now using actual data */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className={`p-6 rounded-xl shadow-lg mb-8 bg-white/10 backdrop-blur-lg border border-white/20 ${jetbrainsMono.variable} font-mono`}
          >
            <h3
              className={`text-xl font-semibold mb-4 text-white flex items-center ${spaceGrotesk.variable} font-mono tracking-tight`}
            >
              <FiBarChart2 className="mr-2" /> Category Performance
            </h3>

            <div className="space-y-4">
              {Object.entries(results.categoryBreakdown).map(([category, data], index) => {
                const catPercentage = Math.round((data.correct / data.total) * 100)
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">{category}</span>
                      <span className="text-blue-100">
                        {data.correct}/{data.total} ({catPercentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${catPercentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                        className={`h-2.5 rounded-full ${
                          catPercentage >= 80
                            ? "bg-gradient-to-r from-green-400 to-emerald-500"
                            : catPercentage >= 60
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                              : catPercentage >= 40
                                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                : "bg-gradient-to-r from-red-400 to-pink-500"
                        }`}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Recommendations - Based on actual performance */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className={`p-6 rounded-xl shadow-lg mb-8 bg-white/10 backdrop-blur-lg border border-white/20 ${jetbrainsMono.variable} font-mono`}
          >
            <h3
              className={`text-xl font-semibold mb-4 text-white flex items-center ${spaceGrotesk.variable} font-mono tracking-tight`}
            >
              <FiAward className="mr-2" /> Recommendations
            </h3>

            <div className="space-y-3">
              {/* Show areas needing improvement */}
              {Object.entries(results.categoryBreakdown)
                .filter(([_, data]) => (data.correct / data.total) < 0.7)
                .map(([category], index) => (
                  <motion.div
                    key={`improve-${category}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-start"
                  >
                    <span className="inline-block bg-red-500/20 text-red-300 rounded-full p-1 mr-3">
                      <FiXCircle />
                    </span>
                    <span className="text-blue-100">
                      Focus more on <strong className="text-white">{category}</strong> concepts
                    </span>
                  </motion.div>
                ))}

              {/* Show strong areas */}
              {Object.entries(results.categoryBreakdown)
                .filter(([_, data]) => (data.correct / data.total) >= 0.8)
                .map(([category], index) => (
                  <motion.div
                    key={`strong-${category}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-start"
                  >
                    <span className="inline-block bg-green-500/20 text-green-300 rounded-full p-1 mr-3">
                      <FiCheckCircle />
                    </span>
                    <span className="text-blue-100">
                      Excellent work in <strong className="text-white">{category}</strong>
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-center space-x-4 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center border border-white/20"
            >
              <FiHome className="mr-2" /> Home
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTryAgain}
              className={`px-6 py-3 rounded-full ${colors.accent} text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center ${spaceGrotesk.variable} font-mono`}
            >
              Try Again <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <Navbar />
    </div>
  )
}

