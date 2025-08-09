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
    if (selectedAnswer) return; // Prevent answering multiple times

    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset for next question
      } else {
        setQuizFinished(true);
      }
    }, 1000); // Wait 1 second before moving to the next question
  };

  const discount = score * 10;

  // Render logic
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {!quizFinished ? (
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Question {currentQuestionIndex + 1}/{quizQuestions.length}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                {quizQuestions[currentQuestionIndex].question}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {quizQuestions[currentQuestionIndex].answers.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswer(answer)}
                    className={`p-4 rounded-lg text-lg transition-colors duration-300 border-2 border-slate-700
                      ${selectedAnswer ? (answer === quizQuestions[currentQuestionIndex].correctAnswer ? 'bg-green-500 border-green-500' : (answer === selectedAnswer ? 'bg-red-500 border-red-500' : 'bg-slate-800')) : 'bg-slate-800 hover:bg-slate-700'}`}
                    disabled={!!selectedAnswer}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Quiz Complete!</h1>
              <p className="text-2xl text-slate-200 mb-2">You answered {score} out of {quizQuestions.length} questions correctly.</p>
              <p className="text-3xl font-bold mb-8">
                You&apos;ve earned a <span className="text-green-400">${discount} discount!</span>
              </p>
              
              {/* --- THIS IS THE MAGIC HAND-OFF --- */}
              <Link 
                href={`https://www.vispaico.com/services/24-hour-micro-website?discount=${discount}`}
                className="inline-block bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
              >
                Claim Your Discount & See the Micro Website Process
              </Link>

              <p className="text-sm text-slate-400 mt-4">
                Your discount will be automatically applied when you proceed.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}