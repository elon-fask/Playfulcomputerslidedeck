import React from 'react';
import { Brain, Lightbulb, Repeat, MessageSquare } from 'lucide-react';

export function GeneralDescriptionSlide() {
  const characteristics = [
    {
      title: 'Input',
      description: 'You give the computer information',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      emoji: '📥',
      examples: 'Typing on keyboard, clicking mouse, touching screen'
    },
    {
      title: 'Processing',
      description: 'The computer thinks about it',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      emoji: '🧠',
      examples: 'CPU does math, follows instructions, solves problems'
    },
    {
      title: 'Storage',
      description: 'The computer remembers it',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      emoji: '💾',
      examples: 'Saves your games, photos, homework, and videos'
    },
    {
      title: 'Output',
      description: 'The computer shows you the result',
      icon: Repeat,
      color: 'from-green-500 to-emerald-500',
      emoji: '📤',
      examples: 'Pictures on screen, sounds from speakers, printing'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
            How Does a Computer Work? 🔧
          </h2>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 inline-block">
            <p className="text-2xl text-gray-700">
              Computers follow a simple pattern:<br />
              <span className="text-purple-600">Input → Process → Store → Output</span>
            </p>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-purple-300 transition-all h-full">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${char.color} rounded-xl p-4 relative`}>
                      <char.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 text-3xl">{char.emoji}</div>
                    </div>
                    <div>
                      <h3 className="text-gray-800 mb-1">{char.title}</h3>
                      <p className="text-lg text-purple-600">{char.description}</p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Examples:</span> {char.examples}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-white text-center mb-6">The Computer's Magic Recipe! 🎩✨</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white text-purple-600 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl mb-2 text-center">📥</div>
              <p className="text-center">Input</p>
            </div>
            <div className="text-4xl">→</div>
            <div className="bg-white text-purple-600 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl mb-2 text-center">🧠</div>
              <p className="text-center">Process</p>
            </div>
            <div className="text-4xl">→</div>
            <div className="bg-white text-purple-600 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl mb-2 text-center">💾</div>
              <p className="text-center">Store</p>
            </div>
            <div className="text-4xl">→</div>
            <div className="bg-white text-purple-600 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl mb-2 text-center">📤</div>
              <p className="text-center">Output</p>
            </div>
          </div>
        </div>

        {/* Real World Example */}
        <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6 border-4 border-dashed border-purple-300">
          <div className="text-center">
            <p className="text-2xl text-gray-800 mb-4">
              🎮 <span className="text-purple-600">Real World Example:</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm"><span className="font-semibold">Input:</span> You press spacebar to jump</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm"><span className="font-semibold">Process:</span> Computer calculates the jump</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm"><span className="font-semibold">Store:</span> Saves your game progress</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm"><span className="font-semibold">Output:</span> Character jumps on screen!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
