import React from 'react';
import { CheckCircle, TrendingUp, Award } from 'lucide-react';

export function ConclusionSlide() {
  const keyTakeaways = [
    {
      icon: '🔌',
      title: 'Expansion Cards Extend Functionality',
      description: 'Add specialized capabilities without replacing your entire system'
    },
    {
      icon: '⚙️',
      title: 'Component Compatibility is Critical',
      description: 'CPU socket, RAM type, PSU wattage, and form factors must all align'
    },
    {
      icon: '🔗',
      title: 'Connectors Enable the Ecosystem',
      description: 'Internal and external ports are the nervous system of your PC'
    },
    {
      icon: '💾',
      title: 'Storage Technology Has Evolved',
      description: 'NVMe SSDs offer transformative performance over HDDs and SATA'
    },
    {
      icon: '🛡️',
      title: 'Quality PSUs Prevent Disasters',
      description: 'Never cheap out on power supply - it protects your entire investment'
    },
    {
      icon: '🚀',
      title: 'Future-Proofing Saves Money',
      description: 'PCIe 4.0, DDR5, and sufficient PSU headroom extend system lifespan'
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
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-white text-5xl mb-4">Conclusion</h2>
            <p className="text-white/80 text-xl">Your Digital Infrastructure Toolkit</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Summary Banner */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-2xl mb-3">What We've Covered</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Today, we explored the building blocks of digital infrastructure - from expansion cards 
                    that add specialized capabilities, to internal components that power computation, to the 
                    connectors that tie everything together. Whether you're troubleshooting a server, building 
                    a gaming rig, or optimizing a workstation, these fundamentals are your toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Takeaways Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-white text-3xl mb-2">Key Takeaways</h3>
              <p className="text-white/70">Essential knowledge for modern computing</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyTakeaways.map((takeaway, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all"
                >
                  <div className="text-5xl mb-4">{takeaway.icon}</div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <h4 className="text-white text-lg">{takeaway.title}</h4>
                  </div>
                  <p className="text-white/80 text-sm">{takeaway.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Three Pillars */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-400/30">
              <h3 className="text-white text-2xl mb-6 text-center">The Three Pillars of PC Building</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-3 text-center">🎯</div>
                  <h4 className="text-white text-center mb-3">Compatibility</h4>
                  <p className="text-white/80 text-sm text-center">
                    Every component must work together. Check sockets, form factors, power requirements, and interface standards.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-3 text-center">⚖️</div>
                  <h4 className="text-white text-center mb-3">Balance</h4>
                  <p className="text-white/80 text-sm text-center">
                    Don't bottleneck. A powerful GPU needs adequate CPU, RAM, and storage to shine. Balance your build.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-3 text-center">🔮</div>
                  <h4 className="text-white text-center mb-3">Future-Proofing</h4>
                  <p className="text-white/80 text-sm text-center">
                    Invest in modern standards (DDR5, PCIe 4.0, sufficient PSU) to extend your system's useful life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-400/30">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl mb-3">Take Action: Experiment with Your Own Builds</h3>
                  <p className="text-white/90 mb-4">
                    Theory is important, but practice makes perfect. Use tools like PCPartPicker to design your ideal system. 
                    Watch build guides. Ask questions in communities like r/buildapc. The best way to learn is by doing.
                  </p>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 font-semibold">Start planning your next build today!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Message */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20">
                <p className="text-white text-2xl mb-2">
                  Thank You! 🙏
                </p>
                <p className="text-white/80 text-lg">
                  Now let's geek out in the Q&A! →
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-5 gap-4 opacity-50">
            {['💻', '🖥️', '⌨️', '🖱️', '🎮', '📱', '💾', '🔌', '⚡', '🌐'].map((emoji, index) => (
              <div key={index} className="text-4xl text-center">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
