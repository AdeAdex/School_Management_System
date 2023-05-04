import React from "react";
import ActivitiesHeader from "./ActivitiesHeader";
import EventsCard from "./EventsCard";
import OurNewsCardColumn1 from "./OurNewsCardColumn1";
import OurNewsCardColumn2 from "./OurNewsCardColumn2";
import OurNewsCardColumn3 from "./OurNewsCardColumn3";

const OurNews = () => {
  return (
    <>
      <div>
        <ActivitiesHeader
          classes="activities activities-color"
          name="our news"
          content="follow our most important news"
          hrStyle={{ backgroundColor: "#74CEE4" }}
        ></ActivitiesHeader>
      </div>
      <div
        className="our-news-container d-flex flex-lg-row flex-sm-column col-12 gap-3"
        style={{ width: "100%" }}
      >
        <OurNewsCardColumn1></OurNewsCardColumn1>
        <OurNewsCardColumn2></OurNewsCardColumn2>
        <OurNewsCardColumn3></OurNewsCardColumn3>
      </div>
    </>
  );
};

export default OurNews;
