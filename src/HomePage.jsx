import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import NavigateTo from "./components/NavigateTo";
import OurActivities from "./components/OurActivities";
import "./Homepage.scss";
import "./App.css";
import Countdown from "./components/Countdown";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  var countDownDate = new Date("May 5, 2023 15:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    tm1.innerHTML = days + "d ";
    tm2.innerHTML = hours + "h ";
    tm3.innerHTML = minutes + "m ";
    tm4.innerHTML = seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <>
      <Carousel />
      <div className="mx-auto" style={{ width: "100%", height: "100vh" }}>
        <div className="center-div">
          <section className="d-flex flex-column flex-lg-row justify-content-center w-100">
            <NavigateTo
              txt="courses"
              style={{
                backgroundColor: '#74CEE4',
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />
            <NavigateTo txt="prices" style={{ backgroundColor: "#edbf47" }} />
            <NavigateTo txt="events" style={{ backgroundColor: "#ec774b" }} />
            <NavigateTo
              txt="teachers"
              style={{
                backgroundColor: "#6fc191",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          </section>
        </div>
        <div class="bg image1"></div>
        <div className="center-div">
          <div>
            <div className="activities ">
              <h2 className="">our activities</h2>{" "}
              <p>OUR BEST SERVICES FOR YOUR KIDS</p>
            </div>
            <section className="activities-container mb-5 pb-5 d-flex flex-wrap w-100">
              <OurActivities
                title="creative"
                icon="fas fa-lightbulb text-primary fs-1"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
              <OurActivities
                title="many sport"
                icon="fas fa-person-skiing fs-1"
                style={{ color: "#EC774B" }}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
              <OurActivities
                title="bus free"
                icon="fas fa-bus fs-1"
                style={{ color: "#CDDC39" }}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
              <OurActivities
                title="modern canteen"
                icon="fas fa-utensils fs-1"
                style={{ color: "#FFC107" }}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
              <OurActivities
                title="friendly support"
                icon="fas fa-hand-holding-heart fs-1"
                style={{ color: "#3F51B5" }}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
              <OurActivities
                title="excursion"
                icon="fas fa-earth-europe fs-1"
                style={{ color: "#FF5722" }}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
              />
            </section>
          </div>
        </div>
        <div class="bg image2 d-flex">
          <p className="center-div text-white my-auto  h-50 d-flex justify-content-between">
            <Countdown id="tm1" styles={{backgroundColor: '#74CEE4'}}></Countdown>
            <Countdown id="tm2" styles={{backgroundColor: '#edbf47'}}></Countdown>
            <Countdown id="tm3" styles={{backgroundColor: '#ec774b'}}></Countdown>
            <Countdown id="tm4" styles={{backgroundColor: '#6fc191'}}></Countdown>
          </p>
        </div>
        <div className="center-div">
          <section className="activities-container mb-5 pb-5 d-flex flex-wrap w-100">
            <OurActivities
              title="creative"
              icon="fas fa-lightbulb text-primary fs-1"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="many sport"
              icon="fas fa-person-skiing fs-1"
              style={{ color: "#EC774B" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="bus free"
              icon="fas fa-bus fs-1"
              style={{ color: "#CDDC39" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="modern canteen"
              icon="fas fa-utensils fs-1"
              style={{ color: "#FFC107" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="friendly support"
              icon="fas fa-hand-holding-heart fs-1"
              style={{ color: "#3F51B5" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="excursion"
              icon="fas fa-earth-europe fs-1"
              style={{ color: "#FF5722" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
          </section>
        </div>
        <div class="bg image3"></div>
        <div className="center-div">
          <section className="activities-container mb-5 pb-5 d-flex flex-wrap w-100">
            <OurActivities
              title="creative"
              icon="fas fa-lightbulb text-primary fs-1"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="many sport"
              icon="fas fa-person-skiing fs-1"
              style={{ color: "#EC774B" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="bus free"
              icon="fas fa-bus fs-1"
              style={{ color: "#CDDC39" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="modern canteen"
              icon="fas fa-utensils fs-1"
              style={{ color: "#FFC107" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="friendly support"
              icon="fas fa-hand-holding-heart fs-1"
              style={{ color: "#3F51B5" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
            <OurActivities
              title="excursion"
              icon="fas fa-earth-europe fs-1"
              style={{ color: "#FF5722" }}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
            />
          </section>
        </div>
        <div class="bg image4"></div>
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
