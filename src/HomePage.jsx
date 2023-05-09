import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import OurActivities from "./components/OurActivities";
import "./App.css";
import "./Homepage.scss";
import OurEvents from "./components/OurEvents";
import NavigatoContainer from "./components/NavigatoContainer";
import BgImageInner2 from "./components/BgImageInner2";
import BgImageInner1 from "./components/BgImageInner1";
import BgImageInner3 from "./components/BgImageInner3";
import OurNews from "./components/OurNews";
import Footer from "./components/Footer";
import Parallax1 from "./components/Parallax1";
import Parallax2 from "./components/Parallax2";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  var countDownDate = new Date("Jun 1, 2023 12:00:00").getTime();
  const myDate = new Date();
  const days = myDate.getHours();
  console.log(myDate);
  console.log(days);
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
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="center-div">
          <NavigatoContainer />
        </div>
        <Parallax1
          classes="bg"
          styles={{
            height: "30%",
            backgroundImage: 'url("pic/bg-image-1.jpg")',
          }}
          inner_content_2="contact us"
        />
        <div className="center-div">
          <OurActivities />
        </div>
        <Parallax2
          classes="bg"
          styles={{
            flexDirection: "column",
            height: "50%",
            backgroundImage:
              'linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8)), url("pic/bg-image-2.jpg")',
          }}
        />
        <div className="center-div">
          <OurEvents />
        </div>
        <div className="bg image3 d-flex">
          <BgImageInner3 bg3_styles={{ height: "60%" }}></BgImageInner3>
        </div>
        <div className="center-div">
          <OurNews></OurNews>
        </div>
        <div className="bg image4"></div>
        <Footer />
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
