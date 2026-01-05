import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Maximize2, Minimize2 } from 'lucide-react';
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
    const [isFullScreen, setIsFullScreen] = useState(false);

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

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullScreen(false);
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'f') toggleFullScreen();
            if (e.key === 'Escape' && isFullScreen) setIsFullScreen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, isFullScreen]);

    return (
        <div className="min-h-screen gradient-bg-animated overflow-hidden flex flex-col relative">
            {/* Animated Background Elements */}
            <div className="particles-background">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
            </div>

            <div className="wave-background">
                <div className="wave"></div>
                <div className="wave" style={{ animationDelay: '-5s', opacity: 0.2 }}></div>
            </div>

            {/* Top Bar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 pointer-events-none"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToDashboard}
                    className="glass rounded-2xl p-4 flex items-center gap-3 text-white pointer-events-auto shadow-xl"
                >
                    <Home className="w-5 h-5" />
                    <span className="font-bold tracking-wide uppercase text-xs">Dashboard</span>
                </motion.button>

                <div className="flex gap-4 pointer-events-auto">
                    <motion.div className="glass rounded-2xl px-6 py-4 text-white font-black text-lg shadow-xl shrink-0">
                        {currentSlide + 1} <span className="opacity-30 mx-1">/</span> {slides.length}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleFullScreen}
                        className="glass rounded-2xl p-4 text-white shadow-xl"
                        title="Toggle Theater Mode (F)"
                    >
                        {isFullScreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                    </motion.button>
                </div>
            </motion.div>

            {/* Main Slide Area */}
            <main className="flex-1 flex items-center justify-center p-8 relative z-10 mt-16 mb-24">
                <div className="w-full max-w-7xl relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: 45 }}
                            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, x: -100, scale: 0.9, rotateY: -45 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="w-full"
                        >
                            {slides[currentSlide]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Floating Navigation Dock */}
            <motion.div
                initial={{ y: 100, x: '-50%' }}
                animate={{ y: 0, x: '-50%' }}
                className="fixed bottom-8 left-1/2 flex items-center gap-6 glass rounded-[2.5rem] p-4 shadow-2xl z-50 border-t border-white/20"
            >
                <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-4 rounded-3xl bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-lg"
                >
                    <ChevronLeft className="w-8 h-8" />
                </motion.button>

                <div className="flex gap-3 px-4 overflow-x-auto max-w-[40vw] py-2 scrollbar-none">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            initial={false}
                            animate={{
                                width: currentSlide === index ? 40 : 12,
                                backgroundColor: currentSlide === index ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
                            }}
                            onClick={() => goToSlide(index)}
                            className="h-3 rounded-full shadow-inner"
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="p-4 rounded-3xl bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-lg"
                >
                    <ChevronRight className="w-8 h-8" />
                </motion.button>
            </motion.div>

            {/* Dynamic Background Shadow */}
            <div className="fixed inset-0 bg-blue-900/10 pointer-events-none mix-blend-multiply"></div>
        </div>
    );
}
