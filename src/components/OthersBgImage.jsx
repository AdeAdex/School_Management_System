import React from "react";
import ActivitiesHeader from "./ActivitiesHeader";

const OthersBgImage = () => {
  return (
    <>
      <div className="bg-image2-main center-div" style={{ height: "0%" }}>
        <ActivitiesHeader
          classes="activities activities-white-color"
          name="our teachers"
          content="know our best educators"
          hrStyle={{ backgroundColor: "white" }}
        ></ActivitiesHeader>
      </div>
    </>
  );
};

export default OthersBgImage;
