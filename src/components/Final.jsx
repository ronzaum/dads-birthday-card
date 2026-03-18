import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { playPress, playVictory } from "../sounds";

const dadJoke = "I'm not 61. I'm 21 with 40 years of experience.";

export default function Final({ onReplay }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2400),
      setTimeout(() => setPhase(2), 4200),
      setTimeout(() => setPhase(3), 6200),
      setTimeout(() => setPhase(4), 8200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase === 4) {
      playVictory();
      const fire = (opts) =>
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#FFAB00", "#fff", "#ff8c00", "#ffcc33"],
          ...opts,
        });
      fire({ angle: 60, origin: { x: 0.1 } });
      fire({ angle: 120, origin: { x: 0.9 } });
      setTimeout(() => fire({ angle: 90, origin: { x: 0.5, y: 0.7 } }), 400);
    }
  }, [phase]);

  return (
    <div className="screen final">
      {/* Video background for phases 0-3 */}
      {phase < 4 && (
        <>
          <video
            className="final-bg-video"
            src={`${import.meta.env.BASE_URL}identity-video.mp4`}
            autoPlay
            muted
            playsInline
          />
          <div className="final-video-overlay" />
        </>
      )}

      {/* Phase 0 — Processing animation */}
      {phase === 0 && (
        <div className="final-processing fade-in">
          <p className="final-processing-text">
            PROCESSING IDENTITY<span className="final-dots">...</span>
          </p>
          <div className="final-loader-track">
            <div className="final-loader-fill" />
          </div>
        </div>
      )}

      {/* Phase 1 — IDENTITY CONFIRMED */}
      {phase === 1 && (
        <h1 className="final-confirmed final-pop">IDENTITY CONFIRMED</h1>
      )}

      {/* Phase 2 — DAN — LVL 61 REACHED */}
      {phase === 2 && (
        <div className="final-unlock fade-in">
          <h2 className="final-dan-name">DAN</h2>
          <p className="final-lvl">LVL 61 REACHED</p>
          <p className="final-status">STATUS: LEGENDARY</p>
        </div>
      )}

      {/* Phase 3 — Love message */}
      {phase === 3 && (
        <div className="final-love-msg fade-in">
          <p className="final-love">Happy Birthday.</p>
          <p className="final-love">We love you.</p>
        </div>
      )}

      {/* Phase 4 — Full-screen image with text overlay */}
      {phase === 4 && (
        <div className="final-reveal fade-in">
          <img src={`${import.meta.env.BASE_URL}dan-retro.png`} alt="Dan" className="final-fullscreen-img" />
          <div className="final-overlay">
            <div className="final-overlay-top">
              <div className="final-orange-banner">IDENTITY CONFIRMED</div>
            </div>
            <div className="final-overlay-bottom">
              <p className="final-lvl final-lvl-hero">LVL 61 REACHED</p>
              <p className="final-love-big">You're the man!!</p>
              <p className="final-love-sm">Love you. Happy Birthday.</p>
              <div className="final-joke-banner">{dadJoke}</div>
              {onReplay && (
                <button className="btn-replay" onClick={() => { playPress(); onReplay(); }}>
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
