import React from "react";
import EventsCard from "../eventPageComponents/EventsCard";
import EventCard_Img from "../eventPageComponents/EventCard_Img";

const OurNewsCardColumn1 = () => {
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
  };
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
          img="https://www.riversideschools.com.ng/wp-content/uploads/2020/09/DSC_0449.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#74CEE4" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-birthday-cake my-auto" 
          title="Annual School Anniversary Celebration"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#74CEE4" }}
          content="Join us in commemorating another successful year of learning and growth at our school. Exciting events and surprises await!"
          btn="Read More"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: "capitalize" }}
          onClick={() => readNews("Annual School Anniversary Celebration")}
        />
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#6fc191" }}
          img="https://www.deliabw.edu.hk/wp-content/uploads/2021/05/IMG_4619-1.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#6fc191" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-running my-auto"
          title="Exciting Sports Day Ahead"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#6fc191" }}
          content="Gear up for a day filled with athleticism and camaraderie as our students showcase their sports skills during Sports Day."
          btn="Read More"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: "capitalize" }}
          onClick={() => readNews("Exciting Sports Day Ahead")}
        />
        <EventCard_Img
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#EC774B" }}
          img="https://natsci.source.colostate.edu/wp-content/uploads/sites/6/2023/04/LSOP_extravaganza_preview_1920.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#EC774B" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-calendar-alt my-auto"
          title="Science Fair Extravaganza"
          content="Prepare to be amazed by the scientific wonders our students have in store at the upcoming Science Fair!"
        />
      </div>
    </>
  );
};

export default OurNewsCardColumn1;
