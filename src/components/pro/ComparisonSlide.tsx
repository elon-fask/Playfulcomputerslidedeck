import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

export function ComparisonSlide() {
  const comparisons = [
    {
      category: 'Storage',
      optionA: {
        name: 'HDD (7200 RPM)',
        speed: '~150MB/s',
        pros: ['Large capacity', 'Affordable'],
        cons: ['Slow', 'Mechanical failure risk']
      },
      optionB: {
        name: 'NVMe SSD (PCIe 4.0)',
        speed: '~7000MB/s',
        pros: ['Extremely fast', 'No moving parts'],
        cons: ['More expensive per GB']
      },
      winner: 'NVMe (5x faster)',
      multiplier: 47
    },
    {
      category: 'RAM',
      optionA: {
        name: 'DDR4 (3200MHz)',
        speed: '25.6GB/s',
        pros: ['Mature', 'Affordable', 'Wide compatibility'],
        cons: ['Lower bandwidth']
      },
      optionB: {
        name: 'DDR5 (4800MHz)',
        speed: '38.4GB/s',
        pros: ['Higher bandwidth', 'Better efficiency'],
        cons: ['More expensive', 'Platform limited']
      },
      winner: 'DDR5 (but pricier)',
      multiplier: 1.5
    },
    {
      category: 'GPU Interface',
      optionA: {
        name: 'PCIe 3.0 x16',
        speed: '~16GB/s',
        pros: ['Wide compatibility', 'Sufficient for most GPUs'],
        cons: ['Bandwidth limited']
      },
      optionB: {
        name: 'PCIe 4.0 x16',
        speed: '~32GB/s',
        pros: ['Double bandwidth', 'Future-proof'],
        cons: ['Requires newer platform']
      },
      winner: 'PCIe 4.0 (2x bandwidth)',
      multiplier: 2
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
            <h2 className="text-white text-5xl mb-4">Comparaison des Technologies</h2>
            <p className="text-white/80 text-xl">Technology Comparison: Making Informed Decisions</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Comparisons */}
          <div className="max-w-6xl mx-auto space-y-8">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-2xl">{comparison.category}</h3>
                    <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">{comparison.winner}</span>
                    </div>
                  </div>
                </div>
                
                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Option A */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="mb-4">
                      <h4 className="text-white text-xl mb-2">{comparison.optionA.name}</h4>
                      <div className="bg-blue-500/20 px-3 py-1 rounded-full inline-block border border-blue-400/30">
                        <p className="text-blue-400 text-sm font-mono">{comparison.optionA.speed}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-green-400 text-sm mb-2">✓ Pros:</p>
                        <ul className="space-y-1">
                          {comparison.optionA.pros.map((pro, i) => (
                            <li key={i} className="text-white/80 text-sm">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-400 text-sm mb-2">✗ Cons:</p>
                        <ul className="space-y-1">
                          {comparison.optionA.cons.map((con, i) => (
                            <li key={i} className="text-white/80 text-sm">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Option B */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-green-400/50 relative">
                    <div className="absolute -top-3 right-4 bg-green-500 px-3 py-1 rounded-full">
                      <p className="text-white text-xs font-semibold">WINNER</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white text-xl mb-2">{comparison.optionB.name}</h4>
                      <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block border border-green-400/30">
                        <p className="text-green-400 text-sm font-mono">{comparison.optionB.speed}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-green-400 text-sm mb-2">✓ Pros:</p>
                        <ul className="space-y-1">
                          {comparison.optionB.pros.map((pro, i) => (
                            <li key={i} className="text-white/80 text-sm">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-400 text-sm mb-2">✗ Cons:</p>
                        <ul className="space-y-1">
                          {comparison.optionB.cons.map((con, i) => (
                            <li key={i} className="text-white/80 text-sm">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Performance Graph */}
                <div className="px-6 pb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-5 h-5 text-white/70" />
                      <p className="text-white/70 text-sm">Performance Comparison</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/80 text-xs">{comparison.optionA.name}</span>
                          <span className="text-white/60 text-xs">1x</span>
                        </div>
                        <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: `${100 / comparison.multiplier}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/80 text-xs">{comparison.optionB.name}</span>
                          <span className="text-green-400 text-xs">{comparison.multiplier}x</span>
                        </div>
                        <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-400/30">
              <h3 className="text-white text-2xl mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-white/90 text-sm">
                    <span className="text-green-400 font-semibold">NVMe SSDs</span> dominate for speed - worth the investment for OS and applications
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-white/90 text-sm">
                    <span className="text-purple-400 font-semibold">DDR5</span> is faster but DDR4 still offers excellent value for budget builds
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-white/90 text-sm">
                    <span className="text-blue-400 font-semibold">PCIe 4.0</span> is the sweet spot - PCIe 5.0 is overkill for most users
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
