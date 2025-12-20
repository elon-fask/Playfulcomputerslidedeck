import React from 'react';
import { Cpu, HardDrive, Zap, Monitor, Volume2, Keyboard, Mouse, CircuitBoard, Wifi } from 'lucide-react';

export function HardwareSlide() {
  const parts = [
    {
      name: 'CPU',
      description: 'The brain—thinks super fast!',
      icon: Cpu,
      color: 'from-pink-500 to-rose-500',
      emoji: '🧠',
      analogy: 'Like solving a math problem in your head!'
    },
    {
      name: 'SSD/HDD',
      description: 'The memory box—saves games and photos!',
      icon: HardDrive,
      color: 'from-blue-500 to-cyan-500',
      emoji: '🎮',
      analogy: 'Like your toy chest at home!'
    },
    {
      name: 'RAM',
      description: 'The helper—remembers what you\'re doing right now!',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      emoji: '🎒',
      analogy: 'Like your backpack!'
    },
    {
      name: 'Monitor',
      description: 'The eyes—shows you pictures!',
      icon: Monitor,
      color: 'from-purple-500 to-indigo-500',
      emoji: '👀',
      analogy: 'The computer\'s eyes!'
    },
    {
      name: 'Speakers',
      description: 'The ears—play music and sounds!',
      icon: Volume2,
      color: 'from-green-500 to-emerald-500',
      emoji: '👂',
      analogy: 'The computer\'s ears!'
    },
    {
      name: 'Keyboard & Mouse',
      description: 'The hands—you use them to tell the computer what to do!',
      icon: Keyboard,
      color: 'from-teal-500 to-cyan-500',
      emoji: '✋',
      analogy: 'The computer\'s hands!'
    },
    {
      name: 'Motherboard',
      description: 'The highway—connects everything!',
      icon: CircuitBoard,
      color: 'from-indigo-500 to-purple-500',
      emoji: '🛣️',
      analogy: 'Like a highway for data!'
    },
    {
      name: 'Wireless Card',
      description: 'The magic radio—talks to the internet!',
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      emoji: '📡',
      analogy: 'Like a walkie-talkie!'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Hardware: The Computer's Body Parts 🤖
          </h2>
          <p className="text-2xl text-gray-600">
            They work together like a team!
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {parts.map((part, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-purple-300 transition-all h-full">
                <div className={`bg-gradient-to-br ${part.color} rounded-xl p-3 mb-3 relative`}>
                  <part.icon className="w-8 h-8 text-white mx-auto" />
                  <div className="absolute -top-2 -right-2 text-2xl">{part.emoji}</div>
                </div>
                <div className="text-center">
                  <p className="text-gray-800 mb-2">{part.name}</p>
                  <p className="text-xs text-gray-600 mb-2">{part.description}</p>
                  <div className="bg-yellow-100 rounded-lg p-2 mt-2">
                    <p className="text-xs text-gray-700 italic">{part.analogy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Box */}
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-6 text-center border-4 border-dashed border-purple-300">
          <p className="text-3xl mb-2">🎯 Simon Says Activity!</p>
          <p className="text-xl text-gray-700">
            Simon says... touch your brain (CPU)!<br />
            Simon says... point to your eyes (monitor)!
          </p>
        </div>
      </div>
    </div>
  );
}
