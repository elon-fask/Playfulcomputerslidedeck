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
      image: 'data:image/jpeg;base64,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'
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbhTomKb_MxDJ1gQdfPWyd1wMg5nRqGX-Gg&s'
    },
    {
      question: "What's the first step when using a computer?",
      options: ["power-on", "Input", "Storage", "Sleep", "Output"],
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
                    className={`h-2 w-16 rounded-full ${index === currentQuestion
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
                    className="w-full h-[500px] md:h-[600px] object-contain bg-gradient-to-br from-gray-50 to-gray-100"
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
                    className={`p-6 rounded-xl text-xl transition-all ${showResult
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
                  className={`p-8 rounded-2xl text-center mb-8 ${selectedAnswer === questions[currentQuestion].correctAnswer
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