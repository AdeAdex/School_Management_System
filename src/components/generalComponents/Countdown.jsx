// import React, { useEffect, useState } from "react";

// const Countdown = ({ id, styles, innerText }) => {
//   const calculateTimeLeft = () => {
//     const endDate = new Date("2023-09-10T00:00:00Z"); // Set your countdown end date and time
//     const currentDate = new Date();
//     const difference = endDate - currentDate;

//     if (difference <= 0) {
//       return {
//         days: "000",
//         hours: "00",
//         minutes: "00",
//         seconds: "00",
//       };
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     return {
//       days: days.toString().padStart(3, "0"),
//       hours: hours.toString().padStart(2, "0"),
//       minutes: minutes.toString().padStart(2, "0"),
//       seconds: seconds.toString().padStart(2, "0"),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//         <div className="values">
//           {timeLeft.days} days,
//         </div>
//         <div className="values">
//           {timeLeft.hours} hours,
//         </div>
//         <div className="values">
//           {timeLeft.minutes} minutes,
//         </div>
//         <div className="values">
//           {timeLeft.seconds} seconds
//         </div>
//         {/* <div className="text-center text-uppercase rounded py-1" style={styles}>
//           {innerText}
//         </div> */}
//     </>
//   );
// };

// export default Countdown;

import React, { useEffect, useState } from "react";

const Countdown = ({ id, styles, innerText }) => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2023-10-01T00:00:00Z"); // Set your countdown end date and time
    const currentDate = new Date();
    const difference = endDate - currentDate;

    if (difference <= 0) {
      return {
        days: "000",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 20) {
      days = 20;
    }

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Function to update the countdown
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // Call the updateCountdown function immediately
    updateCountdown();

    // Set up an interval to update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="days-countdown-values d-flex flex-column text-center gap-4">
        <div className="fs-2 fw-bold">{timeLeft.days}</div>
        <div
          style={{
            backgroundColor: "#74CEE4",
            borderRadius: "5px",
            padding: "5px 10px",
          }}
        >
          days
        </div>
      </div>
      <div className="days-countdown-values d-flex flex-column text-center gap-4">
        <div className="fs-2 fw-bold">{timeLeft.hours}</div>
        <div
          style={{
            backgroundColor: "#edbf47",
            borderRadius: "5px",
            padding: "5px 10px",
          }}
        >
          hour
        </div>
      </div>
      <div className="days-countdown-values d-flex flex-column text-center gap-4">
        <div className="fs-2 fw-bold">{timeLeft.minutes}</div>
        <div
          style={{
            backgroundColor: "#ec774b",
            borderRadius: "5px",
            padding: "5px 10px",
          }}
        >
          minutes
        </div>
      </div>
      <div className="days-countdown-values d-flex flex-column text-center gap-4">
        <div className="fs-2 fw-bold">{timeLeft.seconds}</div>
        <div
          style={{
            backgroundColor: "#6fc191",
            borderRadius: "5px",
            padding: "5px 10px",
          }}
        >
          seconds
        </div>
      </div>
    </>
  );
};

export default Countdown;
