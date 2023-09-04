import React from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import { useLocation } from "react-router-dom";


const ReadEventPage = () => {
  const location = useLocation();
  const { eventImage, eventTitle,  eventDate, eventCountry, eventContent,  eventFrom,  eventTo } = location.state;
  return (
    <>
      <PagesNavbar />
      <div>
        <div
          className="d-flex flex-column justify-content-center w-100"
          style={{
            height: "100%",
            backgroundColor: "#f1f1f1",
            paddingTop: "170px",
          }}
        >
          <div>{eventContent}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReadEventPage;
