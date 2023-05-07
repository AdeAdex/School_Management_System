import React from "react";
import EventsCard from "./EventsCard";
import EventCard_Img from "./EventCard_Img";
import EventsCard_Content from "./EventsCard_Content";

const OurNewsCardColumn2 = () => {
  return (
    <>
      <div
        className="our-news-card-column-2 d-flex flex-column gap-3"
        style={{ width: "33.3%" }}
      >
        <EventsCard_Content
          cardstyle={{ width: "100%" }}
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
        ></EventsCard_Content>
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
        ></EventCard_Img>
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#edbf47" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#edbf47" }}
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
          styles={{ backgroundColor: "#edbf47" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#E0B84E", textTransform: "capitalize" }}
        ></EventsCard>
        <EventsCard_Content
          cardstyle={{ width: "100%" }}
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#E16C6C" }}
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
          styles={{ backgroundColor: "#E16C6C" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#CA6969", textTransform: "capitalize" }}
        ></EventsCard_Content>
      </div>
    </>
  );
};

export default OurNewsCardColumn2;
