import React from 'react';
import { Monitor, Laptop, Tablet, Smartphone } from 'lucide-react';

export function IntroSlide() {
  const computerTypes = [
    {
      name: 'Desktop',
      description: 'Big box + screen',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      emoji: '🖥️'
    },
    {
      name: 'Laptop',
      description: 'Portable',
      icon: Laptop,
      color: 'from-purple-500 to-pink-500',
      emoji: '💻'
    },
    {
      name: 'Tablet',
      description: 'Touchscreen',
      icon: Tablet,
      color: 'from-green-500 to-emerald-500',
      emoji: '📱'
    },
    {
      name: 'Smartphone',
      description: 'Tiny computer!',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      emoji: '📱'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            What is a Computer? 🤔
          </h2>
          <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6 inline-block">
            <p className="text-3xl text-gray-700">
              "A computer is a smart machine that helps us<br />
              <span className="text-purple-600">play, learn, and create!</span>"
            </p>
          </div>
        </div>

        {/* Types of Computers */}
        <div className="mb-8">
          <h3 className="text-center text-gray-700 mb-8 flex items-center justify-center gap-2">
            Types of Computers
            <span className="text-3xl">👇</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {computerTypes.map((type, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-gray-100 hover:border-purple-300 transition-colors">
                  <div className={`bg-gradient-to-br ${type.color} rounded-xl p-4 mb-4`}>
                    <type.icon className="w-12 h-12 text-white mx-auto" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">{type.emoji}</div>
                    <p className="text-gray-800 mb-1">{type.name}</p>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact box */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 text-center">
          <p className="text-2xl text-gray-700">
            💡 <span className="text-purple-600">Fun Fact:</span> A computer is like a Swiss Army knife—<br />
            it has tools for everything!
          </p>
        </div>
      </div>
    </div>
  );
}
