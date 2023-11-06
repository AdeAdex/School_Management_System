import React, { useEffect } from "react";
import OurEvents from "../components/eventPageComponents/OurEvents";
import Previous_Next_Btn from "../components/generalComponents/Previous_Next_Btn";
import Footer from "../components/footerComponents/Footer";
import Parallax2 from "../components/generalComponents/Parallax2";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";

const EventPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <PagesNavbar/>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
      <Parallax2
          classes="bg image2"
          styles={{
            flexDirection: "column",
            height: "60%",
            backgroundImage:
              'linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8)), url("pic/bg-image-2.jpg")',
          }}
          content_styles={{marginTop: '70px'}}
        />
        <div className="center-div">
          <OurEvents></OurEvents>
          <Previous_Next_Btn></Previous_Next_Btn>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default EventPage;




