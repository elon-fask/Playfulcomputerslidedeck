import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  youtubeUrl?: string;
  placeholder?: string;
  startTime?: number;
  endTime?: number;
}

export function VideoPlayer({ 
  videoUrl = '', 
  youtubeUrl = '',
  placeholder = 'video-placeholder.mp4',
  startTime = 0,
  endTime
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = youtubeUrl ? getYouTubeId(youtubeUrl) : null;

  // Build YouTube embed URL with parameters
  const getYouTubeEmbedUrl = () => {
    if (!youtubeId) return '';
    
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: youtubeId, // Required for loop to work
      controls: '0',
      modestbranding: '1',
      rel: '0',
      start: startTime.toString(),
      ...(endTime && { end: endTime.toString() })
    });
    
    return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
  };

  useEffect(() => {
    if (youtubeId) return; // YouTube iframe handles its own playback
    
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
  }, [youtubeId]);

  const togglePlay = () => {
    if (youtubeId) return; // YouTube controls handled by iframe
    
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

  // Render YouTube iframe if YouTube URL is provided
  if (youtubeId) {
    return (
      <div className="relative rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={getYouTubeEmbedUrl()}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: 'none' }}
        />
        <div className="absolute top-2 left-2 bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <p className="text-white text-xs font-semibold">YouTube Video</p>
        </div>
      </div>
    );
  }

  // Render regular video player
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
