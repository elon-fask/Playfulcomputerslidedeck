import React, { useState } from 'react';
import { Volume2, Wifi, Video, Database, Usb } from 'lucide-react';

export function ExpansionCardsSlide() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Volume2,
      title: 'Sound Card',
      subtitle: 'Carte Son',
      description: 'Processes audio signals with high fidelity. Essential for professional audio work and immersive gaming experiences.',
      useCase: 'Gaming, music production, studio recording',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wifi,
      title: 'Network Card',
      subtitle: 'Carte Réseau',
      description: 'Enables wired (Ethernet) or wireless (Wi-Fi) connectivity. Critical for networking and online operations.',
      useCase: 'Servers, online gaming, enterprise networking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Carte Capture',
      subtitle: 'Capture Card',
      description: 'Captures and processes video/audio signals in real-time. Used extensively in streaming and content creation.',
      useCase: 'Twitch streaming, video editing, broadcasting',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Carte RAID',
      subtitle: 'RAID Controller',
      description: 'Manages multiple drives for enhanced performance (RAID 0) or data redundancy (RAID 1). Enterprise-grade reliability.',
      useCase: 'Data centers, NAS systems, critical storage',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Usb,
      title: 'Carte USB',
      subtitle: 'USB Expansion',
      description: 'Adds extra USB ports (Type-A/C) to systems. Useful for devices with limited native port availability.',
      useCase: 'Connecting peripherals (keyboards, mice, external drives)',
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
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Cartes d'Extension</h2>
            <p className="text-white/80 text-xl">Expansion Cards: Plug-and-Play Upgrades</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                className="group cursor-pointer"
              >
                <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transition-all duration-300 ${selectedCard === index
                    ? 'bg-white/20 scale-105 shadow-2xl'
                    : 'hover:bg-white/15 hover:scale-102'
                  }`}>
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${card.color} rounded-xl p-4 mb-4 inline-block shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl mb-1">{card.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{card.subtitle}</p>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4">
                    {card.description}
                  </p>

                  {/* Use Case - Shown on selection */}
                  {selectedCard === index && (
                    <div className="bg-white/10 rounded-xl p-4 mt-4 border border-white/30 animate-fadeIn">
                      <p className="text-white/70 text-xs mb-2 uppercase tracking-wide">Example Use Case</p>
                      <p className="text-white text-sm">{card.useCase}</p>
                    </div>
                  )}

                  {/* Click Indicator */}
                  <div className="text-white/50 text-xs mt-4">
                    {selectedCard === index ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="text-left text-white p-4 border-b border-white/20">Card Type</th>
                      <th className="text-left text-white p-4 border-b border-white/20">Key Features</th>
                      <th className="text-left text-white p-4 border-b border-white/20">Primary Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white/90 p-4 border-b border-white/10">Carte Son</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">High-quality audio processing, low latency</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Gaming, music production</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white/90 p-4 border-b border-white/10">Carte Réseau</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Ethernet/Wi-Fi, multi-gigabit speeds</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Servers, online gaming</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white/90 p-4 border-b border-white/10">Carte Capture</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Real-time video/audio capture, HDMI passthrough</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Streaming, recording</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white/90 p-4 border-b border-white/10">Carte RAID</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Multi-drive management, data redundancy</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Data centers, NAS</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white/90 p-4">Carte USB</td>
                      <td className="text-white/80 p-4 text-sm">Additional USB ports, Type-A/C support</td>
                      <td className="text-white/80 p-4 text-sm">Peripheral expansion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
