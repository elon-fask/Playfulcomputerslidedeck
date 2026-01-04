import React, { useState } from 'react';
import { TitleSlide } from './components/pro/TitleSlide';
import { IntroSlide } from './components/pro/IntroSlide';
import { ExpansionCardsSlide } from './components/pro/ExpansionCardsSlide';
import { InternalComponentsSlide } from './components/pro/InternalComponentsSlide';
import { InternalConnectorsSlide } from './components/pro/InternalConnectorsSlide';
import { ExternalPortsSlide } from './components/pro/ExternalPortsSlide';
import { ComparisonSlide } from './components/pro/ComparisonSlide';
import { PracticalTipsSlide } from './components/pro/PracticalTipsSlide';
import { CaseStudySlide } from './components/pro/CaseStudySlide';
import { QASlide } from './components/pro/QASlide';
import { ConclusionSlide } from './components/pro/ConclusionSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide key="title" />,
    <IntroSlide key="intro" />,
    <ExpansionCardsSlide key="expansion" />,
    <InternalComponentsSlide key="internal" />,
    <InternalConnectorsSlide key="connectors" />,
    <ExternalPortsSlide key="ports" />,
    <ComparisonSlide key="comparison" />,
    <PracticalTipsSlide key="tips" />,
    <CaseStudySlide key="case" />,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/20">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
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
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 shadow-lg border border-white/20">
        <span className="text-white font-mono">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Presentation Info */}
      <div className="fixed top-8 left-8 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 shadow-lg border border-white/20">
        <span className="text-white/80 text-sm">
          Computer Components & Connectors
        </span>
      </div>
    </div>
  );
}
