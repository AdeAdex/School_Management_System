import React from "react";
import CalculateTotalNumber from "./CalculateTotalNumber";

const Parallax3 = ({ classes, styles, bg3_styles }) => {
  return (
    <>
      <div className={classes} style={styles}>
        <div className="bg-image3-main center-div" style={bg3_styles}>
          <div className="bg-image3-container center-div2 d-flex col-lg-10 justify-content-between">
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="teachers"
              styles={{ backgroundColor: "#74CEE4" }}
              text="54" />
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="courses"
              styles={{ backgroundColor: "#6fc191" }}
              text="32" />
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="students"
              styles={{ backgroundColor: "#edbf47" }}
              text="78" />
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="activities"
              styles={{ backgroundColor: "#AC7AB5" }}
              text="45" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax3;
