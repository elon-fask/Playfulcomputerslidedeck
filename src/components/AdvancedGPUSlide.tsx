import React from 'react';
import { Cpu, Zap, Layers, Box, Aperture, Activity } from 'lucide-react';

export function AdvancedGPUSlide() {
    return (
        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 min-h-[600px] overflow-y-auto custom-scrollbar text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-green-500/20 rounded-2xl mb-4 border border-green-500/50">
                        <Cpu className="w-16 h-16 text-green-400" />
                    </div>
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                        GPU Architecture: Deep Dive 🚀
                    </h2>
                    <p className="text-2xl text-gray-400 font-light">
                        Understanding the Massively Parallel Powerhouse
                    </p>
                </div>

                {/* Core Architecture Comparison */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                            <Cpu className="w-6 h-6" /> CPU Architecture
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Designed for <span className="text-white font-bold">Sequential Processing</span>. Has a few powerful cores (4-64) focused on complex logic and single-thread performance.
                        </p>
                        {/* Visualization Placeholder */}
                        <div className="h-32 bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center relative">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-500 text-xl font-bold">Core</div>
                                <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-500 text-xl font-bold">Core</div>
                                <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-500 text-xl font-bold">Core</div>
                            </div>
                            <div className="absolute bottom-2 text-xs text-blue-300">Few, Strong Cores</div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400">
                            <Box className="w-6 h-6" /> GPU Architecture
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Designed for <span className="text-white font-bold">Parallel Processing</span>. Has thousands of smaller cores (CUDA Cores/Stream Processors) to handle massive amounts of simple math at once.
                        </p>
                        {/* Visualization Placeholder */}
                        <div className="h-32 bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden">
                            <div className="grid grid-cols-12 gap-1 opacity-50">
                                {Array.from({ length: 48 }).map((_, i) => (
                                    <div key={i} className="w-3 h-3 bg-green-500 rounded-sm"></div>
                                ))}
                            </div>
                            <div className="absolute bottom-2 text-xs text-green-300">Thousands of Efficient Cores</div>
                        </div>
                    </div>
                </div>

                {/* Technical Deep Dive Sections */}
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-center text-gray-200">Under the Hood 🔧</h3>

                    {/* Section 1: Parallelism */}
                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <Activity className="w-8 h-8 text-yellow-500" />
                                <h4 className="text-2xl font-bold text-white">Massive Parallelism (SIMD)</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                GPU Architecture uses <strong>SIMD (Single Instruction, Multiple Data)</strong>. Imagine a commander telling 1,000 soldiers to "March Forward" at once. One command (Instruction) moves 1,000 units (Data). This is why it renders images (millions of pixels) so fast.
                            </p>
                            <div className="p-4 bg-yellow-500/10 rounded-xl border-l-4 border-yellow-500">
                                <p className="text-yellow-200 text-sm">
                                    <strong>Example:</strong> In a video game, changing the lighting for every pixel on a 4K screen (8 million pixels) happens effectively simultaneously!
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Add diagram: SIMD Pipeline</span>
                        </div>
                    </div>

                    {/* Section 2: VRAM */}
                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 flex flex-col md:flex-row-reverse gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <Layers className="w-8 h-8 text-purple-500" />
                                <h4 className="text-2xl font-bold text-white">VRAM (Video Memory)</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                GPUs have their own super-fast memory called <strong>GDDR6/GDDR6X</strong>. It has incredibly high bandwidth compared to system RAM. It stores textures, geometry, and frame buffers for instant access by the core clusters.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Add Image: GDDR6 Chip Closeup</span>
                        </div>
                    </div>

                    {/* Section 3: Specialized Cores */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                        <h4 className="text-2xl font-bold text-white mb-6 text-center">Evolution: Specialized Cores</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/50 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Aperture className="w-6 h-6 text-cyan-400" />
                                    <h5 className="text-xl font-bold text-cyan-100">RT Cores (Ray Tracing)</h5>
                                </div>
                                <p className="text-gray-400">
                                    Hardware specifically built to calculate light bounces! They trace the path of light rays to simulate realistic reflections, shadows, and refractions in real-time.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Zap className="w-6 h-6 text-pink-400" />
                                    <h5 className="text-xl font-bold text-pink-100">Tensor Cores (AI)</h5>
                                </div>
                                <p className="text-gray-400">
                                    Matrix multiplication engines designed for Deep Learning. They power features like <strong>DLSS (Deep Learning Super Sampling)</strong>, which uses AI to upscale images for better performance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Video Placeholder */}
                <div className="bg-black rounded-3xl overflow-hidden aspect-video relative group border border-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md group-hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                            <span className="text-gray-400 font-medium">Add Video: "How GPUs Work" Animation</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
