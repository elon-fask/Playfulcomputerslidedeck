import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import {
    TitleSlide,
    ExpansionCardsSlide,
    CPUSlide,
    RAMSlide,
    MotherboardSlide,
    StorageSlide,
    GPUSlide,
    PowerSupplySlide,
    CoolingSlide,
    InternalConnectorsSlide,
    ExternalPortsSlide,
    ConclusionSlide,
    QASlide
} from './SecondPresentationSlides';

export default function SecondPresentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        <TitleSlide key="title" />,
        <ExpansionCardsSlide key="expansion" />,
        <CPUSlide key="cpu" />,
        <RAMSlide key="ram" />,
        <MotherboardSlide key="motherboard" />,
        <StorageSlide key="storage" />,
        <GPUSlide key="gpu" />,
        <PowerSupplySlide key="psu" />,
        <CoolingSlide key="cooling" />,
        <InternalConnectorsSlide key="internal" />,
        <ExternalPortsSlide key="external" />,
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

    const goToDashboard = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen gradient-bg-animated flex flex-col">
            {/* Main Slide Area */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-7xl">
                    {slides[currentSlide]}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 glass rounded-full px-6 py-3 shadow-lg">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-2 rounded-full bg-white/30 text-white disabled:bg-white/10 disabled:cursor-not-allowed hover:bg-white/40 transition-all"
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
                            className={`h-3 rounded-full transition-all ${currentSlide === index
                                    ? 'bg-white w-8'
                                    : 'bg-white/40 w-3 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="p-2 rounded-full bg-white/30 text-white disabled:bg-white/10 disabled:cursor-not-allowed hover:bg-white/40 transition-all"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Slide Counter */}
            <div className="fixed top-8 right-8 glass rounded-full px-4 py-2 shadow-md">
                <span className="text-white font-semibold">
                    {currentSlide + 1} / {slides.length}
                </span>
            </div>

            {/* Home Button */}
            <div className="fixed top-8 left-8">
                <button
                    onClick={goToDashboard}
                    className="glass rounded-full p-3 hover:bg-white/20 transition-all flex items-center gap-2 text-white"
                    aria-label="Go to dashboard"
                >
                    <Home className="w-5 h-5" />
                    <span className="font-semibold">Dashboard</span>
                </button>
            </div>
        </div>
    );
}
