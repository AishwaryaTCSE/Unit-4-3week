import React, { useState, useRef } from "react";
interface TimerProps {}
const Timer: React.FC<TimerProps> = () => {
  const [time, setTime] = useState<number>(0); // elapsed time in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏱ Simple Timer</h2>
      <p style={{ fontSize: "2rem" }}>{time} sec</p>

      <button onClick={startTimer} disabled={isRunning} style={btnStyle}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning} style={btnStyle}>
        Stop
      </button>
      <button onClick={resetTimer} style={btnStyle}>
        Reset
      </button>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  margin: "5px",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

export default Timer;
