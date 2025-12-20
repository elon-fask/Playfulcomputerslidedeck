import React, { useState } from 'react';
import { HelpCircle, CheckCircle, X } from 'lucide-react';

export function InteractiveSlide() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      image: 'https://images.unsplash.com/photo-1721378466905-0375f1e7b879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNsb3NldXB8ZW58MXx8fHwxNzY2MTg4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      question: "What part is this?",
      options: ["Mouse", "Keyboard", "Monitor", "Speaker"],
      correctAnswer: 1,
      fact: "The keyboard is like the computer's hands! You use it to type and tell the computer what to do! ⌨️"
    },
    {
      image: 'https://asset.msi.com/resize/image/global/product/product_3_20190506092649_5ccf8d5972c9c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
      question: "What part is this?",
      options: ["RAM", "Motherboard", "Hard Drive", "CPU"],
      correctAnswer: 1,
      fact: "The motherboard is like a highway! It connects all the parts so they can talk to each other! 🛣️"
    },
    {
      image: 'https://www.gatewayusa.com/cdn/shop/files/imag6.png?v=1720160239',
      question: "What type of computer is this?",
      options: ["Laptop", "Tablet", "Desktop", "Smartphone"],
      correctAnswer: 2,
      fact: "A desktop computer has a big box and a separate screen! It stays in one place on your desk! 🖥️"
    },
    {
      image: 'https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG1vZGVybnxlbnwxfHx8fDE3NjYwOTU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      question: "What makes a laptop special?",
      options: ["It's colorful", "It's portable", "It's heavy", "It's the fastest"],
      correctAnswer: 1,
      fact: "Laptops are portable! You can fold them up and take them anywhere—to school, on trips, or to grandma's house! 💻✈️"
    },
    {
      image: 'https://images.unsplash.com/photo-1568918460973-fe7f54f82482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjBoYW5kc3xlbnwxfHx8fDE3NjYxODgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      question: "What's special about a tablet?",
      options: ["It has a keyboard", "You can touch the screen", "It's very big", "It prints paper"],
      correctAnswer: 1,
      fact: "Tablets have touchscreens! You can use your fingers to tap, swipe, and draw right on the screen! 📱✨"
    },
    {
      image: 'https://images.unsplash.com/photo-1672558767203-9ab92e0d28d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNvbXB1dGVyJTIwZGF0YWNlbnRlcnxlbnwxfHx8fDE3NjYyMjY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      question: "What is a supercomputer used for?",
      options: ["Playing games", "Watching videos", "Weather prediction & science", "Social media"],
      correctAnswer: 2,
      fact: "Supercomputers are SUPER powerful! Scientists use them to predict the weather, explore space, and solve really hard problems! 🌩️🚀"
    },
    {
      question: "What does CPU stand for?",
      options: ["Computer Power Unit", "Central Processing Unit", "Computer Programming User", "Central Power Unit"],
      correctAnswer: 1,
      fact: "CPU stands for Central Processing Unit! It's the brain of the computer that thinks super fast! 🧠⚡",
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjYxODgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      question: "What does RAM help the computer do?",
      options: ["Store photos forever", "Remember what it's doing right now", "Connect to WiFi", "Show pictures on screen"],
      correctAnswer: 1,
      fact: "RAM is like the computer's short-term memory! It remembers what you're doing RIGHT NOW, like playing a game or watching a video! 🎒💭",
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjYxODgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      question: "What is software?",
      options: ["The computer's case", "Programs that make the computer work", "The screen", "The keyboard"],
      correctAnswer: 1,
      fact: "Software is like invisible magic! These are programs (apps) that tell the computer what to do—like games, drawing tools, and videos! ✨🧚",
      image: 'https://images.unsplash.com/photo-1605712161712-a0623699205e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwY29tcHV0ZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2MTM2ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      question: "What's the first step when using a computer?",
      options: ["Output", "Input", "Storage", "Sleep"],
      correctAnswer: 1,
      fact: "Input is the first step! You give the computer information by typing, clicking, or touching the screen! 📥👆",
      image: 'https://images.unsplash.com/photo-1721378466905-0375f1e7b879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNsb3NldXB8ZW58MXx8fHwxNzY2MTg4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] max-h-[80vh] flex flex-col">
      {/* Header - Fixed at top */}
      <div className="text-center py-6 px-8 bg-gradient-to-r from-green-500 to-blue-500 text-white flex-shrink-0">
        <h2 className="text-white mb-2">
          Interactive Activity: "Guess the Part!" 🎯
        </h2>
        <p className="text-xl">
          Can you identify these computer parts?
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {!isQuizComplete ? (
            <>
              {/* Progress */}
              <div className="flex justify-center gap-2 mb-6">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-16 rounded-full ${
                      index === currentQuestion
                        ? 'bg-gradient-to-r from-green-500 to-blue-500'
                        : index < currentQuestion
                        ? 'bg-green-400'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Full Image Display */}
              <div className="mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={questions[currentQuestion].image}
                    alt="Computer part"
                    className="w-full h-[400px] md:h-[500px] object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
                    <HelpCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  {/* Question number badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-4 py-2 shadow-lg">
                    <span className="font-bold">Question {currentQuestion + 1}/{questions.length}</span>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              {!showResult && (
                <div className="text-center mb-6 animate-bounce">
                  <p className="text-2xl text-purple-600">👇 Scroll down to see choices 👇</p>
                </div>
              )}

              {/* Question */}
              <div className="text-center mb-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                <h3 className="text-gray-800 mb-2">
                  {questions[currentQuestion].question}
                </h3>
                <p className="text-xl text-purple-600">Choose your answer below! 🤔</p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`p-6 rounded-xl text-xl transition-all ${
                      showResult
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white shadow-lg scale-105'
                          : index === selectedAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                        : 'bg-white hover:bg-purple-100 hover:shadow-lg hover:scale-105 active:scale-95 border-2 border-purple-200'
                    } ${!showResult && 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {showResult && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle className="w-6 h-6" />
                      )}
                      {showResult && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                        <X className="w-6 h-6" />
                      )}
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              {/* Result */}
              {showResult && (
                <div
                  className={`p-8 rounded-2xl text-center mb-8 ${
                    selectedAnswer === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border-4 border-green-400'
                      : 'bg-yellow-100 border-4 border-yellow-400'
                  }`}
                >
                  <p className="text-3xl mb-4">
                    {selectedAnswer === questions[currentQuestion].correctAnswer
                      ? '🎉 Correct! You\'re awesome!'
                      : '💡 Not quite, but good try!'}
                  </p>
                  <p className="text-xl text-gray-700 mb-6">{questions[currentQuestion].fact}</p>
                  
                  {currentQuestion < questions.length - 1 && (
                    <button
                      onClick={nextQuestion}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xl hover:shadow-lg transition-all hover:scale-105"
                    >
                      Next Question →
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Quiz Complete */
            <div className="text-center py-12">
              <div className="text-8xl mb-6">🎊</div>
              <h3 className="text-gray-800 mb-4">Quiz Complete!</h3>
              <p className="text-3xl text-purple-600 mb-8">
                You got {score} out of {questions.length} correct!
              </p>
              <div className="text-6xl mb-8">
                {score === questions.length ? '🌟🌟🌟' : score >= questions.length * 0.7 ? '⭐⭐' : '⭐'}
              </div>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-xl hover:shadow-lg transition-all"
              >
                Try Again! 🔄
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}