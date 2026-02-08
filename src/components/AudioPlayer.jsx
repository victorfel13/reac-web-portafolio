import React, { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css";

function AudioPlayer({ title, artist, audioSrc, externalLink }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // progreso %
  const [duration, setDuration] = useState(0); // duración total en segundos

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Actualiza progreso
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  // Cuando carga metadata
  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  // Salta a cierta posición en la barra
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  // Formatea tiempo en mm:ss
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      <div className="audio-player__info">
        <div>
          <strong>{title}</strong> - {artist}
        </div>
        {externalLink && (
      <a
  href={externalLink}
  target="_blank"
  rel="noopener noreferrer"
  className="audio-player__spotify"
  onClick={() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
>
  ir a Spotify
</a>
        )}
      </div>

      <button className="audio-player__btn" onClick={togglePlay}>
        <span className={isPlaying ? "pause-icon" : "play-icon"}></span>
      </button>

      <div className="audio-player__timeline" onClick={handleSeek}>
        <div
          className="audio-player__progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <span className="audio-player__time">
        {formatTime(audioRef.current?.currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
}

export default AudioPlayer;
