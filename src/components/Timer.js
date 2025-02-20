import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft, setTimeLeft]);

  return <p className="timer">Time Left: {timeLeft}s</p>;
};

export default Timer;
