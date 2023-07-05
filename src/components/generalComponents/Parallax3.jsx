import React, { useEffect, useRef, useState } from "react";
import CalculateTotalNumber from "./CalculateTotalNumber";

const Parallax3 = ({ classes, styles, bg3_styles }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
      }
    });
  };

  const startCounting = () => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= 50) {
        targetRef.current.textContent = counter;
        counter = counter + 5;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <>
      <div className={classes} style={styles}>
        <div className="bg-image3-main center-div" style={bg3_styles}>
          <div className="bg-image3-container center-div2 d-flex col-lg-10 justify-content-between">
            <div className="each-calculate-to-number"  ref={targetRef} >
              <div className="margin-y-auto" style={{ backgroundColor: "#74CEE4" }}>0</div>
              <div className="text-center text-uppercase fw-bold  py-1">Teacher</div>
            </div>
            {/* <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="teachers"
              styles={{ backgroundColor: "#74CEE4" }}
              text={54}
            /> */}
            {/* <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="courses"
              styles={{ backgroundColor: "#6fc191" }}
              text="32"
            />
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="students"
              styles={{ backgroundColor: "#edbf47" }}
              text="78"
            />
            <CalculateTotalNumber
              classes="each-calculate-to-number"
              innerText="activities"
              styles={{ backgroundColor: "#AC7AB5" }}
              text="45"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax3;
