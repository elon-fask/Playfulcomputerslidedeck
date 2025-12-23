import React from 'react';
import { Monitor, Sparkles } from 'lucide-react';
import openingPicture from '../assets/opening_picture.png';

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
        {/* Opening Picture */}
        <div className="relative inline-block">
          <div className="rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={openingPicture}
              alt="Welcome to Computer Science"
              className="w-full max-w-md h-auto rounded-2xl object-cover"
            />
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
