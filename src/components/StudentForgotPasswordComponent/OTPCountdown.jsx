import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountdownExpired } from "../../redux/portalSlice";

const OTPCountdown = ({ startCountdown }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const dispatch = useDispatch();
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    let countdownInterval;
    const OTPTime = parseInt(localStorage.getItem("OTPCountdownStartTime"));
    const OTPCountdownTime = parseInt(
      localStorage.getItem("OTPCountdownTimeRemaining")
    );

    if (startCountdown && OTPTime && OTPCountdownTime) {
      setCountdownActive(true);
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - OTPTime) / 1000);
      const remainingTime = OTPCountdownTime - elapsedTime;
      setCountdownTime(remainingTime);

      if (remainingTime <= 0) {
        localStorage.setItem("ok", "false");
        setCountdownTime(0);
        // dispatch(setCountdownExpired(true));
      } else {
        countdownInterval = setInterval(() => {
          setCountdownTime((prevTime) => {
            if (prevTime <= 0) {
              localStorage.setItem("ok", "false");
              clearInterval(countdownInterval);
              // dispatch(setCountdownExpired(true));
              return 0;
            }
            return Math.max(0, prevTime - 1);
          });
        }, 1000);

        return () => {
          clearInterval(countdownInterval);
        };
      }
    } else {
      setCountdownActive(false);
    }
  }, [startCountdown, dispatch]);

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  return (
    <div>
      <div>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default OTPCountdown;
