import React from 'react';
import { Gamepad2, Image, Video, Sparkles } from 'lucide-react';

export function GPUSlide() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-4">
            Meet the GPU: The Digital Artist 🎨
          </h2>
          <p className="text-2xl text-gray-600">
            Graphics Processing Unit - The Creative Genius Inside Your Computer!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* GPU Image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzY2MTM2Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Graphics Card"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full p-3 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
              <p className="text-xl text-gray-700">
                <span className="text-2xl">🖼️</span> This is a <span className="text-purple-600">Graphics Card</span> (GPU)!<br />
                It's like having thousands of tiny artists working together!
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-gray-800 mb-4">🧠 vs 🎨</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg">
                    <span className="text-2xl mr-2">🧠</span>
                    <span className="text-purple-600">CPU (Brain):</span><br />
                    Good at thinking through ONE hard problem at a time
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg">
                    <span className="text-2xl mr-2">🎨</span>
                    <span className="text-pink-600">GPU (Artist):</span><br />
                    Amazing at doing THOUSANDS of simple tasks at once!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 border-2 border-yellow-300">
              <p className="text-lg text-gray-800">
                <span className="text-2xl">⚡</span> <span className="font-semibold">Speed Fact:</span><br />
                A GPU can draw millions of pixels in less than a blink!
              </p>
            </div>
          </div>
        </div>

        {/* What GPU Does */}
        <div className="mb-8">
          <h3 className="text-center text-gray-800 mb-6">What Does the GPU Do? 🤔</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                icon: Gamepad2,
                title: 'Gaming',
                description: 'Makes games look AMAZING with smooth graphics!',
                emoji: '🎮',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Video,
                title: 'Videos',
                description: 'Plays videos smoothly without freezing!',
                emoji: '🎬',
                color: 'from-red-500 to-pink-600'
              },
              {
                icon: Image,
                title: 'Photos',
                description: 'Edits and displays beautiful pictures!',
                emoji: '📸',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: Sparkles,
                title: 'Effects',
                description: 'Creates cool animations and special effects!',
                emoji: '✨',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform"
              >
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-purple-300 transition-all h-full">
                  <div className={`bg-gradient-to-br ${item.color} rounded-lg p-3 mb-3 relative`}>
                    <item.icon className="w-8 h-8 text-white mx-auto" />
                    <div className="absolute -top-2 -right-2 text-2xl">{item.emoji}</div>
                  </div>
                  <h4 className="text-center text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-black">
          <h3 className="text-white text-center mb-6">How Does GPU Work? 🔧</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">1. The Setup (CPU)</h4>
              <p>Imagine the CPU is like the <strong>Architect</strong>. It draws the blueprints and says "I want a building here, a tree there, and a character here." It doesn't paint them; it just outlines the plan.</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">2. The Order (Command)</h4>
              <p>The CPU passes this "blueprint" to the GPU. It says, "Okay, Artist, make this look real. Add colors, shadows, and light!"</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-lg font-bold">Parallel Power</p>
              <p className="text-sm">The GPU uses thousands of tiny "workers" (cores) to paint every single pixel at the exact same time.</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🔄</div>
              <p className="text-lg font-bold">Lighting & Shading</p>
              <p className="text-sm">It calculates how light hits objects, making them look 3D and realistic instantly.</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-lg font-bold">The Show</p>
              <p className="text-sm">It sends the finished picture to your screen 60 to 144 times every second!</p>
            </div>
          </div>
        </div>

        {/* Analogy */}
        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6 border-4 border-dashed border-purple-300">
          <p className="text-2xl text-center text-gray-800">
            🎨 <span className="text-purple-600">Think of it like this:</span><br />
            <span className="text-lg">
              CPU = One super-smart artist drawing slowly<br />
              GPU = 1000 artists all painting different parts of the picture at once!<br />
              <span className="text-pink-600">That's why games and videos look so smooth! ✨</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
