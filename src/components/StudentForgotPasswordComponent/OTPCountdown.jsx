// import React, { useEffect, useState } from "react";
// import { setCountdownExpired } from "../../redux/portalSlice";
// import { useDispatch } from "react-redux";

// const OTPCountdown = ({ startCountdown, onCountdownComplete }) => {
//   const [countdownTime, setCountdownTime] = useState(0);
//   const dispatch = useDispatch();
//   // const [countdownExpired, setCountdownExpired] = useState(false);
  

//   useEffect(() => {
//     let countdownInterval;  
//     const OTPTime = parseInt(localStorage.getItem("OTPCountdownStartTime"));
//     const OTPCountdownTime = parseInt(
//       localStorage.getItem("OTPCountdownTimeRemaining")
//     );

//     if (startCountdown && OTPTime && OTPCountdownTime) {
//       const currentTime = Date.now();
//       const elapsedTime = Math.floor((currentTime - OTPTime) / 1000);
//       const remainingTime = OTPCountdownTime - elapsedTime;

//       setCountdownTime(remainingTime);
      
//       console.log(remainingTime);

//       if (remainingTime <= 0) {
//         setCountdownTime(0);
//         clearInterval(countdownInterval);
//         // localStorage.setItem("ok", "false")
//         alert("hi")
//         dispatch(setCountdownExpired(true));
//         // if (countdownTime === 0) {
//         // }
//         // setCountdownExpired(true);
//       } else {
//         const countdownInterval = setInterval(() => {
//           setCountdownTime((prevTime) => Math.max(0, prevTime - 1));
//         }, 1000);

//         return () => {
//           clearInterval(countdownInterval);
//         };
//       }
//     }
//   }, [startCountdown, localStorage.getItem("ok")
// ]);

//   const minutes = Math.floor(countdownTime / 60);
//   const seconds = countdownTime % 60;

//   return (
//     <>
//       <div>
//         <div className="">
//           {minutes < 10 ? `0${minutes}` : minutes}:
//           {seconds < 10 ? `0${seconds}` : seconds}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OTPCountdown;



import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountdownExpired } from "../../redux/portalSlice";

const OTPCountdown = ({ startCountdown }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let countdownInterval;
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
        clearInterval(countdownInterval);
        setCountdownTime(0);
        console.log(remainingTime);
        localStorage.setItem("ok", "false");
        dispatch(setCountdownExpired(true));
      } else {
        countdownInterval = setInterval(() => {
          setCountdownTime((prevTime) => Math.max(0, prevTime - 1));
        }, 1000);

        return () => {
          clearInterval(countdownInterval);
        };
      }
    }
  }, [startCountdown]);

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
