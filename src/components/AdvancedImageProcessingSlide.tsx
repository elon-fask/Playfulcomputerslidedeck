import React from 'react';
import { ScanFace, ShieldCheck, ShieldAlert, Database, BrainCircuit } from 'lucide-react';

export function AdvancedImageProcessingSlide() {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-8 min-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
                        <ScanFace className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                        Project Spotlight: Face Detection AI 😷
                    </h2>
                    <p className="text-2xl text-gray-600 font-light">
                        Using Computer Vision to Fight COVID-19
                    </p>
                </div>

                {/* Project Overview */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BrainCircuit className="w-6 h-6 text-indigo-500" />
                                The Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We built a smart AI model that can look at a person's face and instantly tell if they are wearing a safety mask or not. This technology helps keep public spaces safe!
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Database className="w-6 h-6 text-indigo-500" />
                                How It Learned (Training)
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Just like you learn from books, our AI learned from thousands of pictures! We fed it two special collections of photos:
                            </p>
                        </div>
                    </div>

                    {/* Visualization Placeholder */}
                    <div className="bg-white rounded-2xl p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group">
                            {/* Placeholder for Face Detection Demo/Diagram */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400 font-medium">Add Image: Face Detection Model Diagram</span>
                            </div>
                            {/* Simulated Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">The AI scans faces in real-time</p>
                    </div>
                </div>

                {/* The Datasets */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center text-gray-800">The Power of Data 📊</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Dataset 1: With Mask */}
                        <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <ShieldCheck className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-xl font-bold text-green-800">Dataset A: With Mask</h4>
                            </div>
                            <ul className="space-y-3 text-green-900">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✅</span>
                                    <span>Thousands of photos of people wearing various types of masks (surgical, cloth, N95).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✅</span>
                                    <span>Teaches the AI what "Safety" looks like.</span>
                                </li>
                            </ul>
                            {/* Image Placeholder */}
                            <div className="mt-4 h-32 bg-green-200/50 rounded-xl flex items-center justify-center border-2 border-dashed border-green-300">
                                <span className="text-green-700 text-sm font-medium">Add Image: Grid of people with masks</span>
                            </div>
                        </div>

                        {/* Dataset 2: Without Mask */}
                        <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-red-100 rounded-full">
                                    <ShieldAlert className="w-8 h-8 text-red-600" />
                                </div>
                                <h4 className="text-xl font-bold text-red-800">Dataset B: No Mask</h4>
                            </div>
                            <ul className="space-y-3 text-red-900">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">⚠️</span>
                                    <span>Photos of faces without any face covering.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">⚠️</span>
                                    <span>Teaches the AI to recognize when safety measures are missing.</span>
                                </li>
                            </ul>
                            {/* Image Placeholder */}
                            <div className="mt-4 h-32 bg-red-200/50 rounded-xl flex items-center justify-center border-2 border-dashed border-red-300">
                                <span className="text-red-700 text-sm font-medium">Add Image: Grid of people without masks</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How it Works Technical */}
                <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-2xl font-bold mb-6 text-center">Behind the Scenes: CNN Deep Learning</h3>
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-3xl mb-2">📥</div>
                            <div className="font-bold text-indigo-300">Input</div>
                            <div className="text-xs text-gray-300">Camera Feed</div>
                        </div>
                        <div className="hidden md:flex items-center justify-center">➡️</div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-indigo-500/30">
                            <div className="text-3xl mb-2">🧠</div>
                            <div className="font-bold text-indigo-300">Processing</div>
                            <div className="text-xs text-gray-300">Feature Extraction</div>
                        </div>
                        <div className="hidden md:flex items-center justify-center">➡️</div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="font-bold text-indigo-300">Output</div>
                            <div className="text-xs text-gray-300">Mask / No Mask</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
