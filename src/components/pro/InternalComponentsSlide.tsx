import React from 'react';
import { Cpu, MemoryStick, CircuitBoard, HardDrive, Zap, Wind, Monitor } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function InternalComponentsSlide() {
  const components = [
    {
      id: 'cpu',
      icon: Cpu,
      name: 'CPU (Central Processing Unit)',
      description: 'The brain of the computer that executes instructions and processes data at incredible speeds.',
      features: [
        'Architecture: x86 (Intel/AMD) vs. ARM',
        'Socket types: LGA (Intel), AM5 (AMD)',
        'Core count: 4-64+ cores for different workloads',
        'Clock speeds: 3.0GHz - 5.8GHz+'
      ],
      importance: 'Determines system compatibility and overall performance ceiling',
      imagePlaceholder: 'cpu-image.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ram',
      icon: MemoryStick,
      name: 'RAM (Random Access Memory)',
      description: 'Temporary high-speed memory that stores data the CPU is actively using.',
      features: [
        'Types: DDR3 (legacy), DDR4 (common), DDR5 (latest)',
        'Frequency: 2400MHz - 6000MHz+',
        'Capacity: 8GB - 128GB+ for consumer systems',
        'Dual/Quad channel configurations'
      ],
      importance: 'More RAM enables better multitasking and handles larger datasets',
      imagePlaceholder: 'ram-image.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'motherboard',
      icon: CircuitBoard,
      name: 'Motherboard',
      description: 'The main circuit board that connects all components and enables communication between them.',
      features: [
        'Chipset: Intel Z790, AMD B550, X670',
        'Form factors: ATX, Micro-ATX, Mini-ITX',
        'Expansion slots: PCIe, M.2, SATA',
        'Built-in features: Audio, Network, USB'
      ],
      importance: 'Dictates upgrade paths, compatibility, and available features',
      imagePlaceholder: 'motherboard-image.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'storage',
      icon: HardDrive,
      name: 'Storage Drive',
      description: 'Permanently stores your operating system, applications, and files.',
      features: [
        'HDD: 1-20TB, mechanical, slower (100-200MB/s)',
        'SATA SSD: 250GB-4TB, solid state (550MB/s)',
        'NVMe SSD: 250GB-4TB, PCIe interface (7000MB/s)',
        'Enterprise options: SAS, U.2, E1.S'
      ],
      importance: 'SSDs reduce boot times from minutes to seconds and improve responsiveness',
      imagePlaceholder: 'storage-image.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'gpu',
      icon: Monitor,
      name: 'Graphics Card (GPU)',
      description: 'Specialized processor for rendering graphics, video, and parallel computations.',
      features: [
        'Brands: NVIDIA (RTX 40 series), AMD (RX 7000)',
        'VRAM: 6GB - 24GB for gaming/professional work',
        'Ray tracing and AI acceleration',
        'Multiple display outputs'
      ],
      importance: 'Critical for gaming, 3D rendering, video editing, and AI workloads',
      imagePlaceholder: 'gpu-image.jpg',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'psu',
      icon: Zap,
      name: 'Power Supply Unit (PSU)',
      description: 'Converts AC power from the wall to stable DC power for computer components.',
      features: [
        'Wattage: 500W - 1600W+ for various builds',
        'Efficiency: 80 Plus Bronze/Gold/Platinum/Titanium',
        'Modular cables for cleaner builds',
        'Multiple rails for stable power delivery'
      ],
      importance: 'Poor quality PSUs can damage or destroy your entire system',
      imagePlaceholder: 'psu-image.jpg',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'cooling',
      icon: Wind,
      name: 'Cooling System',
      description: 'Dissipates heat from components to prevent thermal throttling and damage.',
      features: [
        'Air cooling: Tower coolers, case fans',
        'Liquid cooling: AIO (All-in-One), custom loops',
        'Thermal paste/pads for heat transfer',
        'PWM control for dynamic fan speeds'
      ],
      importance: 'Prevents overheating which causes throttling, crashes, or hardware failure',
      imagePlaceholder: 'cooling-image.jpg',
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
          {/* Video Player */}
          <div className="absolute top-4 right-4 w-64 h-36 z-10">
            <VideoPlayer placeholder="internal-components-video.mp4" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Main Internal Components</h2>
            <p className="text-white/80 text-xl">The Building Blocks of Your PC</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Components List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {components.map((component) => (
              <div
                key={component.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Left: Icon & Info */}
                  <div className="flex flex-col justify-center">
                    <div className={`bg-gradient-to-br ${component.color} rounded-xl p-4 mb-4 inline-block shadow-lg w-fit`}>
                      <component.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-white text-2xl mb-2">{component.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{component.description}</p>
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <p className="text-white/70 text-xs mb-1 uppercase tracking-wide">Why It Matters</p>
                      <p className="text-white text-sm">{component.importance}</p>
                    </div>
                  </div>
                  
                  {/* Middle: Image Placeholder */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center min-h-[250px]">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">🖼️</div>
                      <p className="text-white/60 text-sm mb-2">Image Placeholder</p>
                      <p className="text-white/40 text-xs font-mono">{component.imagePlaceholder}</p>
                      <p className="text-white/50 text-xs mt-2">Replace with actual component image</p>
                    </div>
                  </div>
                  
                  {/* Right: Features List */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white/90 text-lg mb-4 font-semibold">Key Specifications:</h4>
                    <ul className="space-y-3">
                      {component.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="bg-blue-500/30 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
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
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-green-400/30">
              <h3 className="text-white text-xl mb-3">💡 Pro Tip</h3>
              <p className="text-white/90">
                All components must work together harmoniously. A powerful GPU needs adequate CPU power, sufficient RAM, 
                fast storage, reliable PSU, and effective cooling to perform at its best. Balance is key!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
