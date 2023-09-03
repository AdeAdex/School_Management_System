import React, { useEffect, useState } from "react";
import EventsCard from "./EventsCard";
import ActivitiesHeader from "../generalComponents/ActivitiesHeader";

const OurEvents = () => {
  const [eventInfo, setEventInfo] = useState([]);
  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/get_events";
    axios
      .get(endpoint)
      .then((response) => {
        setEventInfo(response.data.response)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  
  return (
    <>
      <div>
        <ActivitiesHeader
          classes="activities activities-color"
          name="our events"
          content="dont miss our events"
          hrStyle={{ backgroundColor: "red" }}
        ></ActivitiesHeader>
      </div>
      <div className="our-events-container d-flex flex-lg-row flex-md-row flex-sm-column w-100 gap-3 flex-wrap justify-content-center align-items-center">
      {
        eventInfo.map((eachEvent, index) => (
          <EventsCard
        cardstyle={{ width: "23%" }}
          classes="our-events"
          img="pic/bg-image-3.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px" }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="21"
          date="Jun"
          title={reachEvent.eventTitle}
          styles={{ backgroundColor: "#6fc191" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          hr_class="my-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          content=" Join us for a delightful day in the park, filled with outdoor games, delicious food, "
          btn="check it"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: "uppercase" }}
      />
        ))
      }
      
        {/* <EventsCard
          cardstyle={{ width: "23%" }}
          classes="our-events"
          img="pic/bg-image-3.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px" }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="21"
          date="Jun"
          title="Summer Park Picnic"
          styles={{ backgroundColor: "#6fc191" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          hr_class="my-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          content=" Join us for a delightful day in the park, filled with outdoor games, delicious food, "
          btn="check it"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: "uppercase" }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "23%" }}
          classes="our-events"
          img="pic/bg-image-3.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px" }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="05"
          date="Jul"
          title="Artistic Workshop"
          styles={{ backgroundColor: "#74CEE4" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          hr_class="my-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          content=" Unleash your creativity at our art session and explore various artistic techniques."
          btn="check it"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: "uppercase" }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "23%" }}
          classes="our-events"
          img="pic/bg-image-5.jpeg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px" }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="04"
          date="aug"
          title="Sports & Fitness"
          styles={{ backgroundColor: "#edbf47" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          hr_class="my-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          content=" Join us for a day of sports and exercise, filled with competitions and fitness challenges"
          btn="check it"
          btnstyle={{ backgroundColor: "#E0B84E", textTransform: "uppercase" }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "23%" }}
          classes="our-events"
          img="pic/bg-image-4.jpg"
          h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px" }}
          time_container="time-container"
          country_container="country-container mb-1"
          days_time="days-time"
          days_time_icon="d-none"
          days="20"
          date="aug"
          title="Excursion Adventure"
          styles={{ backgroundColor: "#ec774b" }}
          country="nigeria"
          time="9:00am to 4:00pm"
          hr_class="my-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          content=" Embark on an exciting excursion day, exploring the beauty of nature"
          btn="check it"
          btnstyle={{ backgroundColor: "#DF764E", textTransform: "uppercase" }}
        ></EventsCard> */}
      </div>
    </>
  );
};

export default OurEvents;
