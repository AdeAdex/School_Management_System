import React from "react";
import EventsCard from "../eventPageComponents/EventsCard";
import EventCard_Img from "../eventPageComponents/EventCard_Img";
import EventsCard_Content from "../eventPageComponents/EventsCard_Content";

const OurNewsCardColumn2 = () => {
  const readNews = (title) => {
    Swal.fire({
      title: `Developer's Note`,
      html: `This project is still in progress. Please check back later for updates on <span style="color: blue;">${title}</span>.`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
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
          days_time_icon="fas fa-graduation-cap my-auto"
          title="Academic Excellence Recognized"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#6fc191" }}
          content="We are proud to announce outstanding achievements in academics by our students. Discover their remarkable accomplishments."
          btn="Read More"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: "capitalize" }}
          onClick={() => readNews("Academic Excellence Recognized")}
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
          days_time_icon="fas fa-calendar-alt my-auto"
          title="Annual Extravaganza"
          content="Join us for an unforgettable annual event filled with entertainment, games, and much more!"
        />
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
          days_time_icon="fas fa-globe my-auto"
          title="Cultural Festival Highlights"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#edbf47" }}
          content="Experience the rich cultural diversity of our school through vibrant performances and activities at the Cultural Festival."
          btn="Read More"
          btnstyle={{ backgroundColor: "#E0B84E", textTransform: "capitalize" }}
          onClick={() => readNews("Cultural Festival Highlights")}
        />
        <EventsCard_Content
          cardstyle={{ width: "100%" }}
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#E16C6C" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-users my-auto"
          title="Celebrating Diversity"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#E16C6C" }}
          content="Join us in embracing and celebrating the diverse backgrounds and cultures that make our school community unique."
          btn="Read More"
          btnstyle={{ backgroundColor: "#CA6969", textTransform: "capitalize" }}
          onClick={() => readNews("Celebrating Diversity")}
        />
      </div>
    </>
  );
};

export default OurNewsCardColumn2;
