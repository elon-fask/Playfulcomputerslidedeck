import React from 'react';
import { Camera, Wand2, Palette, Download } from 'lucide-react';

export function ImageProcessingSlide() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
            Image Processing: Computer Magic! ✨
          </h2>
          <p className="text-2xl text-gray-600">
            How computers see, change, and create pictures!
          </p>
        </div>

        {/* What is Image Processing */}
        <div className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300">
          <h3 className="text-center text-gray-800 mb-4">What is Image Processing? 🤔</h3>
          <p className="text-xl text-center text-gray-700">
            It's when a computer looks at a picture and does something cool with it!<br />
            <span className="text-purple-600">Like adding filters, making it bigger, or finding faces! 📸</span>
          </p>
        </div>

        {/* Main Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Photo Editing Example */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1746458825397-9cd95fff0dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjYyMjgwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Photo Editing"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full p-3 shadow-lg">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-gray-800 mb-3">📸 Photo Editing Magic!</h4>
              <p className="text-gray-700">
                The computer changes each pixel's color to make your photos look awesome! 
                Brighter, darker, or add cool filters! 🌈
              </p>
            </div>
          </div>

          {/* Gaming Graphics Example */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1757774636742-0a5dc7e5c07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBncmFwaGljc3xlbnwxfHx8fDE3NjYyMjgwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gaming Graphics"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-blue-500 to-green-600 rounded-full p-3 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-gray-800 mb-3">🎮 Game Graphics!</h4>
              <p className="text-gray-700">
                The GPU draws and processes thousands of images per second to make games look real and smooth! 
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-8">
          <h3 className="text-center text-gray-800 mb-6">How Does Image Processing Work? 🔧</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="mb-2">Get the Image</h4>
              <p className="text-sm">Camera takes photo or you open a file</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-6 text-center">
              <Wand2 className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="mb-2">Break Into Pixels</h4>
              <p className="text-sm">Computer sees millions of tiny colored dots</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl p-6 text-center">
              <Palette className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl mb-2">3️⃣</div>
              <h4 className="mb-2">Process Each Pixel</h4>
              <p className="text-sm">GPU changes colors, brightness, or position</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl p-6 text-center">
              <Download className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl mb-2">4️⃣</div>
              <h4 className="mb-2">Show New Image</h4>
              <p className="text-sm">Put all pixels back together - Ta-da!</p>
            </div>
          </div>
        </div>

        {/* Cool Things Image Processing Can Do */}
        <div className="mb-8">
          <h3 className="text-center text-gray-800 mb-6">Cool Things Image Processing Can Do! 🌟</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Face Detection',
                emoji: '😊',
                description: 'Find faces in photos - like Snapchat filters!',
                color: 'from-pink-100 to-red-100',
                border: 'border-pink-300'
              },
              {
                title: 'Filters & Effects',
                emoji: '🎨',
                description: 'Make photos black & white, add rainbows, or make it look old!',
                color: 'from-purple-100 to-blue-100',
                border: 'border-purple-300'
              },
              {
                title: 'Resize & Crop',
                emoji: '📏',
                description: 'Make pictures bigger or smaller without making them blurry!',
                color: 'from-blue-100 to-cyan-100',
                border: 'border-blue-300'
              },
              {
                title: 'Background Removal',
                emoji: '🪄',
                description: 'Remove backgrounds like magic - just like in movies!',
                color: 'from-green-100 to-emerald-100',
                border: 'border-green-300'
              },
              {
                title: 'Brightness & Color',
                emoji: '☀️',
                description: 'Make dark photos bright or change all the colors!',
                color: 'from-yellow-100 to-orange-100',
                border: 'border-yellow-300'
              },
              {
                title: 'AI Art',
                emoji: '🤖',
                description: 'Computer can even create NEW pictures from your imagination!',
                color: 'from-indigo-100 to-purple-100',
                border: 'border-indigo-300'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 border-2 ${item.border} hover:scale-105 transition-transform`}
              >
                <div className="text-5xl text-center mb-3">{item.emoji}</div>
                <h4 className="text-gray-800 text-center mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pixel Grid Example */}
        <div className="mb-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
          <h3 className="text-center text-gray-800 mb-6">How Computers See Pictures 👀</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-gray-800 text-center mb-4">What YOU See 👦</h4>
              <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 h-40 rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl">A Beautiful Picture! 🖼️</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-gray-800 text-center mb-4">What COMPUTER Sees 🤖</h4>
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 80 }).map((_, i) => {
                  const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500'];
                  return (
                    <div
                      key={i}
                      className={`w-full aspect-square ${colors[Math.floor(Math.random() * colors.length)]}`}
                    />
                  );
                })}
              </div>
              <p className="text-xs text-center text-gray-600 mt-2">Millions of numbered pixels!</p>
            </div>
          </div>
        </div>

        {/* Real World Uses */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-white text-center mb-6">Where Do We Use This? 🌍</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <p className="text-lg">📱 <span className="font-semibold">Smartphones:</span> Camera filters, portrait mode, night mode!</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <p className="text-lg">🎮 <span className="font-semibold">Video Games:</span> All the graphics you see!</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <p className="text-lg">🎬 <span className="font-semibold">Movies:</span> Special effects and animations!</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <p className="text-lg">🏥 <span className="font-semibold">Hospitals:</span> X-rays and medical scans!</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6 border-4 border-dashed border-purple-300">
          <p className="text-2xl text-center text-gray-800">
            ✨ <span className="text-purple-600">Remember:</span><br />
            <span className="text-lg">
              Image Processing = Computer looks at each tiny pixel and does math to change it!<br />
              GPU does this SUPER FAST for millions of pixels!<br />
              <span className="text-pink-600">That's how all the cool photo effects and games work! 🎨🎮📸</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
