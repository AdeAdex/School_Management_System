import React, { useEffect, useState } from "react";

const OTPCountdown = ({ startCountdown, onCountdownComplete }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  

  useEffect(() => {
    const OTPTime = parseInt(localStorage.getItem("OTPCountdownStartTime"));
    const OTPCountdownTime = parseInt(
      localStorage.getItem("OTPCountdownTimeRemaining")
    );

    if (startCountdown && OTPTime && OTPCountdownTime) {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - OTPTime) / 1000);
      const remainingTime = OTPCountdownTime - elapsedTime;

      setCountdownTime(remainingTime);

      if (remainingTime <= 0) {
        localStorage.setItem("ok", "false");
        setCountdownTime(0);
        // onCountdownComplete();
      } else {
        // Start the countdown
        const countdownInterval = setInterval(() => {
          setCountdownTime((prevTime) => Math.max(0, prevTime - 1));
        }, 1000);

        return () => {
          clearInterval(countdownInterval);
        };
      }
    }
  }, [startCountdown, ]);

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  return (
    <>
      <div>
        <div className="text-danger">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </>
  );
};

export default OTPCountdown;
