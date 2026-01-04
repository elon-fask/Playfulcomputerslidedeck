import React from 'react';
import { TrendingUp, Zap, Clock } from 'lucide-react';

export function CaseStudySlide() {
  const upgrade = {
    scenario: 'Upgrading a 5-year-old office PC for gaming',
    before: {
      components: [
        { name: 'Storage', spec: 'HDD 1TB (7200 RPM)', icon: '💾' },
        { name: 'RAM', spec: '8GB DDR3 (1600MHz)', icon: '🎯' },
        { name: 'GPU', spec: 'GTX 1050 (2GB VRAM)', icon: '🎮' },
        { name: 'CPU', spec: 'Intel i5-4460 (4C/4T)', icon: '🧠' }
      ],
      performance: {
        bootTime: '45 seconds',
        fps: '30 FPS @ 1080p Medium',
        loadTime: '120 seconds (AAA games)'
      }
    },
    after: {
      components: [
        { name: 'Storage', spec: 'NVMe SSD 500GB (Gen 3)', icon: '⚡' },
        { name: 'RAM', spec: '16GB DDR4 (3200MHz)', icon: '🚀' },
        { name: 'GPU', spec: 'RTX 3060 (12GB VRAM)', icon: '💪' },
        { name: 'CPU', spec: 'Intel i5-12400F (6C/12T)', icon: '🔥' }
      ],
      performance: {
        bootTime: '8 seconds',
        fps: '120 FPS @ 1080p Ultra',
        loadTime: '15 seconds (AAA games)'
      }
    },
    cost: '$800',
    results: [
      { metric: 'Boot Time', improvement: '82% faster', color: 'green' },
      { metric: 'Gaming FPS', improvement: '300% increase', color: 'purple' },
      { metric: 'Load Times', improvement: '87% reduction', color: 'blue' }
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
            <h2 className="text-white text-5xl mb-4">Étude de Cas</h2>
            <p className="text-white/80 text-xl">Case Study: Real-World Upgrade Impact</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Scenario */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="text-5xl">💼</div>
                <div>
                  <h3 className="text-white text-2xl mb-2">Scenario</h3>
                  <p className="text-white/90 text-lg">{upgrade.scenario}</p>
                  <div className="mt-4 bg-white/10 rounded-xl p-4 inline-block">
                    <p className="text-white/80 text-sm">Total Investment: <span className="text-green-400 font-semibold">{upgrade.cost}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Before & After Comparison */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-red-400/30 overflow-hidden">
                <div className="bg-red-500/20 p-6 border-b border-white/20">
                  <h3 className="text-white text-2xl flex items-center gap-2">
                    <span className="text-3xl">📉</span>
                    Before Upgrade
                  </h3>
                </div>
                
                <div className="p-6 space-y-4">
                  {upgrade.before.components.map((component, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{component.icon}</span>
                        <div>
                          <h4 className="text-white text-sm">{component.name}</h4>
                          <p className="text-white/70 text-xs">{component.spec}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="text-white/80 text-sm mb-3 uppercase tracking-wide">Performance Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white/60" />
                        <p className="text-white/80 text-sm">Boot: {upgrade.before.performance.bootTime}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-white/60" />
                        <p className="text-white/80 text-sm">Gaming: {upgrade.before.performance.fps}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-white/60" />
                        <p className="text-white/80 text-sm">Load: {upgrade.before.performance.loadTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* After */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-green-400/30 overflow-hidden relative">
                <div className="absolute -top-3 right-4 bg-green-500 px-4 py-1 rounded-full z-10">
                  <p className="text-white text-xs font-semibold">UPGRADED</p>
                </div>
                
                <div className="bg-green-500/20 p-6 border-b border-white/20">
                  <h3 className="text-white text-2xl flex items-center gap-2">
                    <span className="text-3xl">📈</span>
                    After Upgrade
                  </h3>
                </div>
                
                <div className="p-6 space-y-4">
                  {upgrade.after.components.map((component, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-green-400/30">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{component.icon}</span>
                        <div>
                          <h4 className="text-white text-sm">{component.name}</h4>
                          <p className="text-green-400 text-xs">{component.spec}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="text-white/80 text-sm mb-3 uppercase tracking-wide">Performance Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <p className="text-green-400 text-sm font-semibold">Boot: {upgrade.after.performance.bootTime}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-400" />
                        <p className="text-green-400 text-sm font-semibold">Gaming: {upgrade.after.performance.fps}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <p className="text-green-400 text-sm font-semibold">Load: {upgrade.after.performance.loadTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl mb-6 text-center">Measured Improvements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {upgrade.results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 text-center">
                    <div className={`text-5xl mb-3 ${
                      result.color === 'green' ? 'text-green-400' :
                      result.color === 'purple' ? 'text-purple-400' :
                      'text-blue-400'
                    }`}>
                      {result.improvement.includes('faster') ? '⬇️' : '⬆️'}
                    </div>
                    <h4 className="text-white text-lg mb-2">{result.metric}</h4>
                    <p className={`text-2xl font-bold ${
                      result.color === 'green' ? 'text-green-400' :
                      result.color === 'purple' ? 'text-purple-400' :
                      'text-blue-400'
                    }`}>
                      {result.improvement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Breakdown */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-blue-400/30">
              <h3 className="text-white text-2xl mb-6">Cost Breakdown & ROI</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-white/80 text-sm uppercase tracking-wide mb-3">Component Costs</h4>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span className="text-white/90">NVMe SSD 500GB</span>
                    <span className="text-white font-mono">$60</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span className="text-white/90">16GB DDR4 RAM</span>
                    <span className="text-white font-mono">$50</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span className="text-white/90">RTX 3060 GPU</span>
                    <span className="text-white font-mono">$350</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span className="text-white/90">i5-12400F CPU + Mobo</span>
                    <span className="text-white font-mono">$340</span>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 flex justify-between border border-green-400/30">
                    <span className="text-white font-semibold">Total Investment</span>
                    <span className="text-green-400 font-bold font-mono">$800</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-white/80 text-sm uppercase tracking-wide mb-4">Value Analysis</h4>
                  <div className="space-y-4">
                    <p className="text-white/90 text-sm">
                      ✓ Extends PC lifespan by <span className="text-green-400 font-semibold">4-5 years</span>
                    </p>
                    <p className="text-white/90 text-sm">
                      ✓ Handles modern games at <span className="text-purple-400 font-semibold">1080p Ultra settings</span>
                    </p>
                    <p className="text-white/90 text-sm">
                      ✓ Suitable for <span className="text-blue-400 font-semibold">content creation</span> (video editing, streaming)
                    </p>
                    <p className="text-white/90 text-sm">
                      ✓ Cost: <span className="text-yellow-400 font-semibold">60% less</span> than buying a new gaming PC
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-500/20 rounded-xl p-4 border border-yellow-400/30">
                <p className="text-white text-center">
                  <span className="text-2xl mr-2">💡</span>
                  <span className="font-semibold">Key Takeaway:</span> Strategic upgrades can transform an aging system for a fraction of the cost of a new build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
