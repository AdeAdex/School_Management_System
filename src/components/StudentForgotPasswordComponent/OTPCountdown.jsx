import React, { useEffect, useState } from "react";

const OTPCountdown = ({startCountdown, onCountdownComplete }) => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
//   const [startCountdown, setStartCountdown] = useState(false);
  


  useEffect(() => {
    let countdownInterval;

    if (startCountdown) {
        
      countdownInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            // Countdown is complete, reset the state
            setMinutes(10);
            setSeconds(0);
            clearInterval(countdownInterval);
            onCountdownComplete();
          }
        }
      }, 1000);
    }


    return () => clearInterval(countdownInterval);
  }, [startCountdown, minutes, seconds, onCountdownComplete]);


//  

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
