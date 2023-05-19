import React from "react";
import EventsCard from "../eventPageComponents/EventsCard";
import EventCard_Img from "../eventPageComponents/EventCard_Img";

const OurNewsCardColumn1 = () => {
  return (
    <>
      <div
        className="our-news-card-column-1 d-flex flex-column gap-3"
        style={{ width: "33.3%" }}
      >
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#74CEE4" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#74CEE4" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#74CEE4" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: "capitalize" }}
        />
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#6fc191" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#6fc191" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#6fc191" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: "capitalize" }}
        />
        <EventCard_Img
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#EC774B" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#EC774B" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
        />
      </div>
    </>
  );
};

export default OurNewsCardColumn1;
