import React from "react";
import BgImageInner2 from "./components/BgImageInner2";
import OurEvents from "./components/OurEvents";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";

const EventPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image2 event-image2 d-flex flex-column">
          <BgImageInner2></BgImageInner2>
        </div>
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




