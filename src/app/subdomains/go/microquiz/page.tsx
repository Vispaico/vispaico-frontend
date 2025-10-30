// src/app/subdomains/go/microquiz/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- QUIZ DATA ---
// We'll put the questions and answers here. Easy to update later.
const quizQuestions = [
  {
    question: "What is the primary purpose of a 'Above the Fold' section on a website?",
    answers: ["To display the main navigation", "To capture the user's attention immediately", "To list all the services"],
    correctAnswer: "To capture the user's attention immediately",
  },
  {
    question: "A 'Call to Action' (CTA) should be...",
    answers: ["Hidden at the bottom of the page", "Vague and mysterious", "Clear, concise, and compelling"],
    correctAnswer: "Clear, concise, and compelling",
  },
  {
    question: "What does 'mobile-responsive' design mean?",
    answers: ["The site works only on iPhones", "The layout adapts to any screen size", "The site has a separate mobile app"],
    correctAnswer: "The layout adapts to any screen size",
  },
  {
    question: "What is a major benefit of a fast-loading website?",
    answers: ["It looks more professional", "It improves user experience and SEO", "It requires less code"],
    correctAnswer: "It improves user experience and SEO",
  },
  {
    question: "For a new business, what is the most important function of a website?",
    answers: ["To win awards for design", "To act as a digital business card", "To generate leads and validate the business idea"],
    correctAnswer: "To generate leads and validate the business idea",
  },
];

// Main Quiz Component
export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  const discount = score * 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-2xl text-center">
        {/* --- NEW HEADER --- */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Test Your Web Knowledge</h1>
          <p className="text-lg text-gray-300 mt-2">Answer a few questions and earn a discount on your Micro Website.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!quizFinished ? (
            <motion.div
              key={currentQuestionIndex}
              className="bg-black/20 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Question {currentQuestionIndex + 1}/{quizQuestions.length}
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-8 h-20">
                {quizQuestions[currentQuestionIndex].question}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {quizQuestions[currentQuestionIndex].answers.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswer(answer)}
                    className={`p-4 rounded-lg text-lg transition-colors duration-300 border-2 
                      ${selectedAnswer ? (answer === quizQuestions[currentQuestionIndex].correctAnswer ? 'bg-green-500 border-green-500' : (answer === selectedAnswer ? 'bg-red-500 border-red-500' : 'bg-slate-800 border-slate-700')) : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
                    disabled={!!selectedAnswer}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-black/20 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Quiz Complete!</h1>
              <p className="text-2xl text-slate-200 mb-2">You answered {score} out of {quizQuestions.length} questions correctly.</p>
              <p className="text-3xl font-bold mb-8">
                You&apos;ve earned a <span className="text-green-400">${discount} discount!</span>
              </p>
              
              <Link 
                href={`https://www.vispaico.com/services/vispaico-24-hour-express-website?discount=${discount}`}
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Claim Your Discount & See the Micro Website Process
              </Link>

              <p className="text-sm text-slate-400 mt-4">
                Your discount will be automatically applied when you proceed.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- NEW "WHY" SECTION --- */}
        <motion.div 
          className="mt-12 text-left max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-center mb-4">Why Take This Quiz?</h3>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Get a personalized discount on your project.</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> See if you know the basics of web presence.</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> It&apos;s quick, fun, and you might learn something!</li>
            </ul>
        </motion.div>
      </div>
    </div>
  );
}