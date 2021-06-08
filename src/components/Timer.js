import { useTimer } from "react-timer-hook";
import { useState } from "react";

export const Timer = ({
  inputHours = 0,
  inputMinutes = 0,
  inputSeconds = 0,
}) => {
  const [show, setShow] = useState(false);
  const [expired, setExpired] = useState(false);

  const expiryTimestamp = () => {
    const runTime =
      // inputHours ?? 0 * 3600 + inputMinutes ?? 0 * 60 + inputSeconds ?? 0;
      inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    const time = new Date();
    return time.setSeconds(time.getSeconds() + runTime);
  };

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expiryTimestamp(),
      onExpire: () => {
        console.warn("onExpire called");
        // play tune
        setShow(false);
        setExpired(true);
      },
    });

  return (
    <>
      <button
        onClick={() => {
          start();
          setShow(true);
        }}
        className="timer-start"
      >
        ⏲
      </button>
      {expired ? <span>Finished!</span> : <></>}
      {show ? (
        <div className="timer">
          <div>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? "Running" : "Not running"}</p>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button
            onClick={() => {
              restart(expiryTimestamp());
              setExpired(false);
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
