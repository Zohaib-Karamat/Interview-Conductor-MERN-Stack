// components/ResultsDashboard.js
import { motion } from "framer-motion";
import { FiTrendingUp, FiTrendingDown, FiTarget, FiBook, FiStar, FiRefreshCw } from "react-icons/fi";

export default function ResultsDashboard({ score, totalQuestions, categoryScores, onRestart }) {
  const percentage = (score / totalQuestions) * 100;
  
  const getPerformanceLevel = () => {
    if (percentage >= 80) return { level: "Excellent", color: "text-green-500", icon: FiStar };
    if (percentage >= 60) return { level: "Good", color: "text-blue-500", icon: FiTrendingUp };
    if (percentage >= 40) return { level: "Average", color: "text-yellow-500", icon: FiTarget };
    return { level: "Needs Improvement", color: "text-red-500", icon: FiTrendingDown };
  };

  const performance = getPerformanceLevel();
  const PerformanceIcon = performance.icon;

  const getMotivationalMessage = () => {
    if (percentage >= 80) {
      return {
        title: "Outstanding Performance! 🎉",
        message: "You have excellent knowledge of the MERN stack! Keep up the great work and consider exploring advanced topics.",
        suggestions: ["Advanced React patterns", "Microservices architecture", "GraphQL", "TypeScript"]
      };
    }
    if (percentage >= 60) {
      return {
        title: "Great Job! 👍",
        message: "You have a solid understanding of MERN concepts. Focus on the weaker areas to become an expert.",
        suggestions: ["Practice more coding problems", "Build full-stack projects", "Learn testing frameworks"]
      };
    }
    if (percentage >= 40) {
      return {
        title: "Good Start! 📚",
        message: "You're on the right track! Dedicate more time to studying the fundamentals.",
        suggestions: ["Review JavaScript fundamentals", "Practice React hooks", "Learn Express.js basics", "Study MongoDB queries"]
      };
    }
    return {
      title: "Keep Learning! 💪",
      message: "Don't worry! Everyone starts somewhere. Focus on building strong fundamentals.",
      suggestions: ["Start with JavaScript basics", "Learn HTML/CSS", "Understand HTTP protocols", "Practice coding daily"]
    };
  };

  const motivational = getMotivationalMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Interview Results</h1>
          <p className="text-gray-600 dark:text-gray-300">Your MERN Stack Assessment Summary</p>
        </motion.div>

        {/* Main Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-xl"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-300"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  className={percentage >= 80 ? "text-green-500" : percentage >= 60 ? "text-blue-500" : percentage >= 40 ? "text-yellow-500" : "text-red-500"}
                  initial={{ strokeDasharray: "0 351.86" }}
                  animate={{ strokeDasharray: `${(percentage / 100) * 351.86} 351.86` }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl font-bold"
                  >
                    {percentage.toFixed(0)}%
                  </motion.div>
                  <div className="text-sm text-gray-500">{score}/{totalQuestions}</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <div className={`flex items-center justify-center mb-2 ${performance.color}`}>
              <PerformanceIcon className="mr-2" size={24} />
              <span className="text-xl font-semibold">{performance.level}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{motivational.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{motivational.message}</p>
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {Object.entries(categoryScores).map(([category, categoryScore], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-semibold mb-2">{category}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{categoryScore.correct}/{categoryScore.total}</span>
                <span className="text-sm text-gray-500">
                  {((categoryScore.correct / categoryScore.total) * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(categoryScore.correct / categoryScore.total) * 100}%` }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FiBook className="mr-2" />
            Suggested Learning Topics
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {motivational.suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                <span>{suggestion}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pb-8"
        >
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
          >
            <FiRefreshCw className="mr-2" />
            Take Interview Again
          </button>
        </motion.div>
      </div>
    </div>
  );
}
