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
          <div className="bg-image2-containe center-di d-flex col-lg-10 justify-content-between mt-auto mx-auto text-uppercase">
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
