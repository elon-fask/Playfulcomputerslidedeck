import React from 'react';
import { Cpu } from 'lucide-react';

export function TitleSlide() {
  return (
    <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-purple-600 to-[#FF4500]" />
      
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />
      
      {/* Content */}
      <div className="relative h-full min-h-[600px] flex flex-col items-center justify-center p-12 text-white">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
              <Cpu className="w-24 h-24 text-white" />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-white text-6xl md:text-7xl max-w-5xl mx-auto leading-tight">
            Computer Components & Connectors
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto">
            A Deep Dive into Digital Infrastructure
          </p>
          
          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
          </div>
          
          {/* Meta Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 inline-block">
            <p className="text-lg text-white/90">
              Professional Technical Presentation • January 2026
            </p>
          </div>
          
          {/* Footer Note */}
          <p className="text-sm text-white/70 pt-8">
            Understanding the Backbone of Modern Computing
          </p>
        </div>
      </div>
    </div>
  );
}
