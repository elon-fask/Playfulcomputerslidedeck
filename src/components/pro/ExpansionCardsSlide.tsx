import React from 'react';
import { Volume2, Wifi, Video, Database, Usb } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function ExpansionCardsSlide() {
  const cards = [
    {
      icon: Volume2,
      title: 'Sound Card',
      description: 'Processes audio signals with high fidelity. Essential for professional audio work and immersive gaming experiences.',
      useCase: 'Gaming, music production, studio recording',
      features: [
        'High-quality audio processing',
        'Low latency for real-time monitoring',
        'Multiple input/output channels',
        'Hardware acceleration for audio effects'
      ],
      imagePlaceholder: 'sound-card-image.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wifi,
      title: 'Network Card',
      description: 'Enables wired (Ethernet) or wireless (Wi-Fi) connectivity. Critical for networking and online operations.',
      useCase: 'Servers, online gaming, enterprise networking',
      features: [
        'Gigabit/Multi-gigabit Ethernet support',
        'Wi-Fi 6/6E wireless connectivity',
        'Advanced network protocols',
        'Wake-on-LAN capabilities'
      ],
      imagePlaceholder: 'network-card-image.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Capture Card',
      description: 'Captures and processes video/audio signals in real-time. Used extensively in streaming and content creation.',
      useCase: 'Twitch streaming, video editing, broadcasting',
      features: [
        'Real-time video capture',
        'HDMI/SDI input support',
        'Hardware encoding (H.264/HEVC)',
        'Passthrough mode for zero-latency gaming'
      ],
      imagePlaceholder: 'capture-card-image.jpg',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'RAID Controller',
      description: 'Manages multiple drives for enhanced performance (RAID 0) or data redundancy (RAID 1). Enterprise-grade reliability.',
      useCase: 'Data centers, NAS systems, critical storage',
      features: [
        'Multiple RAID levels (0, 1, 5, 6, 10)',
        'Hardware-based parity calculation',
        'Hot-swap drive support',
        'Battery backup for cache protection'
      ],
      imagePlaceholder: 'raid-controller-image.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Usb,
      title: 'USB Expansion Card',
      description: 'Adds extra USB ports (Type-A/C) to systems. Useful for devices with limited native port availability.',
      useCase: 'Connecting peripherals (keyboards, mice, external drives)',
      features: [
        'Multiple USB 3.2 ports',
        'USB Type-C with Power Delivery',
        'PCIe-based for maximum bandwidth',
        'Individual port power management'
      ],
      imagePlaceholder: 'usb-card-image.jpg',
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
            <VideoPlayer placeholder="expansion-cards-video.mp4" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Expansion Cards</h2>
            <p className="text-white/80 text-xl">Plug-and-Play System Upgrades</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Cards List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Left: Icon & Title */}
                  <div className="flex flex-col justify-center">
                    <div className={`bg-gradient-to-br ${card.color} rounded-xl p-4 mb-4 inline-block shadow-lg w-fit`}>
                      <card.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-white text-2xl mb-2">{card.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{card.description}</p>
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <p className="text-white/70 text-xs mb-1 uppercase tracking-wide">Use Case</p>
                      <p className="text-white text-sm">{card.useCase}</p>
                    </div>
                  </div>
                  
                  {/* Middle: Image Placeholder */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center min-h-[250px]">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">🖼️</div>
                      <p className="text-white/60 text-sm mb-2">Image Placeholder</p>
                      <p className="text-white/40 text-xs font-mono">{card.imagePlaceholder}</p>
                      <p className="text-white/50 text-xs mt-2">Replace with actual card image</p>
                    </div>
                  </div>
                  
                  {/* Right: Features List */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white/90 text-lg mb-4 font-semibold">Key Features:</h4>
                    <ul className="space-y-3">
                      {card.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="bg-green-500/30 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                          </div>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-blue-400/30">
              <h3 className="text-white text-xl mb-3">💡 Pro Tip</h3>
              <p className="text-white/90">
                Expansion cards slot into your motherboard's PCIe slots, extending its capabilities without replacing the entire system. 
                Always check PCIe lane compatibility and power requirements before purchasing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
