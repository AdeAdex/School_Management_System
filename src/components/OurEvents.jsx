import React from "react";
import EventsCard from "./EventsCard";
import ActivitiesHeader from "./ActivitiesHeader";

const OurEvents = () => {
  return (
    <>
      <div>
        <ActivitiesHeader
          name="our events"
          content="dont miss our events"
          hrStyle={{ backgroundColor: "red" }}
        ></ActivitiesHeader>
      </div>
      <div className="d-flex flex-lg-row flex-sm-column col-12 gap-3">
        <EventsCard
          cardstyle={{ width: "18rem" }}
          classes="our-events"
          img="pic/bg-image-3.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px' }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="21"
          date="Jun"
          title="A DAY IN THE PARK"
          styles={{ backgroundColor: "#6fc191" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
          btn="check it"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: 'uppercase' }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "18rem" }}
          classes="our-events"
          img="pic/bg-image-3.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px' }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="05"
          date="Jul"
          title="art session"
          styles={{ backgroundColor: "#74CEE4" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
          btn="check it"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: 'uppercase' }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "18rem" }}
          classes="our-events"
          img="pic/bg-image-5.jpeg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px' }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="04"
          date="aug"
          title="sport & exercise day"
          styles={{ backgroundColor: "#edbf47" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
          btn="check it"
          btnstyle={{ backgroundColor: "#E0B84E", textTransform: 'uppercase' }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "18rem" }}
          classes="our-events"
          img="pic/bg-image-4.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px' }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="20"
          date="aug"
          title="excursion day"
          styles={{ backgroundColor: "#ec774b" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
          btn="check it"
          btnstyle={{ backgroundColor: "#DF764E", textTransform: 'uppercase' }}
        ></EventsCard>
      </div>
    </>
  );
};

export default OurEvents;
