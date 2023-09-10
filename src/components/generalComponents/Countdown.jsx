
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

    if (days < 10) {
      days = 10; // Set the initial value of days to 10 if it's less than 10
    }

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
      <div className="values">
        {timeLeft.days} days,
      </div>
      <div className="values">
        {timeLeft.hours} hours,
      </div>
      <div className="values">
        {timeLeft.minutes} minutes,
      </div>
      <div className="values">
        {timeLeft.seconds} seconds
      </div>
    </>
  );
};

export default Countdown;
