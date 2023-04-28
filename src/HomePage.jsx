import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import OurActivities from "./components/OurActivities";
import "./Homepage.scss";
import "./App.css";
import Countdown from "./components/Countdown";
import OurEvents from "./components/OurEvents";
import NavigatoContainer from "./components/NavigatoContainer";
import BgImageInner2 from "./components/BgImageInner2";
import BgImageInner1 from "./components/BgImageInner1";
import BgImageInner3 from "./components/BgImageInner3";




const HomePage = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  var countDownDate = new Date("Jun 1, 2023 12:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    tm1.innerHTML = days;
    tm2.innerHTML = hours;
    tm3.innerHTML = minutes;
    tm4.innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      tm1.innerHTML = "000";
      tm2.innerHTML = "00";
      tm3.innerHTML = "00";
      tm4.innerHTML = "00";
    }
  }, 1000);

  return (
    <>
      <Carousel />
      <div className="mx-auto" style={{ width: "100%", height: "100vh" }}>
        <div className="center-div">
          <NavigatoContainer></NavigatoContainer>
        </div>
        <div className="bg image1 d-flex">
        <BgImageInner1></BgImageInner1>
        </div>
        <div className="center-div">
          <OurActivities></OurActivities>
        </div>
        <div className="bg image2 d-flex flex-column">
          <BgImageInner2></BgImageInner2>
        </div>
        <div className="center-div">
          <OurEvents></OurEvents>
        </div>
       <div className="bg image3 d-flex">
        <BgImageInner3></BgImageInner3>
       </div>
        <div className="center-div"></div>
       <div className="bg image4"></div>
      </div>
      {/* <div
        className="position-fixed top-0 d-flex flex-column gap-2"
        style={{ marginTop: "40%", marginLeft: "2%" }}
      >
        <h5>My count: {count} </h5>
        <button type="button" class="btn btn-primary btn-sm position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {calculation}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <div className="d-flex gap-3 justify-content-center">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setCount((c) => c - 1)}
        >
          <i className="fas fa-minus"></i>
        </button>
        <button
          className="btn btn-success btn-sm"
          onClick={() => setCount((c) => c + 1)}
        >
          <i className="fas fa-plus"></i>
        </button>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
