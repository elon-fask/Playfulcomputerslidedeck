import { motion } from 'framer-motion';
import { Home, Layout, Play, ExternalLink } from 'lucide-react';

export default function FirstPresentation() {
    const goToDashboard = () => {
        window.location.href = '/';
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen gradient-bg-animated flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="particles-background">
                <div className="particle particle-1" style={{ top: '10%', left: '10%' }}></div>
                <div className="particle particle-4" style={{ top: '70%', left: '80%' }}></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="glass neon-border rounded-[3rem] p-16 max-w-4xl w-full text-center relative z-10"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-8">
                    <div className="p-6 glass rounded-full shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                        <Layout className="w-20 h-20 text-pink-400" />
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-7xl font-black text-white mb-6 tracking-tighter"
                >
                    Playful <span className="text-pink-500">Computers</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-2xl text-white/80 mb-10 font-light"
                >
                    The original interactive slide deck legacy project.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="glass rounded-3xl p-8 mb-12 border border-white/10 bg-white/5"
                >
                    <div className="flex items-center justify-center gap-4 text-white/90 mb-4">
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                        <span className="font-bold tracking-widest uppercase text-xs">Internal Resource Path</span>
                    </div>
                    <code className="bg-black/40 px-4 py-2 rounded-xl text-cyan-400 font-mono text-sm block border border-cyan-500/20">
                        /src/App.tsx
                    </code>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-6 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToDashboard}
                        className="btn btn-white flex items-center gap-3 px-8"
                    >
                        <Home className="w-5 h-5" />
                        Return to Nexus
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-neon flex items-center gap-3 px-8"
                    >
                        <Play className="w-5 h-5" />
                        Initialize Legacy
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Decorative text */}
            <div className="fixed bottom-10 left-10 text-white/10 font-black text-9xl pointer-events-none select-none">
                LEGACY
            </div>
        </div>
    );
}
