import React, { useEffect, useState } from "react";
import EventsCard from "./EventsCard";
import ActivitiesHeader from "../generalComponents/ActivitiesHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OurEvents = () => {
  const [eventInfo, setEventInfo] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/get_events";
    axios
      .get(endpoint)
      .then((response) => {
        setEventInfo(response.data.response);
        // console.log(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const readMore = (eventData) => {
    navigate(`/read_more_about_our_event/${eventData.eventTitle}`, { state: eventData });
  };

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
        {eventInfo.map((eachEvent, index) => {
          // Split the eventDays and format it
          const [year, month, day] = eachEvent.eventDays.split("-");

          // Create an array of month abbreviations
          const monthAbbreviations = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

          // Use the Date object to convert the numeric month to the abbreviated name
          const formattedMonth = monthAbbreviations[parseInt(month) - 1]; // Subtract 1 because months are 0-indexed in Date

          const formattedDate = `${day} ${formattedMonth}`;
          const formattedDays = `${day} ${formattedMonth} ${year}`
          const contentColors = ["#6fc191", "#74CEE4", "#edbf47", "#ec774b"];
          const btnColors = ["#6AB78A", "#6FC4D9", "#E0B84E", "#DF764E"];

          return (
            <EventsCard
              key={index}
              cardstyle={{ width: "23%" }}
              classes="our-events"
              img={eachEvent.eventImage}
              h5Classes="card-title  bg-secondary py-3 text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              time_container="time-container"
              country_container="country-container mb-1"
              days_time="days-time"
              days_time_icon="d-none"
              days={formattedDate} // Use the formatted date
              title={eachEvent.eventTitle}
              styles={{
                backgroundColor: contentColors[index % contentColors.length],
              }}
              country={eachEvent.eventCountry}
              time={`${eachEvent.eventFrom} to ${eachEvent.eventTo}`}
              hr_class="my-3 bg-white"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
              content={eachEvent.eventContent}
              onClick={() => {
                readMore({
                  eventImage: eachEvent.eventImage,
                  eventTitle: eachEvent.eventTitle,
                  eventDate: formattedDays,
                  eventCountry: eachEvent.eventCountry,
                  eventContent: eachEvent.eventContent,
                  eventFrom: eachEvent.eventFrom,
                  eventTo: eachEvent.eventTo,
                });
              }}
              btnstyle={{
                backgroundColor: btnColors[index % btnColors.length],
                textTransform: "uppercase",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default OurEvents;
