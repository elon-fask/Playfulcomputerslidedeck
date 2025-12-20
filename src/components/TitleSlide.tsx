import React from 'react';
import { Monitor, Sparkles } from 'lucide-react';

export function TitleSlide() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-pink-400 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Computer Icon with smile */}
        <div className="relative inline-block">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-transform">
            <Monitor className="w-32 h-32 text-white" />
          </div>
          {/* Smiley face overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="text-6xl">😊</div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Let's Meet the Computer!
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          
          <p className="text-3xl text-gray-600">
            A Fun Adventure Inside the Magic Box!
          </p>
        </div>

        {/* Decorative stars */}
        <div className="flex justify-center gap-4 pt-8">
          {['⭐', '🌟', '✨', '🌟', '⭐'].map((star, i) => (
            <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {star}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
