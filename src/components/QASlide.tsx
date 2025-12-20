import React, { useState } from 'react';
import { HelpCircle, MessageCircle, Lightbulb } from 'lucide-react';

export function QASlide() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do computers talk to each other?",
      answer: "Computers use the internet like a super-fast mail service! They send tiny packages of information called 'data' through cables or Wi-Fi waves. It's like sending a letter, but it arrives in a split second! 📬✨",
      emoji: "💬"
    },
    {
      question: "Can a computer have a favorite color?",
      answer: "Computers don't have feelings, but they DO have a favorite way to make colors! They mix Red, Green, and Blue (RGB) light to create every color you see on the screen—millions of them! 🌈",
      emoji: "🎨"
    },
    {
      question: "What's the silliest thing a computer can do?",
      answer: "Computers can play tic-tac-toe, tell jokes, make funny sounds, and even draw silly faces! But the silliest thing? They do EXACTLY what you tell them—even if it's silly! Try telling a computer to 'meow' 100 times! 😸",
      emoji: "😂"
    },
    {
      question: "Why do computers need to sleep?",
      answer: "When you put a computer to 'sleep,' it's actually taking a power nap! It saves energy and keeps your work ready so you can wake it up super fast. Just like you feel better after a nap! 💤",
      emoji: "😴"
    },
    {
      question: "Can computers get sick?",
      answer: "Computers can get 'viruses'—but not the sneezy kind! Computer viruses are bad programs that can make computers act weird. That's why we use antivirus software, like a computer doctor! 🩺",
      emoji: "🤧"
    },
    {
      question: "How fast can computers think?",
      answer: "Super DUPER fast! A computer can do millions of math problems in ONE SECOND—that's faster than you can blink! Modern computers can do billions of calculations per second! 💨⚡",
      emoji: "🏃"
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>❓</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>💡</div>
        <div className="absolute top-40 right-40 text-6xl animate-bounce" style={{ animationDelay: '1s' }}>🤔</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full">
              <MessageCircle className="w-8 h-8" />
              <h2 className="text-white">Ask Me Anything!</h2>
              <HelpCircle className="w-8 h-8" />
            </div>
          </div>
          <p className="text-2xl text-gray-600">
            Click on any question to see the answer! 👇
          </p>
          <div className="text-6xl mt-4 animate-bounce">🙋</div>
        </div>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
            >
              <div
                className={`rounded-2xl p-6 transition-all ${
                  selectedQuestion === index
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl scale-105'
                    : 'bg-gradient-to-br from-gray-50 to-white border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg'
                }`}
              >
                {/* Question */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-4xl flex-shrink-0">{faq.emoji}</div>
                  <div className="flex-1">
                    <p className={`transition-colors ${
                      selectedQuestion === index ? 'text-white' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </p>
                  </div>
                  <div className={`transition-transform ${selectedQuestion === index ? 'rotate-180' : ''}`}>
                    <HelpCircle className={`w-6 h-6 ${selectedQuestion === index ? 'text-white' : 'text-purple-400'}`} />
                  </div>
                </div>

                {/* Answer */}
                {selectedQuestion === index && (
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                      <p className="text-white">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-8 text-center border-4 border-purple-200">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-gray-800 mb-3">You're All Computer Experts Now!</h3>
          <p className="text-xl text-gray-700 mb-4">
            Next time you use a computer, remember:<br />
            <span className="text-purple-600 text-2xl">YOU are the boss, and it's YOUR helper!</span>
          </p>
          <div className="flex justify-center gap-2 text-4xl">
            🌟 ⭐ 💫 ✨ 🌟
          </div>
        </div>

        {/* Fun Ending */}
        <div className="text-center mt-8">
          <p className="text-3xl animate-pulse">
            Keep exploring and stay curious! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
