import React from 'react';
import { Cable, HardDrive, Zap, Fan, Wifi } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function InternalConnectorsSlide() {
  const connectors = [
    {
      id: 'pcie',
      name: 'PCI Express (PCIe)',
      icon: Cable,
      description: 'High-speed expansion bus for connecting graphics cards, SSDs, and other expansion cards.',
      slots: [
        { type: 'PCIe x16', usage: 'Graphics cards (GPUs)', speed: '16-32GB/s depending on generation' },
        { type: 'PCIe x4', usage: 'NVMe SSDs, capture cards', speed: '4-8GB/s bandwidth' },
        { type: 'PCIe x1', usage: 'Wi-Fi cards, sound cards', speed: '1-2GB/s for low-bandwidth devices' }
      ],
      note: 'A GPU running in x16 vs x8 slot loses approximately 5% performance',
      imagePlaceholder: 'pcie-slots-image.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sata',
      name: 'SATA (Serial ATA)',
      icon: HardDrive,
      description: 'Standard interface for connecting storage drives (HDDs and SSDs) to the motherboard.',
      slots: [
        { type: 'SATA Data', usage: 'Connects SSDs/HDDs to motherboard', speed: 'SATA III: 6Gb/s (~550MB/s)' },
        { type: 'SATA Power', usage: 'Powers drives from PSU', speed: '15-pin connector, hot-swappable' },
        { type: 'SATA Express', usage: 'Legacy high-speed SATA', speed: 'Mostly replaced by M.2/NVMe' }
      ],
      note: 'SATA SSDs are limited to ~550MB/s, much slower than NVMe',
      imagePlaceholder: 'sata-connectors-image.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'power',
      name: 'Power Connectors',
      icon: Zap,
      description: 'Essential connectors that deliver power from the PSU to motherboard and components.',
      slots: [
        { type: '24-pin ATX', usage: 'Main motherboard power', speed: 'Powers chipset, RAM slots, PCIe slots' },
        { type: '8-pin CPU (EPS)', usage: 'Dedicated CPU power delivery', speed: 'Required for system boot, up to 384W' },
        { type: '6/8-pin PCIe', usage: 'GPU auxiliary power', speed: 'High-end GPUs need 2-3 connectors (450W+)' },
        { type: '4-pin Molex/SATA', usage: 'Peripheral power', speed: 'Drives, fans, RGB controllers' }
      ],
      note: 'Missing the 8-pin CPU connector? Your system won\'t POST',
      imagePlaceholder: 'power-connectors-image.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'headers',
      name: 'Headers & Pins',
      icon: Fan,
      description: 'Small connectors on the motherboard for fans, USB ports, and front panel controls.',
      slots: [
        { type: 'USB Headers', usage: 'Front panel USB 2.0/3.0/3.2 ports', speed: 'Internal 19/20-pin connectors' },
        { type: 'Fan Headers', usage: 'CPU/case fan control', speed: 'PWM (4-pin) or DC (3-pin) control' },
        { type: 'Front Panel', usage: 'Power button, LEDs, audio jacks', speed: 'Individual pin connections' },
        { type: 'RGB Headers', usage: 'LED lighting control', speed: '12V RGB or 5V ARGB' }
      ],
      note: 'Incorrectly connected fans can cause overheating or excessive noise',
      imagePlaceholder: 'headers-image.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'm2',
      name: 'M.2 Slots',
      icon: Wifi,
      description: 'Compact slots for high-speed NVMe SSDs and Wi-Fi cards.',
      slots: [
        { type: 'M.2 SATA (B-key)', usage: 'SATA protocol SSDs', speed: 'Limited to ~550MB/s like SATA' },
        { type: 'M.2 NVMe (M-key)', usage: 'PCIe protocol SSDs', speed: 'Gen 3: 3500MB/s, Gen 4: 7000MB/s' },
        { type: 'M.2 E-key', usage: 'Wi-Fi/Bluetooth cards', speed: 'PCIe x1 for wireless modules' }
      ],
      note: 'NVMe is ideal for OS drives - up to 13x faster than SATA',
      imagePlaceholder: 'm2-slots-image.jpg',
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
            <VideoPlayer placeholder="internal-connectors-video.mp4" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Internal Connectors</h2>
            <p className="text-white/80 text-xl">The Nervous System of Your PC</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Connectors List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {connectors.map((connector) => (
              <div
                key={connector.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Left: Icon & Info */}
                  <div className="flex flex-col justify-center">
                    <div className={`bg-gradient-to-br ${connector.color} rounded-xl p-4 mb-4 inline-block shadow-lg w-fit`}>
                      <connector.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-white text-2xl mb-2">{connector.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{connector.description}</p>
                    <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/30">
                      <p className="text-orange-300 text-xs mb-1 uppercase tracking-wide">⚠️ Important Note</p>
                      <p className="text-white text-sm">{connector.note}</p>
                    </div>
                  </div>
                  
                  {/* Middle: Image Placeholder */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center min-h-[250px]">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">🖼️</div>
                      <p className="text-white/60 text-sm mb-2">Image Placeholder</p>
                      <p className="text-white/40 text-xs font-mono">{connector.imagePlaceholder}</p>
                      <p className="text-white/50 text-xs mt-2">Replace with connector image</p>
                    </div>
                  </div>
                  
                  {/* Right: Connector Types */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white/90 text-lg mb-4 font-semibold">Connector Types:</h4>
                    <div className="space-y-3">
                      {connector.slots.map((slot, sIndex) => (
                        <div key={sIndex} className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-white font-semibold text-sm mb-1">{slot.type}</p>
                          <p className="text-white/70 text-xs mb-1">{slot.usage}</p>
                          <p className="text-blue-300 text-xs">{slot.speed}</p>
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
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-400/30">
              <h3 className="text-white text-xl mb-3">💡 Pro Tip</h3>
              <p className="text-white/90">
                PCIe lanes and M.2 slots often share bandwidth. Installing an M.2 drive might disable certain SATA ports 
                or reduce PCIe slot speeds. Always consult your motherboard manual for optimal configuration!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
