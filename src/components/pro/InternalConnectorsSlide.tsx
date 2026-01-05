import React, { useState } from 'react';
import { Cable, HardDrive, Zap, Fan } from 'lucide-react';

export function InternalConnectorsSlide() {
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null);
  
  const connectors = [
    {
      id: 'pcie',
      name: 'PCI Express',
      icon: Cable,
      slots: [
        { type: 'x16', usage: 'GPU - Graphics cards', performance: 'Full bandwidth for high-performance GPUs' },
        { type: 'x4', usage: 'NVMe SSDs', performance: 'Fast storage with PCIe 4.0 support' },
        { type: 'x1', usage: 'Wi-Fi cards, Sound cards', performance: 'Low-bandwidth expansion cards' }
      ],
      note: 'A GPU in x16 vs. x8 loses ~5% performance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sata',
      name: 'SATA',
      icon: HardDrive,
      slots: [
        { type: 'Data', usage: 'Connects SSDs/HDDs', performance: 'SATA III: ~550MB/s max' },
        { type: 'Power', usage: 'Powers drives from PSU', performance: '15-pin connector, hot-swappable' }
      ],
      note: 'SATA SSDs are limited compared to NVMe',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'power',
      name: '24-pin / 8-pin',
      icon: Zap,
      slots: [
        { type: '24-pin', usage: 'Powers entire motherboard', performance: 'Main power delivery system' },
        { type: '8-pin CPU', usage: 'Dedicated CPU power', performance: 'Required for system boot' },
        { type: '6/8-pin GPU', usage: 'GPU auxiliary power', performance: 'High-end GPUs need multiple connectors' }
      ],
      note: 'Missing the 8-pin CPU? System won\'t boot',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'headers',
      name: 'Headers',
      icon: Fan,
      slots: [
        { type: 'USB 2.0/3.0', usage: 'Front panel USB ports', performance: 'Connects case USB to motherboard' },
        { type: 'Fan Headers', usage: 'Controls case/CPU fans', performance: 'PWM control for dynamic speeds' },
        { type: 'RGB', usage: 'LED lighting control', performance: 'Addressable RGB headers' }
      ],
      note: 'Misconnected fans = no cooling or noise issues',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'm2',
      name: 'M.2 Slots',
      icon: HardDrive,
      slots: [
        { type: 'SATA M.2', usage: 'SATA protocol SSDs', performance: 'Limited to ~550MB/s like SATA' },
        { type: 'NVMe M.2', usage: 'PCIe protocol SSDs', performance: 'PCIe 4.0: up to 7000MB/s!' }
      ],
      note: 'NVMe is ideal for OS drives - 13x faster than SATA',
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
            <h2 className="text-white text-5xl mb-4">Ports et Connecteurs Internes</h2>
            <p className="text-white/80 text-xl">Internal Connectors: The Nervous System</p>
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
          
          {/* Connectors */}
          <div className="max-w-6xl mx-auto space-y-6 mb-8">
            {connectors.map((connector) => (
              <div key={connector.id} className="group">
                <div 
                  onClick={() => setSelectedConnector(selectedConnector === connector.id ? null : connector.id)}
                  className={`bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 cursor-pointer ${
                    selectedConnector === connector.id 
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
                      <h3 className="text-white text-2xl">{connector.name}</h3>
                      <p className="text-white/70 text-sm mt-1">{connector.note}</p>
                    </div>
                    <div className="text-white/50 text-sm">
                      {selectedConnector === connector.id ? '▲ Collapse' : '▼ Expand'}
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {selectedConnector === connector.id && (
                    <div className="px-6 pb-6 space-y-3">
                      {connector.slots.map((slot, index) => (
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-1">{slot.type}</h4>
                              <p className="text-white/80 text-sm mb-2">{slot.usage}</p>
                              <p className="text-white/70 text-xs">{slot.performance}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
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
          
          {/* Pro Tip */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-yellow-500/30">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h4 className="text-white text-lg mb-2">Pro Tip: Check Your Motherboard Manual</h4>
                  <p className="text-white/80 text-sm">
                    PCIe lanes and M.2 slots often share bandwidth. Installing an M.2 drive might disable certain SATA ports or reduce PCIe slot speeds. Always consult your motherboard documentation for optimal configuration.
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
