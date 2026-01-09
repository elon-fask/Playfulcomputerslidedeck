import React from 'react';
import { Usb, Monitor, Headphones, Wifi, Zap } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function ExternalPortsSlide() {
  const ports = [
    {
      id: 'usb',
      name: 'USB Ports',
      icon: Usb,
      description: 'Universal Serial Bus - the most common interface for connecting peripherals and transferring data.',
      types: [
        { name: 'USB 2.0 Type-A', speed: '480Mbps', use: 'Legacy devices, keyboards, mice' },
        { name: 'USB 3.0 Type-A', speed: '5Gbps', use: 'External drives, peripherals' },
        { name: 'USB 3.1 Gen 2', speed: '10Gbps', use: 'High-speed storage, docks' },
        { name: 'USB 3.2 Type-C', speed: '20Gbps', use: 'Modern devices, power delivery' },
        { name: 'Thunderbolt 4', speed: '40Gbps', use: 'Professional workflows, eGPUs' }
      ],
      note: 'USB-C is reversible and supports data, video, and power delivery (up to 100W)',
      imagePlaceholder: 'usb-ports-image.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'video',
      name: 'Video Ports',
      icon: Monitor,
      description: 'Display interfaces for connecting monitors and projectors to your computer.',
      types: [
        { name: 'HDMI 2.0', speed: '18Gbps', use: '4K@60Hz, common on consumer devices' },
        { name: 'HDMI 2.1', speed: '48Gbps', use: '4K@120Hz, 8K@60Hz, VRR gaming' },
        { name: 'DisplayPort 1.4', speed: '32.4Gbps', use: '8K@60Hz, 4K@144Hz' },
        { name: 'DisplayPort 2.0', speed: '80Gbps', use: '16K@60Hz (future displays)' },
        { name: 'VGA (Analog)', speed: 'N/A', use: 'Legacy - avoid if possible' }
      ],
      note: 'DisplayPort is preferred for high refresh rate gaming monitors (120Hz+)',
      imagePlaceholder: 'video-ports-image.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'audio',
      name: 'Audio Ports',
      icon: Headphones,
      description: 'Connectors for speakers, headphones, and microphones.',
      types: [
        { name: '3.5mm Jack (Analog)', speed: 'Analog', use: 'Headphones, speakers, microphones' },
        { name: 'SPDIF Optical', speed: 'Digital', use: 'Home theater systems, soundbars' },
        { name: 'SPDIF Coaxial', speed: 'Digital', use: 'Professional audio equipment' },
        { name: 'USB Audio', speed: 'Digital', use: 'USB headsets, DACs' }
      ],
      note: 'Digital SPDIF avoids electromagnetic interference for cleaner audio',
      imagePlaceholder: 'audio-ports-image.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'network',
      name: 'Network Ports',
      icon: Wifi,
      description: 'Ethernet ports for wired network connectivity.',
      types: [
        { name: 'RJ45 Gigabit', speed: '1Gbps', use: 'Standard home/office networking' },
        { name: 'RJ45 2.5G Multi-Gig', speed: '2.5Gbps', use: 'Fast home networks, NAS' },
        { name: 'RJ45 10G', speed: '10Gbps', use: 'Enterprise, data centers' },
        { name: 'SFP/SFP+', speed: '1-10Gbps', use: 'Fiber optic connections' }
      ],
      note: '10Gbps Ethernet is overkill for most home users - 2.5G is the sweet spot',
      imagePlaceholder: 'network-ports-image.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'other',
      name: 'Other Ports',
      icon: Zap,
      description: 'Specialized ports for specific use cases and legacy compatibility.',
      types: [
        { name: 'Thunderbolt 4', speed: '40Gbps', use: 'Docking stations, eGPUs, displays' },
        { name: 'eSATA', speed: '6Gbps', use: 'External HDDs (legacy)' },
        { name: 'PS/2', speed: 'Legacy', use: 'Old keyboards/mice' },
        { name: 'Serial/Parallel', speed: 'Legacy', use: 'Industrial equipment' }
      ],
      note: 'Thunderbolt 4 can daisy-chain up to 6 devices from a single port',
      imagePlaceholder: 'other-ports-image.jpg',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-purple-600 to-[#FF4500]" />
      
      {/* Content Container */}
      <div className="relative h-full min-h-[600px] overflow-y-auto">
        <div className="p-12">
          {/* Video Player */}
          <div className="absolute top-4 right-4 w-64 h-36 z-10">
            <VideoPlayer placeholder="external-ports-video.mp4" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">External Ports</h2>
            <p className="text-white/80 text-xl">Gateway to the Outside World</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Ports List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {ports.map((port) => (
              <div
                key={port.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Left: Icon & Info */}
                  <div className="flex flex-col justify-center">
                    <div className={`bg-gradient-to-br ${port.color} rounded-xl p-4 mb-4 inline-block shadow-lg w-fit`}>
                      <port.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-white text-2xl mb-2">{port.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{port.description}</p>
                    <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                      <p className="text-blue-300 text-xs mb-1 uppercase tracking-wide">💡 Pro Tip</p>
                      <p className="text-white text-sm">{port.note}</p>
                    </div>
                  </div>
                  
                  {/* Middle: Image Placeholder */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center min-h-[250px]">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">🖼️</div>
                      <p className="text-white/60 text-sm mb-2">Image Placeholder</p>
                      <p className="text-white/40 text-xs font-mono">{port.imagePlaceholder}</p>
                      <p className="text-white/50 text-xs mt-2">Replace with port image</p>
                    </div>
                  </div>
                  
                  {/* Right: Port Types */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white/90 text-lg mb-4 font-semibold">Port Types & Speeds:</h4>
                    <div className="space-y-3">
                      {port.types.map((type, tIndex) => (
                        <div key={tIndex} className="bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-all">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-white font-semibold text-sm">{type.name}</p>
                            <span className="bg-green-500/30 px-2 py-0.5 rounded text-green-300 text-xs whitespace-nowrap">
                              {type.speed}
                            </span>
                          </div>
                          <p className="text-white/70 text-xs">{type.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-green-400/30">
              <h3 className="text-white text-xl mb-3">🔌 Port Selection Guide</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white/90">
                    <span className="font-semibold text-blue-300">USB-C</span> is the future - handles data, video, and power in one cable
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white/90">
                    <span className="font-semibold text-purple-300">DisplayPort</span> beats HDMI for high refresh gaming (144Hz+)
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white/90">
                    <span className="font-semibold text-orange-300">Gigabit Ethernet</span> is still the standard - 2.5G for enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
