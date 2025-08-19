"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
// import ThemeToggle from "../components/Themetoggle";
import MCQCard from "../components/MCQCard";
import Progressbar from "../components/Progressbar";
import Button from "../components/ui/Button";
import ProfileModal from "../components/ProfileModal";
import ResultsDashboard from "../components/ResultsDashboard";
import { mernQuestions } from "../data/questions";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);
  const [showProfileModal, setShowProfileModal] = React.useState(false);

  const currentQuestion = mernQuestions[currentQuestionIndex];
  const progress = (currentQuestionIndex / mernQuestions.length) * 100;

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < mernQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
  };

  const calculateCategoryScores = () => {
    const categories = {};
    
    mernQuestions.forEach(question => {
      if (!categories[question.category]) {
        categories[question.category] = { correct: 0, total: 0 };
      }
      categories[question.category].total++;
      
      if (selectedAnswers[question.id] === question.correct) {
        categories[question.category].correct++;
      }
    });
    
    return categories;
  };

  const calculateScore = () => {
    let correct = 0;
    mernQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const categoryScores = calculateCategoryScores();
    
    return (
      <>
        <Navbar onProfileClick={() => setShowProfileModal(true)} />
        <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
        <ResultsDashboard 
          score={score}
          totalQuestions={mernQuestions.length}
          categoryScores={categoryScores}
          onRestart={handleRestart}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-[family-name:var(--font-geist-sans)]">
      <Navbar onPracticeClick={() => setShowProfileModal(true)} />
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
      
      {/* <div className="absolute top-20 right-8">
        <ThemeToggle />
      </div> */}
      
      <main className="flex flex-col items-center justify-center gap-8 pt-32 pb-16 px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">MERN Stack Interview</h2>
          <p className="text-gray-300">
            Question {currentQuestionIndex + 1} of {mernQuestions.length}
          </p>
          <div className="inline-block px-3 py-1 mt-2 rounded-full bg-blue-900 text-blue-200 text-sm font-medium">
            {currentQuestion.category}
          </div>
        </div>
        
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <MCQCard 
            question={currentQuestion.question} 
            options={currentQuestion.options} 
            onSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestion.id]}
          />
          
          <div className="mt-2">
            <Progressbar progress={progress} />
            <div className="text-center mt-2 text-sm text-gray-400">
              {currentQuestionIndex === 0 ? '0' : Math.round(progress)}% Complete
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 rounded-full bg-gray-700 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-all cursor-pointer"
            >
              Previous
            </button>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">
                {Object.keys(selectedAnswers).length} of {mernQuestions.length} answered
              </div>
            </div>
            
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion.id]}
            >
              {currentQuestionIndex === mernQuestions.length - 1 ? 'Finish Interview' : 'Next Question'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
