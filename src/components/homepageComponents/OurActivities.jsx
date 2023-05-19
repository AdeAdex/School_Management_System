import React from "react";
import ActivitiesHeader from "../generalComponents/ActivitiesHeader";
import ActivitiesContainer from "../generalComponents/ActivitiesContainer";

const OurActivities = () => {
  return (
    <>
      <div>
        <ActivitiesHeader
          classes="activities activities-color"
          name="our activities"
          content="our best service for your kids"
          hrStyle={{ backgroundColor: "#edbf47" }}
        ></ActivitiesHeader>
        <section className="activities-container mb-5 pb-5 d-flex flex-wrap w-100">
          <ActivitiesContainer
            title="creative"
            icon="fas fa-lightbulb text-primary fs-1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <ActivitiesContainer
            title="many sport"
            icon="fas fa-person-skiing fs-1"
            style={{ color: "#EC774B" }}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <ActivitiesContainer
            title="bus free"
            icon="fas fa-bus fs-1"
            style={{ color: "#CDDC39" }}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <ActivitiesContainer
            title="modern canteen"
            icon="fas fa-utensils fs-1"
            style={{ color: "#FFC107" }}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <ActivitiesContainer
            title="friendly support"
            icon="fas fa-hand-holding-heart fs-1"
            style={{ color: "#3F51B5" }}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
          <ActivitiesContainer
            title="excursion"
            icon="fas fa-earth-europe fs-1"
            style={{ color: "#FF5722" }}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ut harum corrupti a sequi atque, voluptas, necessitatibus rem error ad quasi, reprehenderit vel explicabo dolorem at nihil nemo laboriosam?"
          />
        </section>
      </div>
    </>
  );
};

export default OurActivities;
