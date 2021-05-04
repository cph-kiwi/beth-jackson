import { useState, useEffect } from "react";

export const Timer = ({ time }) => {
  const [startTime, setStartTime] = useState();
  const [timeElapsed, setTimeElapsed] = useState(0);

  const timeRemaining = Math.round(time - timeElapsed / 1000);

  useEffect(() => {
    if (startTime) {
      const timerId = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [startTime]);

  useEffect(() => {
    // when timeRemaining === 0 setSTartTime to undefined
    if (timeRemaining <= 0) {
      setStartTime(undefined);
    }
  }, [timeRemaining]);

  return (
    <div>
      <span>{timeRemaining}</span>
      <button onClick={() => setStartTime(Date.now())}>Start</button>
    </div>
  );
};

// if there is a startTime - clear before setStartTime
