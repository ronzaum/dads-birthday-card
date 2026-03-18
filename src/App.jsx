import { useState, useCallback, useRef } from "react";
import Landing from "./components/Landing";
import Scan from "./components/Scan";
import Question from "./components/Question";
import Result from "./components/Result";
import Final from "./components/Final";
import RetroBackground from "./components/RetroBackground";
import questions from "./data/questions";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  /*
   * Persistent video refs — these live at the App level so we can call
   * .play() synchronously in click handlers (iOS requires this for sound).
   * The 400ms transition setTimeout breaks the user gesture chain,
   * so videos must start playing BEFORE the timeout.
   */
  const scanVideoRef = useRef(null);
  const finalVideoRef = useRef(null);

  /* Track whether final video should be visible (phases 0-3) */
  const [showFinalVideo, setShowFinalVideo] = useState(false);

  const transition = useCallback((nextScreen) => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen(nextScreen);
      setTransitioning(false);
    }, 400);
  }, []);

  /*
   * START SCAN handler — plays scan video synchronously in the tap context
   * (before setTimeout), so iOS allows sound playback.
   */
  const handleStart = useCallback(() => {
    const vid = scanVideoRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.play();
    }
    transition("scan");
  }, [transition]);

  /*
   * Answer handler — on the LAST question, plays final video synchronously
   * in the tap context so iOS allows sound. The video plays hidden during
   * the result screen, then becomes visible on the final screen.
   */
  const handleAnswer = useCallback(
    (isCorrect) => {
      if (isCorrect) setScore((s) => s + 1);
      if (questionIndex < questions.length - 1) {
        setTransitioning(true);
        setTimeout(() => {
          setQuestionIndex((i) => i + 1);
          setTransitioning(false);
        }, 400);
      } else {
        /* Last question — start final video NOW (user gesture context) */
        const vid = finalVideoRef.current;
        if (vid) {
          vid.currentTime = 0;
          vid.play();
        }
        setShowFinalVideo(true);
        transition("result");
      }
    },
    [questionIndex, transition]
  );

  const handleReplay = useCallback(() => {
    setShowFinalVideo(false);
    setTransitioning(true);
    setTimeout(() => {
      setScreen("landing");
      setQuestionIndex(0);
      setScore(0);
      setTransitioning(false);
    }, 400);
  }, []);

  /* Hide final video when leaving the final screen */
  const handleFinalPhaseChange = useCallback((phase) => {
    if (phase >= 4) {
      setShowFinalVideo(false);
    }
  }, []);

  /* Determine which persistent video is visible */
  const scanVideoVisible = screen === "scan";
  const finalVideoVisible = showFinalVideo && (screen === "result" || screen === "final");

  return (
    <div className="app-container">
      <RetroBackground />

      {/*
       * Persistent video elements — always in DOM so .play() can be called
       * synchronously from click handlers. Visibility toggled via CSS.
       */}
      <video
        ref={scanVideoRef}
        className="persistent-video"
        src={`${import.meta.env.BASE_URL}transition.mp4`}
        playsInline
        style={{ opacity: scanVideoVisible ? 1 : 0, zIndex: scanVideoVisible ? 2 : -1 }}
      />
      <video
        ref={finalVideoRef}
        className="persistent-video"
        src={`${import.meta.env.BASE_URL}identity-video.mp4`}
        playsInline
        style={{ opacity: finalVideoVisible ? 1 : 0, zIndex: finalVideoVisible ? 2 : -1 }}
      />

      <div className={`screen-wrapper ${transitioning ? "fade-out" : "fade-in"}`}>
        {screen === "landing" && (
          <Landing onStart={handleStart} />
        )}
        {screen === "scan" && (
          <Scan onComplete={() => transition("questions")} />
        )}
        {screen === "questions" && (
          <Question key={questionIndex} index={questionIndex} onAnswer={handleAnswer} />
        )}
        {screen === "result" && (
          <Result
            score={score}
            total={questions.length}
            onComplete={() => transition("final")}
          />
        )}
        {screen === "final" && (
          <Final onReplay={handleReplay} onPhaseChange={handleFinalPhaseChange} />
        )}
      </div>
    </div>
  );
}
