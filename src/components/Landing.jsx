import { useState, useEffect } from "react";
import { playPress, playLandingMusic, stopLandingMusic } from "../sounds";

export default function Landing({ onStart }) {
  const [pressed, setPressed] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  /* Stop music when leaving the landing page */
  useEffect(() => {
    return () => stopLandingMusic();
  }, []);

  /* Start music on first tap anywhere on the page (iOS needs user gesture) */
  const handleTap = () => {
    if (!musicStarted) {
      playLandingMusic();
      setMusicStarted(true);
    }
  };

  return (
    <div className="screen landing" onTouchStart={handleTap} onClick={handleTap}>
      <img src={`${import.meta.env.BASE_URL}landing-bg.png`} alt="" className="landing-bg-img" aria-hidden="true" />
      <div className="landing-overlay" />

      {/* TOP: Title + chips */}
      <div className="landing-top">
        <div className="landing-decor-bar">
          <span className="decor-chip">SYS ONLINE</span>
          <span className="decor-chip">SEC LVL 5</span>
          <span className="decor-chip">ID REQ</span>
        </div>
        <h1 className="landing-title">DAN VERIFICATION SYSTEM</h1>
      </div>

      {/* BOTTOM: Subtitle, text, stats, button */}
      <div className="landing-bottom">
        <p className="landing-subtitle">Birthday anomaly detected.</p>
        <p className="landing-text">
          We must confirm that you are Dan before granting access to your next
          level.
        </p>

        <div className="landing-stats">
          <div className="stat-box">
            <span className="stat-label">THREAT</span>
            <span className="stat-value">CAKE</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">AGE</span>
            <span className="stat-value">LVL 60</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">STATUS</span>
            <span className="stat-value">LEGEND</span>
          </div>
        </div>

        <button
          className={`btn-primary btn-start ${pressed ? "btn-pressed" : ""}`}
          onTouchStart={() => setPressed(true)}
          onMouseDown={() => setPressed(true)}
          onTouchEnd={() => {
            setPressed(false);
            playPress();
            onStart();
          }}
          onMouseUp={() => {
            setPressed(false);
            playPress();
            onStart();
          }}
        >
          START SCAN
        </button>
      </div>
    </div>
  );
}
