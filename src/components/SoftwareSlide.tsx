import React from 'react';
import { AppWindow, Gamepad2, Paintbrush, Video, Music, Book, Settings } from 'lucide-react';

export function SoftwareSlide() {
  const apps = [
    { name: 'Games', icon: Gamepad2, color: 'from-red-500 to-orange-500', emoji: '🎮' },
    { name: 'Drawing', icon: Paintbrush, color: 'from-pink-500 to-purple-500', emoji: '🎨' },
    { name: 'Videos', icon: Video, color: 'from-blue-500 to-cyan-500', emoji: '📺' },
    { name: 'Music', icon: Music, color: 'from-green-500 to-emerald-500', emoji: '🎵' },
    { name: 'Learning', icon: Book, color: 'from-yellow-500 to-amber-500', emoji: '📚' },
    { name: 'Settings', icon: Settings, color: 'from-gray-500 to-slate-500', emoji: '⚙️' }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Software: The Computer's Invisible Friends ✨
          </h2>
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4">
            <p className="text-2xl text-gray-700">
              These are the programs that make the computer do cool stuff!
            </p>
          </div>
        </div>

        {/* Operating System Section */}
        <div className="mb-10">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <Settings className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full p-4">
                  <AppWindow className="w-12 h-12 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Operating System (OS)</h3>
                  <p className="text-xl">The Boss! 👔</p>
                </div>
              </div>
              <p className="text-xl mb-4">
                The OS tells all the other parts what to do. Without it, the computer would be like a robot with no instructions—just beep boop confusion! 🤖
              </p>
              <div className="flex gap-4 justify-center">
                <div className="bg-white rounded-xl px-4 py-2">
                  <p className="text-blue-600">Windows</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2">
                  <p className="text-gray-800">macOS</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2">
                  <p className="text-orange-600">Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-gray-700 mb-2">Applications (Apps)</h3>
            <p className="text-2xl text-purple-600">Apps are like toys for the computer! 🧸</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {apps.map((app, index) => (
              <div
                key={index}
                className="group hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-purple-300 transition-all">
                  <div className={`bg-gradient-to-br ${app.color} rounded-xl p-3 mb-3 relative`}>
                    <app.icon className="w-8 h-8 text-white mx-auto" />
                    <div className="absolute -top-1 -right-1 text-xl">{app.emoji}</div>
                  </div>
                  <p className="text-center text-sm text-gray-700">{app.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analogy Box */}
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-2xl p-6 text-center border-4 border-purple-200">
          <p className="text-2xl text-gray-700">
            🧚‍♀️ <span className="text-purple-600">Software is like invisible fairies</span> 🧚‍♂️<br />
            You can't see them, but they make the magic happen!
          </p>
        </div>
      </div>
    </div>
  );
}
