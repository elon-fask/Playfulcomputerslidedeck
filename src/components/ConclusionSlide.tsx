import React from 'react';
import { Gamepad2, Users, BookOpen, Sparkles, Heart } from 'lucide-react';

export function ConclusionSlide() {
  const benefits = [
    {
      title: 'Play Games!',
      icon: Gamepad2,
      color: 'from-red-500 to-orange-500',
      emoji: '🎮',
      description: 'Have fun with friends far away!'
    },
    {
      title: 'Talk to Friends!',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      emoji: '👫',
      description: 'Video call and chat anytime!'
    },
    {
      title: 'Learn New Things!',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      emoji: '📚',
      description: 'Code, draw, make music!'
    },
    {
      title: 'Create Amazing Stuff!',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      emoji: '✨',
      description: 'Stories, art, and more!'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🌟</div>
        <div className="absolute bottom-10 right-10 text-8xl">✨</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">💫</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Why Computers Are Cool! 🌟
          </h2>
          <p className="text-2xl text-gray-600">
            Computers help us do amazing things!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-purple-300 transition-all h-full">
                <div className={`bg-gradient-to-br ${benefit.color} rounded-xl p-4 mb-4 relative`}>
                  <benefit.icon className="w-10 h-10 text-white mx-auto" />
                  <div className="absolute -top-2 -right-2 text-3xl">{benefit.emoji}</div>
                </div>
                <p className="text-gray-800 mb-2 text-center">{benefit.title}</p>
                <p className="text-sm text-gray-600 text-center">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Message */}
        <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-2xl p-8 mb-8 border-4 border-purple-200">
          <div className="flex items-start gap-4">
            <Heart className="w-12 h-12 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-2xl text-gray-800 mb-3">
                But remember: Computers are <span className="text-purple-600">tools</span>, just like a paintbrush or a soccer ball! ⚽🎨
              </p>
              <p className="text-xl text-gray-700">
                The real magic? <span className="text-pink-600 text-2xl">YOU</span>—because YOU decide what to do with them!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-white mb-4">What Will YOU Do With a Computer?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🎨 Draw a masterpiece?',
              '🤖 Build a robot?',
              '📝 Write a story?',
              '🎵 Make music?',
              '🎮 Create a game?',
              '🌍 Explore the world?'
            ].map((idea, index) => (
              <div
                key={index}
                className="bg-white text-purple-600 px-4 py-2 rounded-full text-lg hover:scale-105 transition-transform"
              >
                {idea}
              </div>
            ))}
          </div>
        </div>

        {/* Celebration */}
        <div className="text-center mt-8">
          <p className="text-3xl">
            Give yourself a high-five! ✋ You're amazing! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}
