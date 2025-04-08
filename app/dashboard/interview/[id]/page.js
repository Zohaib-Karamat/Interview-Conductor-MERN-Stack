'use client';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiHome, FiUser, FiSettings, FiBell } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import MCQCard from '@/components/MCQCard';
import ProgressBar from '@/components/Progressbar';
// import Navbar from '@/components/Navbar';
import { Inter, Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/utils/api';

// Modern font imports
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
          { icon: <FiHome size={20} />, label: 'Home', href:'/app'},
          { icon: <FiUser size={20} />, label: 'Profile' },
          { icon: <FiSettings size={20} />, label: 'Settings' },
          { icon: <FiBell size={20} />, label: 'Notifications' }
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
  );
}

export default function InterviewPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const router = useRouter();

  // Sample questions data
//   const questions = [
//     {
//       id: 1,
//       question: "In React, what is used to pass data to a component from outside?",
//       options: {
//         a: "setState",
//         b: "props",
//         c: "render with arguments",
//         d: "PropTypes"
//       },
//       correctAnswer: "b",
//       category: "React"
//     },
//     // Add more questions...
//   ];


  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Updated endpoint to match new URL pattern
        const data = await fetchWithAuth('/questions/get-interview-questions/');
        console.log('Fetched questions:', data);
        setQuestions(data);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();

    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Add loading state UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading questions...</div>
      </div>
    );
  }

  // Add empty state check
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">No questions available</div>
      </div>
    );
  }

  const handleNext = async () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      const finalScore = selectedOption === questions[currentQuestion].correctAnswer ? score + 1 : score;
      
      // Create accurate category breakdown
      const categoryBreakdown = {};
      questions.forEach((q, index) => {
        const userAnswer = index === currentQuestion ? selectedOption : 
                         index < currentQuestion ? questions[index].correctAnswer : null;
        const isCorrect = userAnswer === questions[index].correctAnswer;
        
        if (!categoryBreakdown[q.category]) {
          categoryBreakdown[q.category] = { correct: 0, total: 0 };
        }
        categoryBreakdown[q.category].total += 1;
        if (isCorrect) {
          categoryBreakdown[q.category].correct += 1;
        }
      });

      // Format time taken
      const timeSpent = (30 * 60) - timeLeft;
      const minutes = Math.floor(timeSpent / 60);
      const seconds = timeSpent % 60;
      const timeTaken = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Send results to Django API
      const result = await fetch('/api/results/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          score: finalScore,
          total_questions: questions.length,
          time_taken: timeTaken,
          category_breakdown: categoryBreakdown
        })
      }).then(res => res.json());

      // Navigate to results page
      router.push(`/dashboard/results/${result.id}`);
    } else {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 pb-20 ${inter.variable} font-sans`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className={`text-lg font-semibold text-white ${spaceGrotesk.variable} font-mono`}>
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800/80 px-4 py-2 rounded-full shadow text-white">
              ⏱️ {formatTime(timeLeft)}
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full shadow text-white">
              🏆 Score: {score}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={((currentQuestion + 1) / questions.length) * 100} />

        {/* Question */}
        <AnimatePresence mode="wait">
          {questions[currentQuestion] && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <MCQCard
                question={questions[currentQuestion].question_text}
                options={questions[currentQuestion]}
                onSelect={setSelectedOption}
                selected={selectedOption}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-end mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={!selectedOption}
            className={`px-6 py-3 rounded-full font-medium shadow-lg transition-all ${spaceGrotesk.variable} font-mono ${
              selectedOption
                ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Finish Interview' : 'Next Question'}
          </motion.button>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
}