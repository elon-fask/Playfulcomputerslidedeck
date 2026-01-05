import React, { useState } from 'react';
import { Usb, Monitor, Headphones, Wifi, Zap } from 'lucide-react';

export function ExternalPortsSlide() {
  const [draggedCable, setDraggedCable] = useState<string | null>(null);
  const [connections, setConnections] = useState<Record<string, boolean>>({});
  
  const ports = [
    {
      id: 'usb',
      name: 'USB',
      icon: Usb,
      types: [
        { name: 'Type-A USB 3.0', speed: '5Gbps', use: 'Standard peripherals' },
        { name: 'Type-A USB 3.1', speed: '10Gbps', use: 'High-speed devices' },
        { name: 'Type-C USB 3.2', speed: '20Gbps', use: 'Modern devices' },
        { name: 'Thunderbolt 4', speed: '40Gbps', use: 'Professional workflows' }
      ],
      note: 'Type-C is reversible and supports power delivery',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'video',
      name: 'Vidéo',
      icon: Monitor,
      types: [
        { name: 'HDMI 2.1', speed: '48Gbps', use: '4K@120Hz, 8K@60Hz' },
        { name: 'DisplayPort 1.4', speed: '32.4Gbps', use: '8K@60Hz, 4K@144Hz' },
        { name: 'DisplayPort 2.0', speed: '80Gbps', use: '16K@60Hz (future)' },
        { name: 'VGA', speed: 'Analog', use: 'Legacy (avoid)' }
      ],
      note: 'DisplayPort is better for high refresh rate gaming',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'audio',
      name: 'Audio',
      icon: Headphones,
      types: [
        { name: '3.5mm Jack', speed: 'Analog', use: 'Headphones, speakers' },
        { name: 'SPDIF Optical', speed: 'Digital', use: 'Home theater systems' },
        { name: 'SPDIF Coaxial', speed: 'Digital', use: 'Professional audio' }
      ],
      note: 'SPDIF avoids electromagnetic interference',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'network',
      name: 'Réseau',
      icon: Wifi,
      types: [
        { name: 'RJ45 Gigabit', speed: '1Gbps', use: 'Standard networking' },
        { name: 'RJ45 2.5G', speed: '2.5Gbps', use: 'Fast home networks' },
        { name: 'RJ45 10G', speed: '10Gbps', use: 'Enterprise/datacenter' }
      ],
      note: '10Gbps is overkill for most home users',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'other',
      name: 'Autres',
      icon: Zap,
      types: [
        { name: 'Thunderbolt 4', speed: '40Gbps', use: 'Docking stations, eGPUs' },
        { name: 'eSATA', speed: '6Gbps', use: 'External HDDs (legacy)' },
        { name: 'PS/2', speed: 'Legacy', use: 'Old keyboards/mice' }
      ],
      note: 'Thunderbolt can daisy-chain up to 6 devices',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const cables = [
    { id: 'usb-c', name: 'USB-C Cable', correctPort: 'usb' },
    { id: 'hdmi', name: 'HDMI Cable', correctPort: 'video' },
    { id: 'ethernet', name: 'Ethernet Cable', correctPort: 'network' }
  ];

  const handleDragStart = (cableId: string) => {
    setDraggedCable(cableId);
  };

  const handleDrop = (portId: string) => {
    if (draggedCable) {
      const cable = cables.find(c => c.id === draggedCable);
      if (cable && cable.correctPort === portId) {
        setConnections({ ...connections, [draggedCable]: true });
      }
    }
    setDraggedCable(null);
  };

  return (
    <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-purple-600 to-[#FF4500]" />
      
      {/* Content Container */}
      <div className="relative h-full min-h-[600px] overflow-y-auto">
        <div className="p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Ports et Connecteurs Externes</h2>
            <p className="text-white/80 text-xl">External Ports: Gateway to the World</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* PC Back Panel Visual */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1716105728413-a149f81aab87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHBvcnRzJTIwY29ubmVjdG9yc3xlbnwxfHx8fDE3Njc1NzA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="PC Back Panel Ports"
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-white/70 text-center mt-4 text-sm">Back panel of a typical PC case showing various external ports</p>
            </div>
          </div>
          
          {/* Interactive Cable Connection Game */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl mb-6 text-center">Interactive: Match the Cable to the Port</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Cables */}
                <div className="space-y-4">
                  <h4 className="text-white/80 text-lg mb-4">Drag These Cables:</h4>
                  {cables.map(cable => (
                    <div
                      key={cable.id}
                      draggable={!connections[cable.id]}
                      onDragStart={() => handleDragStart(cable.id)}
                      className={`p-4 rounded-xl border-2 border-dashed transition-all ${
                        connections[cable.id]
                          ? 'bg-green-500/20 border-green-400 opacity-50'
                          : 'bg-white/10 border-white/30 hover:bg-white/20 cursor-move'
                      }`}
                    >
                      <p className="text-white">
                        {cable.name}
                        {connections[cable.id] && ' ✓'}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Drop Zones */}
                <div className="space-y-4">
                  <h4 className="text-white/80 text-lg mb-4">To These Port Types:</h4>
                  {ports.slice(0, 3).map(port => (
                    <div
                      key={port.id}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDrop(port.id)}
                      className="p-4 rounded-xl border-2 border-dashed bg-white/5 border-white/30 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <port.icon className="w-6 h-6 text-white" />
                        <p className="text-white">{port.name} Port</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Port Details */}
          <div className="max-w-6xl mx-auto space-y-6 mb-8">
            {ports.map((port) => (
              <div key={port.id} className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                {/* Header */}
                <div className="p-6 flex items-center gap-4 border-b border-white/10">
                  <div className={`bg-gradient-to-br ${port.color} rounded-xl p-4 shadow-lg`}>
                    <port.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl">{port.name}</h3>
                    <p className="text-white/70 text-sm mt-1">{port.note}</p>
                  </div>
                </div>
                
                {/* Port Types Grid */}
                <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {port.types.map((type, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all"
                    >
                      <h4 className="text-white font-semibold mb-2 text-sm">{type.name}</h4>
                      <div className="space-y-1">
                        <p className="text-white/80 text-xs">
                          <span className="text-white/60">Speed:</span> {type.speed}
                        </p>
                        <p className="text-white/80 text-xs">
                          <span className="text-white/60">Use:</span> {type.use}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="bg-white/10 p-4 border-b border-white/20">
                <h3 className="text-white text-xl">Port Speed Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Port Type</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Max Speed</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">Thunderbolt 4</td>
                      <td className="text-white/80 p-4 border-b border-white/10">40Gbps</td>
                      <td className="text-white/80 p-4 border-b border-white/10">Professional workflows, eGPUs</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">USB-C 3.2</td>
                      <td className="text-white/80 p-4 border-b border-white/10">20Gbps</td>
                      <td className="text-white/80 p-4 border-b border-white/10">Modern peripherals, fast transfers</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">DisplayPort 1.4</td>
                      <td className="text-white/80 p-4 border-b border-white/10">32.4Gbps</td>
                      <td className="text-white/80 p-4 border-b border-white/10">High refresh rate gaming</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">HDMI 2.1</td>
                      <td className="text-white/80 p-4 border-b border-white/10">48Gbps</td>
                      <td className="text-white/80 p-4 border-b border-white/10">4K@120Hz gaming, 8K displays</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4">10G Ethernet</td>
                      <td className="text-white/80 p-4">10Gbps</td>
                      <td className="text-white/80 p-4">Enterprise networking</td>
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
