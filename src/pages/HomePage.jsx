import React, { useEffect, useState } from "react";
import Carousel from "../components/carouselComponents/Carousel";
import OurActivities from "../components/homepageComponents/OurActivities";
import OurEvents from "../components/eventPageComponents/OurEvents";
import NavigatoContainer from "../components/homepageComponents/NavigatoContainer";
import OurNews from "../components/newsPageComponents/OurNews";
import Footer from "../components/footerComponents/Footer";
import Parallax1 from "../components/generalComponents/Parallax1";
import Parallax2 from "../components/generalComponents/Parallax2";
import Parallax3 from "../components/generalComponents/Parallax3";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import ScrollProgress from "../components/generalComponents/ScrollProgress";
// import MyCountUp from "../components/MyCountUp";

const HomePage = () => {
  // const [count, setCount] = useState(0);
  // const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // }, [count]);

  // var countDownDate = new Date("Jun 1, 2023 12:00:00").getTime();
  // const myDate = new Date();
  // const days = myDate.getHours();
  // console.log(myDate);
  // console.log(days);
  // var x = setInterval(function () {
  //   var now = new Date().getTime();
  //   var distance = countDownDate - now;
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   tm1.innerHTML = days;
  //   tm2.innerHTML = hours;
  //   tm3.innerHTML = minutes;
  //   tm4.innerHTML = seconds;

  //   if (distance < 0) {
  //     clearInterval(x);
  //     tm1.innerHTML = "000";
  //     tm2.innerHTML = "00";
  //     tm3.innerHTML = "00";
  //     tm4.innerHTML = "00";
  //   }
  // }, 1000);

  return (
    <>
    
      <Carousel />
      <PagesNavbar/>
      <ScrollProgress/>
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
        <section name="section1">
          <OurActivities />
        </section>
        </div>
        <Parallax2
          classes="bg image2"
          styles={{
            flexDirection: "column",
            height: "50%",
            backgroundImage:
              'linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8)), url("pic/bg-image-2.jpg")',
          }}
        />
        <div className="center-div">
        <section name="section2">
          <OurEvents />
          </section>
        </div>
        <Parallax3
          classes="bg image3"
          styles={{ height: "40%", backgroundImage: "url(pic/bg-image-4.jpg)" }}
        />
        <div className="center-div">
        <section name="section3">
          <OurNews></OurNews>
        </section>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn text-white text-uppercase d-flex gap-3 px-4 py-2"
              style={{ backgroundColor: "#74CEE4" }}
            >
              <i className="fas fa-border-all my-auto"></i> view more
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
