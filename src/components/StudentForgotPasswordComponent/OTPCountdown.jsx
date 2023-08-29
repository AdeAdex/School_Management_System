import React, { useEffect, useState } from "react";

const OTPCountdown = ({ startCountdown, onCountdownComplete }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const [countdownExpired, setCountdownExpired] = useState(false);
  

  useEffect(() => {
    let countdownInterval;  
    const OTPTime = parseInt(localStorage.getItem("OTPCountdownStartTime"));
    const OTPCountdownTime = parseInt(
      localStorage.getItem("OTPCountdownTimeRemaining")
    );
    localStorage.getItem("ok") === "false"

    if (startCountdown && OTPTime && OTPCountdownTime) {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - OTPTime) / 1000);
      const remainingTime = OTPCountdownTime - elapsedTime;

      setCountdownTime(remainingTime);

      if (remainingTime <= 0) {
        setCountdownTime(0);
        clearInterval(countdownInterval);
        // localStorage.setItem("ok", "false")
      } else {
        const countdownInterval = setInterval(() => {
          setCountdownTime((prevTime) => Math.max(0, prevTime - 1));
        }, 1000);

        return () => {
          clearInterval(countdownInterval);
        };
      }
    }
  }, [startCountdown, localStorage.getItem("ok")
]);

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  return (
    <>
      <div>
        <div className="">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </>
  );
};

export default OTPCountdown;
