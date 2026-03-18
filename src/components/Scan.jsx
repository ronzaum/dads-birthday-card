import { useState, useEffect } from "react";
import { playLandingMusic, stopLandingMusic } from "../sounds";

const scanLines = [
  "Scanning memory database…",
  "Checking behavioural patterns…",
  "Cross-referencing family records…",
  "Loading identity module…",
  "Preparing verification…",
];

export default function Scan({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= scanLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  /* Play retro music during scan (AudioContext unlocked by START SCAN tap) */
  useEffect(() => {
    playLandingMusic();
    return () => stopLandingMusic();
  }, []);

  /* Wait for full video (8s) before advancing */
  useEffect(() => {
    const timeout = setTimeout(onComplete, 8000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="screen scan">
      <video
        className="scan-bg-video"
        src={`${import.meta.env.BASE_URL}transition.mp4`}
        autoPlay
        muted
        playsInline
      />
      <div className="scan-video-overlay" />

      <div className="scan-content">
        <div className="scan-icon">
          <div className="scan-pulse" />
        </div>

        <div className="scan-dots" aria-hidden="true">
          <span className="scan-dot" />
          <span className="scan-dot" />
          <span className="scan-dot" />
        </div>

        <div className="scan-lines">
          {scanLines.map((line, i) => (
            <p
              key={i}
              className={`scan-line ${i < visibleLines ? "visible" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
