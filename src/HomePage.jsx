import React from "react";
import Carousel from "./components/Carousel";
import NavigateTo from "./components/NavigateTo";
import OurActivities from "./components/OurActivities";

const HomePage = () => {

  return (
    <>
      <Carousel />
      <div className="mx-auto" style={{ width: "75%" }}>
        <section className="d-flex flex-column flex-lg-row justify-content-center">
          <NavigateTo
            txt="courses"
            style={{
              backgroundColor: "#74CEE4",
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
        <section className="my-5 py-5 d-flex flex-wrap w-100">
          <OurActivities
            title="creative"
            icon="fas fa-lightbulb text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="many sport"
            icon="fas fa-person-skiing fs-1"
            style={{color: "#EC774B"}}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="bus free"
            icon="fas fa-bus fs-1"
            style={{color: "#CDDC39"}}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="modern canteen"
            icon="fas fa-utensils fs-1"
            style={{color: "#FFC107"}}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="friendly support"
            icon="fas fa-hand-holding-heart fs-1"
            style={{color: "#3F51B5"}}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="excursion"
            icon="fas fa-earth-europe fs-1"
            style={{color: "#FF5722"}}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
