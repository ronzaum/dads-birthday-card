import { useState, useCallback } from "react";
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

  const handleReplay = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen("landing");
      setQuestionIndex(0);
      setScore(0);
      setTransitioning(false);
    }, 400);
  }, []);

  const transition = useCallback((nextScreen) => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen(nextScreen);
      setTransitioning(false);
    }, 400);
  }, []);

  const handleAnswer = useCallback(
    (isCorrect) => {
      if (isCorrect) setScore((s) => s + 1);
      if (questionIndex < questions.length - 1) {
        /* Quick fade to next question — no interstitial */
        setTransitioning(true);
        setTimeout(() => {
          setQuestionIndex((i) => i + 1);
          setTransitioning(false);
        }, 400);
      } else {
        transition("result");
      }
    },
    [questionIndex, transition]
  );

  return (
    <div className="app-container">
      <RetroBackground />
      <div className={`screen-wrapper ${transitioning ? "fade-out" : "fade-in"}`}>
        {screen === "landing" && (
          <Landing onStart={() => transition("scan")} />
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
        {screen === "final" && <Final onReplay={handleReplay} />}
      </div>
    </div>
  );
}
