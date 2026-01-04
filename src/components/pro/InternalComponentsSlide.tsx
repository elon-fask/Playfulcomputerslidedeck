import React, { useState } from 'react';
import { Cpu, MemoryStick, CircuitBoard, HardDrive, Zap, Wind } from 'lucide-react';

export function InternalComponentsSlide() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  
  const components = [
    {
      id: 'cpu',
      icon: Cpu,
      name: 'CPU',
      fullName: 'Central Processing Unit',
      details: 'Architecture: x86 (Intel/AMD) vs. ARM',
      specs: 'Socket: LGA (Intel), AM5 (AMD)',
      importance: 'Determines compatibility and performance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ram',
      icon: MemoryStick,
      name: 'RAM',
      fullName: 'Random Access Memory',
      details: 'Types: DDR3 (old), DDR4 (common), DDR5 (cutting-edge)',
      specs: 'Frequency: 2400MHz–6000MHz+',
      importance: 'More RAM = better multitasking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'motherboard',
      icon: CircuitBoard,
      name: 'Carte Mère',
      fullName: 'Motherboard',
      details: 'Chipset: Intel Z790, AMD B550',
      specs: 'Format: ATX, Micro-ATX, Mini-ITX',
      importance: 'Dictates upgrade paths and compatibility',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'storage',
      icon: HardDrive,
      name: 'Disque Dur',
      fullName: 'Storage Drive',
      details: 'HDD vs. SSD: SSDs are 10x faster',
      specs: 'Interfaces: SATA (6Gb/s), NVMe (PCIe 4.0)',
      importance: 'SSDs reduce boot times from minutes to seconds',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'psu',
      icon: Zap,
      name: 'Alimentation',
      fullName: 'Power Supply Unit',
      details: 'Power: 500W–1000W',
      specs: 'Certification: 80 Plus (Bronze/Gold/Platinum)',
      importance: 'Poor PSUs can damage your entire system',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'cooling',
      icon: Wind,
      name: 'Refroidissement',
      fullName: 'Cooling System',
      details: 'Air: Fans (Noctua, Corsair)',
      specs: 'Liquid: AIO coolers (for overclocking)',
      importance: 'Overheating = throttling or shutdowns',
      color: 'from-cyan-500 to-blue-500'
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
            <h2 className="text-white text-5xl mb-4">Composants Internes Principaux</h2>
            <p className="text-white/80 text-xl">Main Internal Components</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* 3D Visual Reference */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1758159234965-9d259875cf35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3Njc1MTQ3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computer Components"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
          
          {/* Components Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {components.map((component) => (
              <div
                key={component.id}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
                className="group"
              >
                <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transition-all duration-300 h-full ${
                  hoveredComponent === component.id 
                    ? 'bg-white/20 scale-105 shadow-2xl' 
                    : 'hover:bg-white/15'
                }`}>
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${component.color} rounded-xl p-4 mb-4 inline-block shadow-lg`}>
                    <component.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-white text-2xl mb-1">{component.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{component.fullName}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <p className="text-white/90 text-sm">{component.details}</p>
                    <p className="text-white/80 text-xs">{component.specs}</p>
                  </div>
                  
                  {/* Importance */}
                  <div className={`bg-white/10 rounded-xl p-3 border border-white/20 transition-all ${
                    hoveredComponent === component.id ? 'bg-white/20' : ''
                  }`}>
                    <p className="text-white/70 text-xs mb-1 uppercase tracking-wide">Why It Matters</p>
                    <p className="text-white text-sm">{component.importance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Detailed Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="bg-white/10 p-4 border-b border-white/20">
                <h3 className="text-white text-xl">Technical Specifications Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Component</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Key Details</th>
                      <th className="text-left text-white/90 p-4 border-b border-white/10">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-blue-400" />
                          <span>CPU</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        x86 (Intel/AMD) | ARM | Socket compatibility critical
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        Foundation of system performance
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <MemoryStick className="w-5 h-5 text-purple-400" />
                          <span>RAM</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        DDR4 (3200MHz) vs DDR5 (4800MHz+) | 8GB–128GB+
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        Multitasking and application speed
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <CircuitBoard className="w-5 h-5 text-green-400" />
                          <span>Motherboard</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        Chipset determines features | ATX/mATX/ITX form factors
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        Upgrade paths and expandability
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-5 h-5 text-orange-400" />
                          <span>Storage</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        HDD (slow) | SATA SSD (550MB/s) | NVMe (7000MB/s)
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        Boot times and data transfer speeds
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          <span>PSU</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        500W–1000W | 80 Plus certification levels
                      </td>
                      <td className="text-white/80 p-4 border-b border-white/10 text-sm">
                        System stability and efficiency
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="text-white p-4">
                        <div className="flex items-center gap-2">
                          <Wind className="w-5 h-5 text-cyan-400" />
                          <span>Cooling</span>
                        </div>
                      </td>
                      <td className="text-white/80 p-4 text-sm">
                        Air (fans) vs Liquid (AIO) | Thermal management
                      </td>
                      <td className="text-white/80 p-4 text-sm">
                        Prevents thermal throttling
                      </td>
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
