import React from 'react';
import { Monitor, Grid3x3, Lightbulb, Zap } from 'lucide-react';

export function ScreenSlide() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 mb-4">
            How Does Your Screen Work? 📺
          </h2>
          <p className="text-2xl text-gray-600">
            It's like a magic light painting board!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Screen Image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjcmVlbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzY2MjI4MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computer Screen"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-blue-500 to-green-600 rounded-full p-3 shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Pixel Visualization */}
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-6">
              <h4 className="text-gray-800 mb-4 text-center">🔍 Zoom In Super Close!</h4>
              <div className="grid grid-cols-8 gap-1 max-w-xs mx-auto mb-3">
                {Array.from({ length: 64 }).map((_, i) => {
                  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
                  return (
                    <div
                      key={i}
                      className={`w-6 h-6 ${colors[Math.floor(Math.random() * colors.length)]} rounded-sm`}
                    />
                  );
                })}
              </div>
              <p className="text-center text-sm text-gray-700">
                These tiny squares are called <span className="text-purple-600 font-semibold">PIXELS</span>! 🟥🟩🟦
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-gray-800 mb-4">What are Pixels? 🟦</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg">
                    <span className="text-2xl mr-2">🔲</span>
                    <span className="text-purple-600">Pixels</span> are tiny colored dots!
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg">
                    <span className="text-2xl mr-2">📱</span>
                    Your screen has <span className="text-pink-600">MILLIONS</span> of them!
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg">
                    <span className="text-2xl mr-2">🎨</span>
                    Each pixel can change <span className="text-blue-600">color & brightness</span>!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 border-2 border-yellow-300">
              <p className="text-lg text-gray-800">
                <span className="text-2xl">🤯</span> <span className="font-semibold">Mind-Blowing:</span><br />
                A typical screen has over 2 MILLION pixels working together! 
              </p>
            </div>
          </div>
        </div>

        {/* How Pixels Make Colors */}
        <div className="mb-8 bg-gradient-to-r from-red-100 via-green-100 to-blue-100 rounded-2xl p-8">
          <h3 className="text-center text-gray-800 mb-6">The RGB Magic! 🌈</h3>
          <p className="text-center text-xl text-gray-700 mb-6">
            Each pixel has 3 tiny lights: <span className="text-red-600">Red</span>, <span className="text-green-600">Green</span>, and <span className="text-blue-600">Blue</span>!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3"></div>
              <h4 className="text-gray-800 mb-2">Red Light 🔴</h4>
              <p className="text-sm text-gray-600">Turn up red for red colors!</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3"></div>
              <h4 className="text-gray-800 mb-2">Green Light 🟢</h4>
              <p className="text-sm text-gray-600">Turn up green for green colors!</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3"></div>
              <h4 className="text-gray-800 mb-2">Blue Light 🔵</h4>
              <p className="text-sm text-gray-600">Turn up blue for blue colors!</p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-4 gap-3">
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">🔴 + 🟢 = Yellow!</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">🔴 + 🔵 = Purple!</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">🟢 + 🔵 = Cyan!</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">🔴 + 🟢 + 🔵 = White!</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-8">
          <h3 className="text-center text-gray-800 mb-6">How Does the Screen Show Pictures? 🖼️</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">1️⃣</div>
              <p>GPU creates the image</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">2️⃣</div>
              <p>Sends to screen via cable</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">3️⃣</div>
              <p>Screen tells each pixel what color to be</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">4️⃣</div>
              <p>Millions of pixels light up - You see a picture!</p>
            </div>
          </div>
        </div>

        {/* Refresh Rate */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-2 border-green-300 mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className="w-12 h-12 text-yellow-500" />
            <h3 className="text-gray-800">Super Speed Update! ⚡</h3>
          </div>
          <p className="text-xl text-center text-gray-700">
            Your screen updates <span className="text-green-600">60 times EVERY SECOND</span>!<br />
            That's why videos look smooth and games don't look jumpy! 🎮
          </p>
        </div>

        {/* Analogy */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-4 border-dashed border-purple-300">
          <p className="text-2xl text-center text-gray-800">
            🎨 <span className="text-purple-600">Think of it like:</span><br />
            <span className="text-lg">
              Your screen is like a GIANT coloring book with millions of tiny squares!<br />
              The GPU is the super-fast artist that colors each square 60 times per second!<br />
              <span className="text-pink-600">That's how you see cartoons, games, and videos! 📺✨</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
