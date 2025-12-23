import React from 'react';
import { Cpu, Clock, GitBranch, Binary, CircuitBoard } from 'lucide-react';

export function AdvancedCPUSlide() {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-4">
                        <Cpu className="w-16 h-16 text-blue-600" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        CPU Architecture: The Commander 🧠
                    </h2>
                    <p className="text-xl text-gray-600">
                        Central Processing Unit - The Brain that Orchestrates Everything
                    </p>
                </div>

                {/* The Fundamental Cycle */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Brain's Heartbeat: Machine Cycle</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 p-6 bg-white rounded-xl shadow-sm text-center border-b-4 border-yellow-400">
                            <div className="text-3xl mb-2">📥</div>
                            <h4 className="font-bold text-gray-800">1. FETCH</h4>
                            <p className="text-sm text-gray-500">Get instruction from RAM</p>
                        </div>
                        <div className="text-gray-400 text-2xl">→</div>
                        <div className="flex-1 p-6 bg-white rounded-xl shadow-sm text-center border-b-4 border-blue-400">
                            <div className="text-3xl mb-2">🤔</div>
                            <h4 className="font-bold text-gray-800">2. DECODE</h4>
                            <p className="text-sm text-gray-500">Understand what to do</p>
                        </div>
                        <div className="text-gray-400 text-2xl">→</div>
                        <div className="flex-1 p-6 bg-white rounded-xl shadow-sm text-center border-b-4 border-green-400">
                            <div className="text-3xl mb-2">⚡</div>
                            <h4 className="font-bold text-gray-800">3. EXECUTE</h4>
                            <p className="text-sm text-gray-500">Perform the calculation</p>
                        </div>
                        <div className="text-gray-400 text-2xl">→</div>
                        <div className="flex-1 p-6 bg-white rounded-xl shadow-sm text-center border-b-4 border-purple-400">
                            <div className="text-3xl mb-2">💾</div>
                            <h4 className="font-bold text-gray-800">4. WRITE BACK</h4>
                            <p className="text-sm text-gray-500">Save result to memory</p>
                        </div>
                    </div>
                    <p className="text-center mt-6 text-gray-600 italic">
                        "This cycle happens billions of times every second!" (GHz)
                    </p>
                </div>

                {/* Architecture Details */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Section 1: Components */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800">Inside the Chip 🔬</h3>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:translate-x-1 transition-transform">
                            <div className="flex items-center gap-3 mb-2">
                                <Binary className="w-6 h-6 text-red-500" />
                                <h4 className="font-bold text-lg">ALU (Arithmetic Logic Unit)</h4>
                            </div>
                            <p className="text-gray-600">
                                The calculator. It does all the Math (+, -, *) and Logic (AND, OR, NOT).
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:translate-x-1 transition-transform">
                            <div className="flex items-center gap-3 mb-2">
                                <GitBranch className="w-6 h-6 text-orange-500" />
                                <h4 className="font-bold text-lg">Control Unit (CU)</h4>
                            </div>
                            <p className="text-gray-600">
                                The conductor. It tells data where to go and when, managing the flow of information.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:translate-x-1 transition-transform">
                            <div className="flex items-center gap-3 mb-2">
                                <CircuitBoard className="w-6 h-6 text-teal-500" />
                                <h4 className="font-bold text-lg">Cache (L1, L2, L3)</h4>
                            </div>
                            <p className="text-gray-600">
                                Ultra-fast memory built DIRECTLY onto the chip. It stores data the CPU thinks it will need next to avoid waiting for "slow" RAM.
                            </p>
                        </div>
                    </div>

                    {/* Visualization/Placeholder */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800">Visualizing Speed 🏎️</h3>

                        <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                            {/* Placeholder for Die Shot or Architecture Diagram */}
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors"></div>

                            <div className="relative z-10 p-8 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/80">
                                <span className="text-gray-300 font-medium block mb-2">Add Image: CPU Die Shot / Wafer</span>
                                <span className="text-xs text-gray-500">Ideally showing cores and cache layout</span>
                            </div>

                            <div className="mt-8 text-white space-y-2">
                                <div className="flex items-center gap-2 justify-center">
                                    <Clock className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                                    <span className="font-mono text-lg">Clock Speed: 4.0 GHz</span>
                                </div>
                                <p className="text-sm text-gray-400">4 Billion cycles per second!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real World Comparison */}
                <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">Cores vs Threads 🧵</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                            <span className="font-bold block text-indigo-600 mb-1">Cores (Physical Arms)</span>
                            <p className="text-sm text-gray-600">Actual physical processing units. A 4-core CPU has 4 distinct "brains".</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <span className="font-bold block text-purple-600 mb-1">Threads (Virtual Hands)</span>
                            <p className="text-sm text-gray-600">Virtual cores that allow one physical core to multitask efficiently (Hyper-threading).</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
