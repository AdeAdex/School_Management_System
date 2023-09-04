import React from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";

const ReadEventPage = () => {
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
          welcome
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReadEventPage;
