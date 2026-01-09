import React, { useState } from 'react';
import { Cable, HardDrive, Zap, Fan, Wifi } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function InternalConnectorsSlide() {
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null);

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
            <VideoPlayer placeholder="internal-connectors-video.mp4" />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Internal Connectors</h2>
            <p className="text-white/80 text-xl">The Nervous System of Your PC</p>
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
              <p className="text-white/70 text-center mt-4 text-sm">Color-coded paths show data and power flow</p>
            </div>
          </div>

          {/* Connectors Grid */}
          <div className="max-w-6xl mx-auto space-y-6 mb-8">
            {connectors.map((connector) => (
              <div key={connector.id} className="group">
                <div
                  onClick={() => setSelectedConnector(selectedConnector === connector.id ? null : connector.id)}
                  className={`bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 cursor-pointer ${selectedConnector === connector.id
                    ? 'bg-white/20 shadow-2xl'
                    : 'hover:bg-white/15'
                    }`}
                >
                  {/* Header */}
                  <div className="p-6 flex items-center gap-4">
                    <div className={`bg-gradient-to-br ${connector.color} rounded-xl p-4 shadow-lg`}>
                      <connector.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-2xl mb-1">{connector.name}</h3>
                      <p className="text-white/80">{connector.description}</p>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedConnector === connector.id && (
                    <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                      {/* Warning Note from Remote */}
                      <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-400/20 mb-4">
                        <p className="text-orange-300 text-xs mb-1 uppercase tracking-wide">⚠️ Important Note</p>
                        <p className="text-white/90 text-sm">{connector.note}</p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {connector.slots.map((slot, index) => (
                          <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all"
                          >
                            <h4 className="text-white font-semibold mb-1">{slot.type}</h4>
                            <p className="text-white/80 text-sm mb-2">{slot.usage}</p>
                            <p className="text-blue-200 text-xs">{slot.speed}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="bg-white/10 p-4 border-b border-white/20">
                <h3 className="text-white text-xl">Connector Specifications</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Connector</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Function</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Performance Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">PCIe x16</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">GPU installation</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Full bandwidth critical for gaming</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">SATA Data</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">SSD/HDD connection</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Max 550MB/s throughput</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">24-pin ATX</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Motherboard power</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">Essential for all operations</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">8-pin CPU</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">CPU power delivery</td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">System won't boot without it</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4">M.2 NVMe</td>
                      <td className="text-white/80 p-4 text-sm">High-speed SSD</td>
                      <td className="text-white/80 p-4 text-sm">PCIe 4.0: 7000MB/s possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pro Tip (From Remote) */}
          <div className="max-w-6xl mx-auto">
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
