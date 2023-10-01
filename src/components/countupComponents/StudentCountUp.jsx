import React, { useEffect, useRef, useState } from "react";
import CalculateTotalNumber from "../generalComponents/CalculateTotalNumber";
import axios from "axios";

const StudentCountUp = () => {
  const targetRef = useRef(null);
  const [registeredStudent, setRegisteredStudent] = useState(0);

  useEffect(() => {
    let endpoint =
      "http://localhost:2000/student_account/total_number_of_register_student";
    axios
      .get(endpoint)
      .then((response) => {
        setRegisteredStudent(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [registeredStudent]);

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

  useEffect(() => {
    if (registeredStudent > 0) {
      startCounting();
    }
  }, [registeredStudent]);

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
      if (counter <= parseInt(registeredStudent + 50)) {
        targetRef.current.textContent = counter;
        counter = counter + 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  };
  return (
    <>
      <div>
        <CalculateTotalNumber
          classes="each-calculate-to-number"
          innerText="students"
          styles={{ backgroundColor: "#edbf47" }}
          text={0}
          inputRef={targetRef}
        />
      </div>
    </>
  );
};

export default StudentCountUp;
