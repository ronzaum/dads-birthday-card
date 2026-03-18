import { useState } from "react";

export default function Landing({ onStart }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="screen landing">
      <img src="/landing-bg.png" alt="" className="landing-bg-img" aria-hidden="true" />
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
            onStart();
          }}
          onMouseUp={() => {
            setPressed(false);
            onStart();
          }}
        >
          START SCAN
        </button>
      </div>
    </div>
  );
}
