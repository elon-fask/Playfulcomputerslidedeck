import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export function PracticalTipsSlide() {
  const tips = {
    dos: [
      {
        title: 'Use NVMe for OS and HDDs for bulk storage',
        description: 'Install your operating system and applications on an NVMe SSD for blazing-fast boot times and app launches. Use traditional HDDs for large media files and backups where speed matters less.',
        icon: '💾'
      },
      {
        title: 'Check PSU wattage before upgrading',
        description: 'High-end GPUs like the RTX 4090 need 850W+ PSUs. Always calculate your system\'s total power draw and add 20% headroom for stability and efficiency.',
        icon: '⚡'
      },
      {
        title: 'Cable manage for airflow',
        description: 'Proper cable management isn\'t just aesthetic - it improves airflow, reduces dust buildup, and makes troubleshooting easier. Hot air = thermal throttling.',
        icon: '🌬️'
      },
      {
        title: 'Enable XMP/DOCP for RAM',
        description: 'Your RAM runs at base speeds by default. Enable XMP (Intel) or DOCP (AMD) in BIOS to unlock its advertised speed and get the performance you paid for.',
        icon: '🚀'
      },
      {
        title: 'Keep BIOS updated',
        description: 'BIOS updates fix compatibility issues, improve stability, and sometimes add support for newer CPUs. Check your motherboard manufacturer\'s website regularly.',
        icon: '🔄'
      }
    ],
    donts: [
      {
        title: 'Don\'t mix DDR4 and DDR5',
        description: 'DDR4 and DDR5 are physically incompatible - they have different notch positions and pin counts. Motherboards support one or the other, never both.',
        icon: '❌'
      },
      {
        title: 'Don\'t ignore BIOS updates',
        description: 'Skipping BIOS updates can leave you vulnerable to security flaws and prevent you from using newer components. Always read the changelog first.',
        icon: '⚠️'
      },
      {
        title: 'Don\'t cheap out on the PSU',
        description: 'A failing PSU can damage or destroy your entire system. Invest in a quality unit with 80 Plus certification (Gold or Platinum recommended).',
        icon: '💰'
      },
      {
        title: 'Don\'t block air vents',
        description: 'Placing your PC against a wall or on carpet can block intake/exhaust vents. Ensure at least 6 inches of clearance on all sides for proper airflow.',
        icon: '🚫'
      }
    ]
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
            <h2 className="text-white text-5xl mb-4">Conseils Pratiques</h2>
            <p className="text-white/80 text-xl">Practical Tips: Building & Maintaining Your System</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Analogy Banner */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-yellow-400/30">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏎️</div>
                <div>
                  <h3 className="text-white text-2xl mb-3">Think of Your PC Like a Race Car</h3>
                  <p className="text-white/90 text-lg">
                    Regular maintenance keeps it running smooth. Quality parts prevent catastrophic failures. 
                    Proper cooling prevents overheating. And just like a race car, cutting corners on critical components 
                    can lead to expensive problems down the road.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Do's Section */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-white text-3xl">Best Practices</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {tips.dos.map((tip, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-green-400/30 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{tip.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white text-lg mb-2 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        {tip.title}
                      </h4>
                      <p className="text-white/80 text-sm">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Don'ts Section */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-white text-3xl">Common Pitfalls to Avoid</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {tips.donts.map((tip, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-red-400/30 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{tip.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white text-lg mb-2 flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                        {tip.title}
                      </h4>
                      <p className="text-white/80 text-sm">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Troubleshooting Quick Guide */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-orange-400" />
                  <h3 className="text-white text-2xl">Quick Troubleshooting Guide</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500/20 rounded-lg p-2">
                        <span className="text-2xl">🔇</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-1">PC won't boot / No POST beep</h4>
                        <p className="text-white/70 text-sm">Check: PSU connections (24-pin + 8-pin CPU), RAM seated properly, GPU power cables</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500/20 rounded-lg p-2">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-1">System overheating / Thermal throttling</h4>
                        <p className="text-white/70 text-sm">Check: CPU cooler mounted correctly, thermal paste applied, case fans working, air vents clear</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500/20 rounded-lg p-2">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-1">Random shutdowns / Blue screens</h4>
                        <p className="text-white/70 text-sm">Check: PSU wattage sufficient, RAM tested with memtest, GPU drivers updated, temperatures normal</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 rounded-lg p-2">
                        <span className="text-2xl">🐌</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-1">Slow performance / System lag</h4>
                        <p className="text-white/70 text-sm">Check: SSD not full (leave 20% free), RAM usage, background processes, XMP enabled in BIOS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
