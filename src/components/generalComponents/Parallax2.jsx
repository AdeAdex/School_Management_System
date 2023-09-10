import React from "react";
import Countdown from "./Countdown";

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
          <div className="bg-image2-containe center-di d-flex col-lg-10 justify-content-between mt-auto mx-auto">
            <Countdown
              // id="tm1"
              styles={{ backgroundColor: "#74CEE4" }}
              // innerText="days"
            ></Countdown>
            {/* <Countdown
              // id="tm2"
              styles={{ backgroundColor: "#edbf47" }}
              // innerText="hours"
            ></Countdown>
            <Countdown
              // id="tm3"
              styles={{ backgroundColor: "#ec774b" }}
              // innerText="minutes"
            ></Countdown>
            <Countdown
              // id="tm4"
              styles={{ backgroundColor: "#6fc191" }}
              // innerText="seconds"
            ></Countdown> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax2;
