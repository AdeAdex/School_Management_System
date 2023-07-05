import React, { useEffect, useRef, useState } from "react";
import CalculateTotalNumber from "../generalComponents/CalculateTotalNumber";

const CoursesCountUp = () => {
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
      if (counter <= 32) {
        targetRef.current.textContent = counter;
        counter = counter + 2;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };
  return (
    <>
      <div>
        <CalculateTotalNumber
          classes="each-calculate-to-number"
          innerText="courses"
          styles={{ backgroundColor: "#6fc191" }}
          text={0}
          inputRef={targetRef}
        />
      </div>
    </>
  );
};

export default CoursesCountUp;
