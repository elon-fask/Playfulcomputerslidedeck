import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  placeholder?: string;
}

export function VideoPlayer({ videoUrl = '', placeholder = 'video-placeholder.mp4' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Small delay before attempting to play to ensure element is mounted
    const playTimer = setTimeout(() => {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // Auto-play was prevented or interrupted - this is fine
            console.log('Video autoplay prevented:', error.name);
            setIsPlaying(false);
          });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(playTimer);
      if (video) {
        video.pause();
        setIsPlaying(false);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log('Play was prevented:', error.name);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      >
        <source src={videoUrl || placeholder} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Overlay */}
      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
        showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white" />
          )}
        </div>
      </div>
      
      {/* Placeholder Notice */}
      {!videoUrl && (
        <div className="absolute top-2 left-2 bg-yellow-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <p className="text-white text-xs font-semibold">Replace with your video</p>
        </div>
      )}
    </div>
  );
}
