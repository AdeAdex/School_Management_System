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
            title="custom food"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="many sport"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="bus free"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="modern canteen"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="friendly support"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <OurActivities
            title="creative & excursion"
            icon="fas fa-star text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
