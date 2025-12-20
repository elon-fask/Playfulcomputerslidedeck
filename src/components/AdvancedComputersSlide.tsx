import React from 'react';
import { Server, Zap, Atom } from 'lucide-react';

export function AdvancedComputersSlide() {
  const advancedTypes = [
    {
      name: 'Supercomputer',
      description: 'The FASTEST computer in the world!',
      details: 'Can do trillions of calculations per second. Used for weather prediction, space exploration, and scientific research!',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      emoji: '⚡',
      image: 'https://images.unsplash.com/photo-1672558767203-9ab92e0d28d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNvbXB1dGVyJTIwZGF0YWNlbnRlcnxlbnwxfHx8fDE3NjYyMjY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      funFact: 'As big as a whole room!'
    },
    {
      name: 'Server',
      description: 'The helper that stores websites and files!',
      details: 'Servers are like super helpers that store all the websites, videos, and apps you use. When you watch YouTube or play online games, you\'re connecting to a server!',
      icon: Server,
      color: 'from-blue-500 to-cyan-600',
      emoji: '🌐',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYxNTc1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      funFact: 'Works 24/7, never sleeps!'
    },
    {
      name: 'Quantum Computer',
      description: 'The FUTURE of computing!',
      details: 'Uses special physics magic called "quantum mechanics" to solve super hard problems that regular computers can\'t solve in our lifetime!',
      icon: Atom,
      color: 'from-purple-500 to-pink-600',
      emoji: '🔮',
      image: 'https://images.unsplash.com/photo-1681908571122-97f349e1ace0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzY2MjI2NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      funFact: 'Has to be super cold to work!'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-purple-600 to-pink-600 mb-4">
            Super Powerful Computers! 🚀
          </h2>
          <p className="text-2xl text-gray-600">
            These are the superheroes of the computer world!
          </p>
        </div>

        {/* Advanced Computer Types */}
        <div className="space-y-6">
          {advancedTypes.map((type, index) => (
            <div
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-purple-300 transition-all">
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 left-4 bg-gradient-to-br ${type.color} rounded-full p-3 shadow-lg`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl">
                      {type.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className={`inline-block bg-gradient-to-r ${type.color} text-white px-4 py-2 rounded-full mb-4 w-fit`}>
                      <h3 className="text-white">{type.name}</h3>
                    </div>
                    
                    <p className="text-2xl text-purple-600 mb-4">
                      {type.description}
                    </p>
                    
                    <p className="text-lg text-gray-700 mb-4">
                      {type.details}
                    </p>

                    <div className="bg-yellow-100 rounded-xl p-4 border-2 border-yellow-300">
                      <p className="text-gray-800">
                        <span className="text-xl">💡</span> <span className="font-semibold">Fun Fact:</span> {type.funFact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Box */}
        <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 text-center border-4 border-purple-200">
          <p className="text-2xl text-gray-700">
            🤯 <span className="text-purple-600">Mind-Blowing Fact:</span><br />
            A supercomputer can do in ONE SECOND what would take you<br />
            <span className="text-3xl text-pink-600">100 YEARS</span> to calculate! 
          </p>
        </div>
      </div>
    </div>
  );
}
