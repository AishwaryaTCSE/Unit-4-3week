import React from "react";
import useTimer from "../hooks/useTimer";

const TimerComponent = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏱ Reusable Timer Hook</h2>
      <h1>{timer} sec</h1>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={startTimer} style={{ marginRight: "10px" }}>
          Start
        </button>
        <button onClick={stopTimer} style={{ marginRight: "10px" }}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TimerComponent;
