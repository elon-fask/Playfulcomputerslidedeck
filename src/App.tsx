import React, { useState } from 'react';
import { TitleSlide } from './components/TitleSlide';
import { IntroSlide } from './components/IntroSlide';
import { GeneralDescriptionSlide } from './components/GeneralDescriptionSlide';
import { AdvancedComputersSlide } from './components/AdvancedComputersSlide';
import { HardwareSlide } from './components/HardwareSlide';
import { SoftwareSlide } from './components/SoftwareSlide';
import { InteractiveSlide } from './components/InteractiveSlide';
import { GPUSlide } from './components/GPUSlide';
import { ScreenSlide } from './components/ScreenSlide';
import { ImageProcessingSlide } from './components/ImageProcessingSlide';
import { ConclusionSlide } from './components/ConclusionSlide';
import { QASlide } from './components/QASlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { AdvancedCPUSlide } from './components/AdvancedCPUSlide';
import { AdvancedMemorySlide } from './components/AdvancedMemorySlide';
import { AdvancedGPUSlide } from './components/AdvancedGPUSlide';
import { AdvancedImageProcessingSlide } from './components/AdvancedImageProcessingSlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide key="title" />,
    // <IntroSlide key="intro" />,
    // <GeneralDescriptionSlide key="generalDescription" />,
    // <AdvancedComputersSlide key="advancedComputers" />,
    <HardwareSlide key="hardware" />,
    <AdvancedCPUSlide key="advancedCPU" />,
    <AdvancedMemorySlide key="advancedMemory" />,
    <SoftwareSlide key="software" />,
    <InteractiveSlide key="interactive" />,
    <GPUSlide key="gpu" />,
    <AdvancedGPUSlide key="advancedGPU" />,
    <ScreenSlide key="screen" />,
    <AdvancedImageProcessingSlide key="advancedImageProcessing" />,
    <ImageProcessingSlide key="imageProcessing" />,
    <ConclusionSlide key="conclusion" />,
    <QASlide key="qa" />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-purple-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                ? 'bg-purple-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full bg-purple-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 bg-white rounded-full px-4 py-2 shadow-md">
        <span className="text-purple-600">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}