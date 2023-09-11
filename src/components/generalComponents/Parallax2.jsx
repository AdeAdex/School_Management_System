import React from "react";
import Countdown from "./Countdown";
import Small_hr from "./Small_hr";

const Parallax2 = ({ classes, styles, content_styles }) => {
  return (
    <>
      <div className={classes} style={styles}>
        <div className="bg-image2-main center-div mx-auto" style={content_styles}>
          <div className="text-center our-events-header">
            <span className="fs-3"> FIRST DAY AT SCHOOL !</span>
            <br />
            ARE YOU READY ?
          </div>
          <Small_hr hr_class="my-3 mx-auto"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "10%",
              }}/>
          <div className="days-countdown-container d-flex col-lg-10 justify-content-between mt-auto mx-auto text-uppercase">
            <Countdown
              styles={{ backgroundColor: "#74CEE4" }}
            ></Countdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax2;
