import React, { useState } from 'react';
import { Volume2, Wifi, Video, Database, Usb } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function ExpansionCardsSlide() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Volume2,
      title: 'Sound Card',
      subtitle: 'Carte Son',
      description: 'Processes audio signals with high fidelity. Essential for professional audio work and immersive gaming experiences.',
      useCase: 'Gaming, music production, studio recording',
      features: [
        'High-quality audio processing',
        'Low latency for real-time monitoring',
        'Multiple input/output channels',
        'Hardware acceleration for audio effects'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wifi,
      title: 'Network Card',
      subtitle: 'Carte Réseau',
      description: 'Enables wired (Ethernet) or wireless (Wi-Fi) connectivity. Critical for networking and online operations.',
      useCase: 'Servers, online gaming, enterprise networking',
      features: [
        'Gigabit/Multi-gigabit Ethernet support',
        'Wi-Fi 6/6E wireless connectivity',
        'Advanced network protocols',
        'Wake-on-LAN capabilities'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Capture Card',
      subtitle: 'Carte Capture',
      description: 'Captures and processes video/audio signals in real-time. Used extensively in streaming and content creation.',
      useCase: 'Twitch streaming, video editing, broadcasting',
      features: [
        'Real-time video capture',
        'HDMI/SDI input support',
        'Hardware encoding (H.264/HEVC)',
        'Passthrough mode for zero-latency gaming'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'RAID Controller',
      subtitle: 'Carte RAID',
      description: 'Manages multiple drives for enhanced performance (RAID 0) or data redundancy (RAID 1). Enterprise-grade reliability.',
      useCase: 'Data centers, NAS systems, critical storage',
      features: [
        'Multiple RAID levels (0, 1, 5, 6, 10)',
        'Hardware-based parity calculation',
        'Hot-swap drive support',
        'Battery backup for cache protection'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Usb,
      title: 'USB Expansion',
      subtitle: 'Carte USB',
      description: 'Adds extra USB ports (Type-A/C) to systems. Useful for devices with limited native port availability.',
      useCase: 'Connecting peripherals (keyboards, mice, external drives)',
      features: [
        'Multiple USB 3.2 ports',
        'USB Type-C with Power Delivery',
        'PCIe-based for maximum bandwidth',
        'Individual port power management'
      ],
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
          <div className="absolute top-4 right-4 w-64 h-36 z-10 hidden lg:block">
            <VideoPlayer placeholder="expansion-cards-video.mp4" />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Cartes d'Extension</h2>
            <p className="text-white/80 text-xl">Expansion Cards: Plug-and-Play Upgrades</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>

          {/* Motherboard Diagram */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1742811631376-6e6a72f29181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXJib2FyZCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY3NTcwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Motherboard connectors"
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-white/70 text-center mt-4 text-sm">Plug-and-Play Upgrades</p>
            </div>
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

                  {/* Use Case & Features - Shown on selection */}
                  {selectedCard === index && (
                    <div className="animate-fadeIn space-y-4">
                      <div className="bg-white/10 rounded-xl p-4 border border-white/30">
                        <p className="text-white/70 text-xs mb-2 uppercase tracking-wide">Example Use Case</p>
                        <p className="text-white text-sm">{card.useCase}</p>
                      </div>

                      {/* Integrated Features from Remote */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-white/70 text-xs mb-2 uppercase tracking-wide">Key Features</p>
                        <ul className="space-y-1">
                          {card.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                              <span className="text-green-400 mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
          <div className="max-w-6xl mx-auto mb-8">
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

          {/* Pro Tip (From Remote) */}
          <div className="max-w-6xl mx-auto">
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
