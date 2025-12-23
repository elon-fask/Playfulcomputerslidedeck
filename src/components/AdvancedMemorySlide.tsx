import React from 'react';
import { Database, HardDrive, Unplug, ArrowRightLeft, Timer } from 'lucide-react';

export function AdvancedMemorySlide() {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-orange-100 rounded-2xl mb-4">
                        <Database className="w-16 h-16 text-orange-600" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                        Memory & Storage: The Vaults 📦
                    </h2>
                    <p className="text-xl text-gray-600">
                        Where Data Lives: From Nanoseconds to Forever
                    </p>
                </div>

                {/* The Memory Hierarchy Pyramid */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">The Hierarchy of Speed</h3>

                    <div className="flex flex-col items-center space-y-2 max-w-2xl mx-auto">
                        {/* CPU Registers */}
                        <div className="w-24 py-2 bg-red-500 text-white text-center rounded-t-lg shadow-lg z-40 transform hover:scale-110 transition-transform">
                            <span className="text-xs font-bold">CPU Registers</span>
                        </div>

                        {/* Cache */}
                        <div className="w-48 py-3 bg-orange-500 text-white text-center shadow-lg z-30 transform hover:scale-105 transition-transform">
                            <span className="font-bold">L1 / L2 / L3 Cache</span>
                            <p className="text-[10px] opacity-80">Super Fast but Tiny</p>
                        </div>

                        {/* RAM */}
                        <div className="w-80 py-4 bg-yellow-500 text-white text-center shadow-lg z-20 transform hover:scale-105 transition-transform">
                            <span className="font-bold text-lg">RAM (Main Memory)</span>
                            <p className="text-xs opacity-90">Fast, Temporary (Volatile)</p>
                        </div>

                        {/* Storage */}
                        <div className="w-full py-6 bg-blue-600 text-white text-center rounded-b-lg shadow-lg z-10 transform hover:scale-105 transition-transform">
                            <span className="font-bold text-xl">Storage (SSD / HDD)</span>
                            <p className="text-sm opacity-90">Slow, Permanent (Non-Volatile)</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* RAM Section */}
                    <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <ArrowRightLeft className="w-8 h-8 text-yellow-600" />
                            <h3 className="text-2xl font-bold text-yellow-800">RAM (Random Access Memory)</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-2">
                                <span className="font-bold text-yellow-600">Volatile:</span>
                                Forgets everything when power is off.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-yellow-600">Workspace:</span>
                                It's like your desk. The bigger the desk, the more papers (apps) you can have open at once without slowing down.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-yellow-600">Speed:</span>
                                ~20-50 GB/s bandwidth.
                            </li>
                        </ul>
                        {/* Image Placeholder */}
                        <div className="mt-4 h-32 bg-yellow-100 rounded-xl flex items-center justify-center border-2 border-dashed border-yellow-300">
                            <span className="text-yellow-700 text-sm font-medium">Add Image: RAM Sticks (DDR4/5)</span>
                        </div>
                    </div>

                    {/* Storage Section */}
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <HardDrive className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-blue-800">Storage (SSD vs HDD)</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">Non-Volatile:</span>
                                Remembers data forever (Photos, OS, Games).
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">SSD (Solid State):</span>
                                No moving parts, instant loading (Flash Memory).
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">HDD (Hard Drive):</span>
                                Spinning platters, slower, older tech.
                            </li>
                        </ul>
                        {/* Image Placeholder */}
                        <div className="mt-4 h-32 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
                            <span className="text-blue-700 text-sm font-medium">Add Image: M.2 SSD vs HDD</span>
                        </div>
                    </div>

                </div>

                {/* Bottleneck Concept */}
                <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="p-4 bg-red-500/20 rounded-full">
                            <Timer className="w-12 h-12 text-red-400" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">The Bottleneck Problem ⚠️</h3>
                            <p className="text-gray-300">
                                The CPU is super fast. If your Storage (HDD) is slow, the CPU has to sit and wait doing nothing.
                                <br />
                                <span className="text-green-400 font-bold">This is why upgrading to an SSD makes an old computer feel new!</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
