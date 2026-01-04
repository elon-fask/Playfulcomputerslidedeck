import React, { useState } from 'react';
import { Maximize2, Minimize2, BarChart3, HelpCircle } from 'lucide-react';

export function QASlide() {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [pollAnswer, setPollAnswer] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const pollOptions = [
    { id: 'gpu', label: 'GPU', votes: 45 },
    { id: 'ssd', label: 'SSD/NVMe', votes: 30 },
    { id: 'ram', label: 'RAM', votes: 15 },
    { id: 'cpu', label: 'CPU', votes: 10 }
  ];
  
  const totalVotes = pollOptions.reduce((sum, opt) => sum + opt.votes, 0);
  
  const handleVote = (optionId: string) => {
    if (!pollAnswer) {
      setPollAnswer(optionId);
      setShowResults(true);
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
      isTheaterMode ? 'fixed inset-4 z-50' : 'min-h-[600px]'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-purple-600 to-[#FF4500]" />
      
      {/* Theater Mode Toggle */}
      <button
        onClick={() => setIsTheaterMode(!isTheaterMode)}
        className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 border border-white/30 transition-all"
      >
        {isTheaterMode ? (
          <Minimize2 className="w-6 h-6 text-white" />
        ) : (
          <Maximize2 className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Content Container */}
      <div className="relative h-full min-h-[600px] overflow-y-auto">
        <div className="p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl mb-4">Questions & Answers</h2>
            <p className="text-white/80 text-xl">Let's Discuss Your PC Building Journey</p>
            <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
          </div>
          
          {/* Theater Mode Notice */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-400/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/30 rounded-full p-3">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-1">Theater Mode Available</h3>
                    <p className="text-white/80 text-sm">
                      Click the button in the top-right to expand this presentation to full screen for a detailed view
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live Poll */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-white" />
                  <h3 className="text-white text-2xl">Live Poll</h3>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-white text-xl mb-6 text-center">
                  Which component would you upgrade first in your PC?
                </h4>
                
                <div className="space-y-4">
                  {pollOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleVote(option.id)}
                      disabled={showResults}
                      className={`w-full text-left transition-all ${
                        showResults 
                          ? 'cursor-default' 
                          : 'hover:bg-white/20 cursor-pointer'
                      }`}
                    >
                      <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 overflow-hidden ${
                        pollAnswer === option.id 
                          ? 'border-green-400 bg-green-500/10' 
                          : 'border-white/20'
                      }`}>
                        {/* Vote bar background */}
                        {showResults && (
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                            style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                          />
                        )}
                        
                        {/* Content */}
                        <div className="relative flex items-center justify-between">
                          <span className="text-white text-lg">{option.label}</span>
                          {showResults && (
                            <div className="flex items-center gap-3">
                              <span className="text-white/80 text-sm">{option.votes} votes</span>
                              <span className="text-white font-semibold">
                                {Math.round((option.votes / totalVotes) * 100)}%
                              </span>
                            </div>
                          )}
                          {pollAnswer === option.id && (
                            <span className="text-green-400 ml-2">✓ Your vote</span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                {showResults && (
                  <div className="mt-6 text-center">
                    <p className="text-white/70 text-sm">Total votes: {totalVotes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Common Questions */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-7 h-7 text-white" />
                <h3 className="text-white text-2xl">Frequently Asked Questions</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="text-white text-lg mb-2">Q: Is DDR5 worth it over DDR4?</h4>
                  <p className="text-white/80 text-sm">
                    A: For gaming, DDR4 3200MHz is still excellent. DDR5 shows benefits in content creation, 
                    heavy multitasking, and future-proofing. If budget allows, go DDR5; otherwise, DDR4 is perfectly viable.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="text-white text-lg mb-2">Q: How much RAM do I actually need?</h4>
                  <p className="text-white/80 text-sm">
                    A: 16GB is the sweet spot for gaming and general use. 32GB for content creation, VM work, or heavy multitasking. 
                    8GB is minimal and limiting for modern workloads.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="text-white text-lg mb-2">Q: Should I get PCIe 4.0 or wait for 5.0?</h4>
                  <p className="text-white/80 text-sm">
                    A: PCIe 4.0 is the current sweet spot. PCIe 5.0 SSDs show minimal real-world improvement for gaming/general use, 
                    while being more expensive and running hotter. Stick with Gen 4.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="text-white text-lg mb-2">Q: What PSU wattage do I need?</h4>
                  <p className="text-white/80 text-sm">
                    A: Calculate your system's TDP and add 20-30% headroom. Mid-range gaming: 650-750W. High-end (RTX 4080/4090): 
                    850-1000W. Always choose 80 Plus Gold or better for efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resources */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-400/30">
              <h3 className="text-white text-2xl mb-6 text-center">Recommended Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/20 text-center">
                  <div className="text-4xl mb-3">🛠️</div>
                  <h4 className="text-white mb-2">PCPartPicker</h4>
                  <p className="text-white/70 text-sm">Build planning & compatibility checking</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/20 text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h4 className="text-white mb-2">Tom's Hardware</h4>
                  <p className="text-white/70 text-sm">In-depth reviews and guides</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/20 text-center">
                  <div className="text-4xl mb-3">🎥</div>
                  <h4 className="text-white mb-2">YouTube Channels</h4>
                  <p className="text-white/70 text-sm">Linus Tech Tips, GamersNexus, JayzTwoCents</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-white text-3xl mb-4">Ready to Build or Upgrade?</h3>
              <p className="text-white/80 text-xl mb-6">
                Apply what you've learned and create your perfect system!
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                  <p className="text-white">Thanks for attending! 👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
