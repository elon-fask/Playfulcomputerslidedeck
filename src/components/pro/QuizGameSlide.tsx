import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, Clock, Users, Lightbulb, Trophy, CheckCircle, XCircle, Brain } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function QuizGameSlide() {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(25);
  const [timerActive, setTimerActive] = useState(true);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showAskClass, setShowAskClass] = useState(false);

  const questions = [
    // Section 1: Cartes d'Extension
    {
      section: "Cartes d'Extension",
      question: "Which expansion card is essential for high-quality audio recording in a music studio?",
      options: {
        A: "Carte Réseau (Network Card)",
        B: "Carte Son (Sound Card)",
        C: "Carte Capture Vidéo (Video Capture Card)",
        D: "Carte Contrôleur RAID (RAID Controller)"
      },
      correct: "B",
      explanation: "A sound card processes audio signals with low latency, making it ideal for music production.",
      classVotes: { A: 10, B: 75, C: 10, D: 5 }
    },
    {
      section: "Cartes d'Extension",
      question: "What is the primary purpose of a RAID controller card?",
      options: {
        A: "To improve graphics performance.",
        B: "To manage multiple hard drives for redundancy or speed.",
        C: "To add extra USB ports.",
        D: "To connect wirelessly to Wi-Fi."
      },
      correct: "B",
      explanation: "RAID controllers combine multiple drives to either mirror data (redundancy) or stripe data (speed).",
      classVotes: { A: 5, B: 80, C: 10, D: 5 }
    },
    {
      section: "Cartes d'Extension",
      question: "Which of these cards would a streamer use to capture gameplay footage without lag?",
      options: {
        A: "Carte USB Additionnelle",
        B: "Carte Réseau",
        C: "Carte Capture Vidéo",
        D: "Carte Son"
      },
      correct: "C",
      explanation: "Capture cards are designed to record or stream video with minimal performance impact.",
      classVotes: { A: 5, B: 10, C: 70, D: 15 }
    },
    // Section 2: Composants Internes Principaux
    {
      section: "Composants Internes Principaux",
      question: "What does the 'socket' of a CPU refer to?",
      options: {
        A: "The physical connector on the motherboard where the CPU is installed.",
        B: "The speed at which the CPU operates.",
        C: "The brand of the CPU (Intel or AMD).",
        D: "The cooling system for the CPU."
      },
      correct: "A",
      explanation: "The socket ensures compatibility between the CPU and motherboard (e.g., LGA 1700 for Intel, AM5 for AMD).",
      classVotes: { A: 85, B: 5, C: 5, D: 5 }
    },
    {
      section: "Composants Internes Principaux",
      question: "Which type of RAM is the newest and fastest for modern systems?",
      options: {
        A: "DDR3",
        B: "DDR4",
        C: "DDR5",
        D: "SDRAM"
      },
      correct: "C",
      explanation: "DDR5 offers higher bandwidth and efficiency but requires a compatible motherboard.",
      classVotes: { A: 2, B: 20, C: 75, D: 3 }
    },
    {
      section: "Composants Internes Principaux",
      question: "Why might an NVMe SSD be preferable over a SATA SSD?",
      options: {
        A: "NVMe SSDs are cheaper.",
        B: "NVMe SSDs use PCIe lanes for speeds up to 7000MB/s.",
        C: "NVMe SSDs are only for laptops.",
        D: "SATA SSDs have more storage capacity."
      },
      correct: "B",
      explanation: "NVMe SSDs connect via PCIe, bypassing SATA's 600MB/s limit.",
      classVotes: { A: 5, B: 80, C: 5, D: 10 }
    },
    {
      section: "Composants Internes Principaux",
      question: "What is the purpose of VRAM in a graphics card?",
      options: {
        A: "To store temporary data for rendering images and videos.",
        B: "To cool the GPU.",
        C: "To connect to monitors.",
        D: "To power the GPU."
      },
      correct: "A",
      explanation: "VRAM (Video RAM) holds textures and frame buffers for smooth graphics performance.",
      classVotes: { A: 82, B: 8, C: 5, D: 5 }
    },
    {
      section: "Composants Internes Principaux",
      question: "What certification should you look for in a power supply (PSU) to ensure efficiency?",
      options: {
        A: "80 Plus",
        B: "USB-C",
        C: "Thunderbolt",
        D: "HDMI 2.1"
      },
      correct: "A",
      explanation: "80 Plus certification (Bronze/Gold/Platinum) indicates how efficiently the PSU converts power.",
      classVotes: { A: 88, B: 4, C: 4, D: 4 }
    },
    // Section 3: Ports et Connecteurs Internes
    {
      section: "Ports et Connecteurs Internes",
      question: "Which PCIe slot is typically used for a high-end graphics card?",
      options: {
        A: "x1",
        B: "x4",
        C: "x8",
        D: "x16"
      },
      correct: "D",
      explanation: "x16 slots provide the bandwidth needed for GPUs, though some systems use x8 for multi-GPU setups.",
      classVotes: { A: 2, B: 5, C: 13, D: 80 }
    },
    {
      section: "Ports et Connecteurs Internes",
      question: "What is the purpose of the 24-pin motherboard power connector?",
      options: {
        A: "To power the CPU.",
        B: "To provide power to the motherboard and its components.",
        C: "To connect SATA drives.",
        D: "To enable RGB lighting."
      },
      correct: "B",
      explanation: "Without the 24-pin connector, the motherboard won't receive power.",
      classVotes: { A: 15, B: 78, C: 4, D: 3 }
    },
    {
      section: "Ports et Connecteurs Internes",
      question: "Which connector is used to power a CPU directly?",
      options: {
        A: "SATA power",
        B: "8-pin CPU power",
        C: "24-pin motherboard power",
        D: "M.2 slot"
      },
      correct: "B",
      explanation: "High-end CPUs require an 8-pin (or 4+4 pin) connector for stable power delivery.",
      classVotes: { A: 5, B: 82, C: 10, D: 3 }
    },
    {
      section: "Ports et Connecteurs Internes",
      question: "What is the difference between a SATA M.2 SSD and an NVMe M.2 SSD?",
      options: {
        A: "SATA M.2 uses the SATA interface (slower), while NVMe uses PCIe (faster).",
        B: "SATA M.2 is only for laptops.",
        C: "NVMe M.2 is not compatible with most motherboards.",
        D: "They perform the same."
      },
      correct: "A",
      explanation: "NVMe M.2 SSDs can reach speeds of 3500MB/s+, while SATA M.2 maxes out at ~550MB/s.",
      classVotes: { A: 75, B: 10, C: 5, D: 10 }
    },
    // Section 4: Ports et Connecteurs Externes
    {
      section: "Ports et Connecteurs Externes",
      question: "Which USB type supports the fastest data transfer speeds?",
      options: {
        A: "USB 2.0 (Type-A)",
        B: "USB 3.0 (Type-A)",
        C: "USB 3.2 (Type-C)",
        D: "USB 1.1"
      },
      correct: "C",
      explanation: "USB 3.2 Type-C can reach 20Gbps, while older types max out at 5Gbps or 10Gbps.",
      classVotes: { A: 3, B: 15, C: 80, D: 2 }
    },
    {
      section: "Ports et Connecteurs Externes",
      question: "Which port is best for connecting a 4K monitor at 120Hz?",
      options: {
        A: "VGA",
        B: "HDMI 1.4",
        C: "DisplayPort 1.4",
        D: "DVI"
      },
      correct: "C",
      explanation: "DisplayPort 1.4 supports 8K@60Hz or 4K@120Hz, while HDMI 2.1 is a close second.",
      classVotes: { A: 2, B: 10, C: 83, D: 5 }
    },
    {
      section: "Ports et Connecteurs Externes",
      question: "What is the primary use of an RJ45 port?",
      options: {
        A: "Audio output",
        B: "Wired Ethernet connectivity",
        C: "Charging laptops",
        D: "Connecting external GPUs"
      },
      correct: "B",
      explanation: "RJ45 ports are for Ethernet cables, providing stable internet connections.",
      classVotes: { A: 3, B: 90, C: 4, D: 3 }
    }
  ];

  // Timer countdown
  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showExplanation && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showExplanation) {
      handleTimeUp();
    }
  }, [timeLeft, timerActive, showExplanation, quizComplete]);

  const handleTimeUp = () => {
    setTimerActive(false);
    setShowExplanation(true);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer || !timerActive) return;

    setSelectedAnswer(answer);
    setTimerActive(false);

    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setEliminatedOptions([]);
      setTimeLeft(15);
      setTimerActive(true);
      setShowAskClass(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUsedFiftyFifty(false);
    setEliminatedOptions([]);
    setTimeLeft(15);
    setTimerActive(true);
    setQuizComplete(false);
    setShowAskClass(false);
  };

  const useFiftyFifty = () => {
    if (usedFiftyFifty || showExplanation) return;

    const correctAnswer = questions[currentQuestion].correct;
    const allOptions = Object.keys(questions[currentQuestion].options);
    const wrongOptions = allOptions.filter(opt => opt !== correctAnswer);

    // Randomly eliminate 2 wrong options
    const toEliminate = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    setEliminatedOptions(toEliminate);
    setUsedFiftyFifty(true);
  };

  const toggleAskClass = () => {
    if (!showExplanation) {
      setShowAskClass(!showAskClass);
    }
  };

  const currentQ = questions[currentQuestion];
  const totalVotes = currentQ.classVotes ? Object.values(currentQ.classVotes).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${isTheaterMode ? 'fixed inset-4 z-50' : 'min-h-[600px]'
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
          {!quizComplete ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Brain className="w-12 h-12 text-white" />
                  <h2 className="text-white text-5xl">Quiz Game</h2>
                </div>
                <p className="text-white/80 text-xl">Test Your Knowledge!</p>
                <div className="h-1 w-24 bg-white/50 mx-auto mt-4 rounded-full" />
              </div>

              {/* Score & Progress Bar */}
              <div className="max-w-5xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <span className="text-white text-xl">Score: <span className="font-bold">{score}/{questions.length}</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className={`w-6 h-6 ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-white'}`} />
                      <span className={`text-xl font-mono ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
                        {timeLeft}s
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-white/70 text-sm text-center mt-2">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>
              </div>

              {/* Lifelines */}
              <div className="max-w-5xl mx-auto mb-6">
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={useFiftyFifty}
                    disabled={usedFiftyFifty || showExplanation}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all ${usedFiftyFifty || showExplanation
                        ? 'bg-gray-500/20 border-gray-400/30 opacity-50 cursor-not-allowed'
                        : 'bg-yellow-500/20 border-yellow-400/50 hover:bg-yellow-500/30 cursor-pointer'
                      }`}
                  >
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">50:50</span>
                  </button>

                  <button
                    onClick={toggleAskClass}
                    disabled={showExplanation}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all ${showExplanation
                        ? 'bg-gray-500/20 border-gray-400/30 opacity-50 cursor-not-allowed'
                        : showAskClass
                          ? 'bg-blue-500/30 border-blue-400/50'
                          : 'bg-blue-500/20 border-blue-400/50 hover:bg-blue-500/30 cursor-pointer'
                      }`}
                  >
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Ask the Class</span>
                  </button>
                </div>
              </div>

              {/* Question Card */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
                  {/* Section Badge */}
                  <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4 border-b border-white/20">
                    <p className="text-white/80 text-sm uppercase tracking-wide text-center">
                      {currentQ.section}
                    </p>
                  </div>

                  {/* Question */}
                  <div className="p-8">
                    <h3 className="text-white text-2xl mb-8 text-center">
                      {currentQ.question}
                    </h3>

                    {/* Ask the Class Results */}
                    {showAskClass && (
                      <div className="mb-6 bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-blue-400" />
                          <p className="text-white text-sm font-semibold">Class Poll Results:</p>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(currentQ.classVotes).map(([option, votes]) => (
                            <div key={option} className="flex items-center gap-3">
                              <span className="text-white/90 text-sm w-8">{option}:</span>
                              <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-blue-400 h-full rounded-full transition-all"
                                  style={{ width: `${(votes / totalVotes) * 100}%` }}
                                />
                              </div>
                              <span className="text-white/70 text-sm w-12 text-right">{votes}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Options */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(currentQ.options).map(([key, value]) => {
                        const isEliminated = eliminatedOptions.includes(key);
                        const isSelected = selectedAnswer === key;
                        const isCorrect = key === currentQ.correct;
                        const showFeedback = showExplanation;

                        return (
                          <button
                            key={key}
                            onClick={() => handleAnswer(key)}
                            disabled={isEliminated || showExplanation || !timerActive}
                            className={`p-5 rounded-xl text-left transition-all border-2 ${isEliminated
                                ? 'opacity-30 cursor-not-allowed bg-gray-500/20 border-gray-400/30'
                                : showFeedback && isCorrect
                                  ? 'bg-green-500/30 border-green-400 scale-105'
                                  : showFeedback && isSelected && !isCorrect
                                    ? 'bg-red-500/30 border-red-400'
                                    : showFeedback
                                      ? 'bg-white/5 border-white/20 opacity-50'
                                      : 'bg-white/10 border-white/30 hover:bg-white/20 hover:scale-105 cursor-pointer'
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${showFeedback && isCorrect
                                  ? 'bg-green-500 border-green-400 text-white'
                                  : showFeedback && isSelected && !isCorrect
                                    ? 'bg-red-500 border-red-400 text-white'
                                    : 'bg-white/20 border-white/40 text-white'
                                }`}>
                                {key}
                              </div>
                              <p className="text-white flex-1">{value}</p>
                              {showFeedback && isCorrect && (
                                <CheckCircle className="w-6 h-6 text-green-400" />
                              )}
                              {showFeedback && isSelected && !isCorrect && (
                                <XCircle className="w-6 h-6 text-red-400" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showExplanation && (
                      <div className={`mt-6 p-6 rounded-xl border-2 ${selectedAnswer === currentQ.correct
                          ? 'bg-green-500/20 border-green-400/50'
                          : 'bg-yellow-500/20 border-yellow-400/50'
                        }`}>
                        <div className="flex items-start gap-3 mb-3">
                          {selectedAnswer === currentQ.correct ? (
                            <>
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                              <p className="text-white text-xl font-semibold">Correct! Great job! 🎉</p>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                              <p className="text-white text-xl font-semibold">
                                {timeLeft === 0 ? 'Time\'s up! ⏰' : 'Not quite right. 💡'}
                              </p>
                            </>
                          )}
                        </div>
                        <p className="text-white/90 mb-4">{currentQ.explanation}</p>
                        <button
                          onClick={nextQuestion}
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:scale-105 transition-all"
                        >
                          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Quiz Complete */
            <div className="max-w-5xl mx-auto text-center">
              <div className="text-8xl mb-6">🎊</div>
              <h2 className="text-white text-5xl mb-4">Quiz Complete!</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 mb-8">
                <div className="text-7xl mb-6">
                  {score === questions.length ? '🌟' : score >= questions.length * 0.8 ? '⭐' : score >= questions.length * 0.6 ? '👍' : '📚'}
                </div>
                <p className="text-white text-4xl mb-4">
                  You scored <span className="font-bold text-green-400">{score}</span> out of <span className="font-bold">{questions.length}</span>
                </p>
                <p className="text-white/80 text-2xl mb-6">
                  {score === questions.length
                    ? 'Perfect score! You\'re a PC expert! 🏆'
                    : score >= questions.length * 0.8
                      ? 'Excellent work! You really know your stuff!'
                      : score >= questions.length * 0.6
                        ? 'Good job! Keep learning and you\'ll be an expert soon!'
                        : 'Nice try! Review the material and try again!'}
                </p>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p className="text-white/70 text-lg">
                    Percentage: <span className="text-white font-bold text-2xl">{Math.round((score / questions.length) * 100)}%</span>
                  </p>
                </div>
              </div>

              <button
                onClick={restartQuiz}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-xl hover:scale-105 transition-all shadow-lg"
              >
                Try Again! 🔄
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}