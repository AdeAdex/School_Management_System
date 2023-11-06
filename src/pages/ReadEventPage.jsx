import React, { useEffect } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import { useLocation } from "react-router-dom";
import "../pages/ReadEventPage.css";


const ReadEventPage = () => {
  const location = useLocation();
  const {
    eventImage,
    eventTitle,
    eventDate,
    eventCountry,
    eventContent,
    eventFrom,
    eventTo,
  } = location.state;

  const agendaItems = [
    "Registration and Welcome",
    "Keynote Speech",
    "Lunch Break",
    "Workshops and Activities",
    "Closing Ceremony",
  ];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <PagesNavbar />
      <div
        className="d-flex flex-column justify-content-center align-items-center read-event-main-container"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f1f1f1",
          paddingTop: "200px",
          position: "relative"
        }}
      >
        <img
          src="https://media.istockphoto.com/id/978975308/vector/upcoming-events-neon-signs-vector-upcoming-events-design-template-neon-sign-light-banner-neon.jpg?s=170667a&w=0&k=20&c=SkMtxe3H0G4My_1DqS0CS1uAHJR8NaozbytU0XLQyxo="
          alt="Event Banner"
          className="banner"
        />
        <div className="event-container">
          <img src={eventImage} alt={eventTitle} className="event-image" />
          <div className="event-details">
            <h1 className="event-title">{eventTitle}</h1>
            <p className="event-date">{eventDate}</p>
            <p className="event-location">Location: {eventCountry}</p>
            <p className="event-time">
              Time: {eventFrom} - {eventTo}
            </p>
            <p className="event-fee">Registration Fee: ₦0</p>
          </div>
        </div>
        <div className="event-description">
          <h2>About the Event</h2>
          <p>{eventContent}</p>
          <h2>Agenda</h2>
          <ul>
            {agendaItems.map((item, index) => (
              <li key={index}>
                {item} : {eventFrom} - {eventTo}
              </li>
            ))}
          </ul>
          <h2>Registration</h2>
          <p>
            To attend this event, please register by clicking the "Register Now"
            button below. Registration fee is ₦0 per person.
          </p>
          <button className="register-button">Register Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadEventPage;
