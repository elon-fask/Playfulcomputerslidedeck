import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Presentation, Monitor, History, Maximize2, Sun, Moon, Sparkles } from 'lucide-react';

interface PresentationData {
    id: number;
    title: string;
    url: string;
    created_at: string;
}

export default function PresentationDashboard() {
    const [presentations, setPresentations] = useState<PresentationData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    useEffect(() => {
        fetch('http://localhost:4000/api/presentations')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch presentations');
                return res.json();
            })
            .then((data) => {
                setPresentations(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const openInNewWindow = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const enterTheaterMode = (url: string) => {
        const theaterWindow = window.open(url, '_blank', 'noopener,noreferrer,fullscreen=yes');
        if (theaterWindow) {
            setTimeout(() => {
                theaterWindow.document.documentElement.requestFullscreen?.();
            }, 1000);
        }
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -10,
            scale: 1.03,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="min-h-screen gradient-bg-animated relative overflow-hidden">
            {/* Animated Particles Background */}
            <div className="particles-background">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            {/* Wave Background */}
            <div className="wave-background">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    {darkMode ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 180, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Sun className="w-6 h-6 text-yellow-400" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Moon className="w-6 h-6 text-purple-400" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <div className="relative z-10 p-8 min-h-screen">
                {/* Header */}
                <motion.header
                    className="text-center mb-16"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <Sparkles className="w-12 h-12 text-cyan-400" />
                        </motion.div>
                        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
                            Presentation Dashboard
                        </h1>
                        <motion.div
                            animate={{
                                rotate: [360, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <Sparkles className="w-12 h-12 text-pink-400" />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-2xl text-white/90 flex items-center justify-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <History className="w-6 h-6" />
                        Interactive Computer Components Presentations
                    </motion.p>
                </motion.header>

                {/* Loading State */}
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="spinner mx-auto mb-4"></div>
                            <p className="text-white text-xl">Loading presentations...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Error State */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            className="max-w-2xl mx-auto glass neon-border rounded-2xl p-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <p className="text-white text-center text-lg">
                                ⚠️ Error: {error}. Make sure the backend is running on port 4000.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Presentations Grid */}
                {!loading && !error && (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {presentations.map((pres, index) => (
                            <motion.div
                                key={pres.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="glass glass-hover neon-border rounded-3xl p-8 card-3d cursor-pointer"
                            >
                                {/* Decorative particle effect on card */}
                                <motion.div
                                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.5
                                    }}
                                />

                                {/* Card Header */}
                                <div className="flex items-start gap-4 mb-6 relative z-10">
                                    <motion.div
                                        className="glass rounded-2xl p-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Presentation className="w-10 h-10 text-white drop-shadow-lg" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                                            {pres.title}
                                        </h2>
                                        <p className="text-white/70 text-sm flex items-center gap-2">
                                            <Monitor className="w-4 h-4" />
                                            Created: {new Date(pres.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress bar (decorative) */}
                                <div className="mb-6 bg-white/10 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1, delay: index * 0.3 }}
                                    />
                                </div>

                                {/* Card Actions */}
                                <div className="flex gap-4 relative z-10">
                                    <motion.button
                                        onClick={() => openInNewWindow(pres.url)}
                                        className="btn btn-white flex-1 flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Monitor className="w-5 h-5" />
                                        Open Presentation
                                    </motion.button>
                                    <motion.button
                                        onClick={() => enterTheaterMode(pres.url)}
                                        className="btn btn-neon flex items-center justify-center gap-2 px-6"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Theater Mode"
                                    >
                                        <Maximize2 className="w-5 h-5" />
                                        Theater
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Footer */}
                <motion.footer
                    className="text-center mt-20 text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-lg">© 2025 Interactive Computer Components Presentation Dashboard</p>
                    <p className="text-sm mt-2">Powered by React, Framer Motion & Express</p>
                </motion.footer>
            </div>
        </div>
    );
}
