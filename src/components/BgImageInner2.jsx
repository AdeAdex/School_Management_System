import React from 'react'
import Countdown from './Countdown'

const BgImageInner2 = ({}) => {
  return (
    <>
        <p className="bg-image2-main center-div" style={{ height: "60%" }}>
            <div className="text-center our-events-header">
              <span className="fs-3"> FIRST DAY AT SCHOOL !</span>
              <br />
              ARE YOU READY ?
            </div>
            <div className="bg-image2-container center-div2 d-flex col-lg-10 justify-content-between mt-auto">
              <Countdown
                id="tm1"
                styles={{ backgroundColor: "#74CEE4" }}
                innerText="days"
              ></Countdown>
              <Countdown
                id="tm2"
                styles={{ backgroundColor: "#edbf47" }}
                innerText="hours"
              ></Countdown>
              <Countdown
                id="tm3"
                styles={{ backgroundColor: "#ec774b" }}
                innerText="minutes"
              ></Countdown>
              <Countdown
                id="tm4"
                styles={{ backgroundColor: "#6fc191" }}
                innerText="seconds"
              ></Countdown>
            </div>
          </p>
    </>
  )
}

export default BgImageInner2