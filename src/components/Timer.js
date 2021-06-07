import { useTimer } from "react-timer-hook";

export const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,

    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer">
      <h4>Timer</h4>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          restart(expiryTimestamp);
        }}
      >
        Restart
      </button>
    </div>
  );
};
