import React, { useEffect, useState } from "react";

const OTPCountdown = ({ setIsCountdownActive }) => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
//   const [isCountdownActive, setIsCountdownActive] = useState(false);

//   const handleStartClick = () => {
//     setIsCountdownActive(true);
//   };

  useEffect(() => {
    let countdownInterval;

    if (isCountdownActive) {
      countdownInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            // Countdown is complete, reset the state
            setIsCountdownActive(false);
            setMinutes(10);
            setSeconds(0);
            clearInterval(countdownInterval);
          }
        }
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [isCountdownActive, minutes, seconds, setIsCountdownActive ]);

  return (
    <>
      <div>
        <div>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </>
  );
};

export default OTPCountdown;
