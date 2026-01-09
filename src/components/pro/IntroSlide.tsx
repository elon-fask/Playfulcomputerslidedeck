import React from 'react';
import { Server, HardDrive, Plug } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function IntroSlide() {
  return (
    <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-purple-600 to-[#FF4500]" />
      
      {/* Content Container */}
      <div className="relative h-full min-h-[600px] overflow-y-auto">
        <div className="p-12">
          {/* Video Player */}
          <div className="absolute top-4 right-4 w-64 h-36 z-10">
            <VideoPlayer placeholder="intro-slide-video.mp4" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Introduction</h2>
            <div className="h-1 w-24 bg-white/50 mx-auto rounded-full" />
          </div>
          
          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* System Diagram */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1742811631376-6e6a72f29181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXJib2FyZCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY3NTcwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Motherboard"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Three Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-blue-500/30 backdrop-blur-sm rounded-xl p-4 mb-4 inline-block">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl mb-2">Cartes d'Extension</h3>
                <p className="text-white/80 text-sm">
                  Expansion cards that add specialized capabilities to your system
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-purple-500/30 backdrop-blur-sm rounded-xl p-4 mb-4 inline-block">
                  <HardDrive className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl mb-2">Composants Internes</h3>
                <p className="text-white/80 text-sm">
                  Core hardware components that power your computer
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-red-500/30 backdrop-blur-sm rounded-xl p-4 mb-4 inline-block">
                  <Plug className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl mb-2">Ports et Connecteurs</h3>
                <p className="text-white/80 text-sm">
                  Internal and external interfaces for connectivity
                </p>
              </div>
            </div>
            
            {/* Why This Matters */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl mb-6">Why This Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/90">
                      <span className="font-semibold">Digital infrastructure relies on hardware synergy</span>
                      <br />
                      <span className="text-sm text-white/70">Every component must work in harmony for optimal performance</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/90">
                      <span className="font-semibold">Knowledge aids in troubleshooting and upgrades</span>
                      <br />
                      <span className="text-sm text-white/70">Understanding components enables informed decisions and problem-solving</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Presentation Goals */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl mb-6">Presentation Goals</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">🔌</div>
                  <p className="text-white/90 text-sm">Explore expansion cards and their roles</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">⚙️</div>
                  <p className="text-white/90 text-sm">Dissect internal components (CPU, RAM, etc.)</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">🔗</div>
                  <p className="text-white/90 text-sm">Demystify internal and external connectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}