import React from "react";
import EventsCard from "../eventPageComponents/EventsCard";
import EventCard_Img from "../eventPageComponents/EventCard_Img";

const OurNewsCardColumn3 = () => {
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
        className="our-news-card-column-3 d-flex flex-column gap-3"
        style={{ width: "33.3%" }}
      >
        <EventCard_Img
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#C389CE" }}
          img="https://i1.wp.com/newdiplomatng.com/wp-content/uploads/2020/07/downloadfile-60.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#C389CE" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-camera my-auto"
          title="Memorable School Moments"
        />
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#E16C6C" }}
          img="https://i.pinimg.com/originals/60/bc/0d/60bc0dc66285569497011b465dad87c9.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#E16C6C" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-calendar-alt my-auto"
          title="Art Exhibition Showcase"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#E16C6C" }}
          content="Discover the artistic talents of our students at the upcoming Art Exhibition Showcase."
          btn="Read More"
          btnstyle={{ backgroundColor: "#CA6969", textTransform: "capitalize" }}
          onClick={() => readNews("Art Exhibition Showcase")}
        />
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#74CEE4" }}
          img="https://photos.peopleimages.com/picture/202211/2555379-selfie-college-graduation-and-students-in-university-celebrate-academic-success-with-a-happy-smile-black-gown-and-graduation-cap.-education-graduate-certificate-and-friends-with-diploma-in-hands-fit_400_400.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#74CEE4" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-trophy my-auto"
          title="Celebrating Academic Achievements"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#74CEE4" }}
          content="Join us in recognizing and celebrating the outstanding academic achievements of our students."
          btn="Read More"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: "capitalize" }}
          onClick={() => readNews("Celebrating Academic Achievements")}
        />
      </div>
    </>
  );
};

export default OurNewsCardColumn3;
