import React from "react";
// import ActivitiesHeader from "./ActivitiesHeader";

const OthersBgImage = ({ classes, name, content, hrStyle }) => {
  return (
    <>
      <div className="bg-image2-main center-div" style={{ height: "0%" }}>
        <div className={classes}>
          <h2 className="">{name}</h2>
          <p>{content}</p>
          <div style={hrStyle}></div>
        </div>
      </div>
    </>
  );
};

export default OthersBgImage;
