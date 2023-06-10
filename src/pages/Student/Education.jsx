import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education-form row g-3">
        <div className="education-input-container ic1">
          <input
            placeholder=""
            type="text"
            className="education-input"
            id="firstname"
          />
          <div className="education-cut"></div>
          <label className="education-iLabel" for="firstname">
            First name
          </label>
        </div>

        <div className="education-input-container ic2">
          <input
            placeholder=""
            type="text"
            className="education-input"
            id="lastname"
          />
          <div className="education-cut"></div>
          <label className="education-iLabel" for="lastname">
            Last name
          </label>
        </div>
        <div className="education-input-container ic2">
          <input
            placeholder=""
            type="text"
            className="education-input"
            id="email"
          />
          <div className="education-cut cut-short"></div>
          <label className="education-iLabel" for="email">
            Email
          </label>
        </div>
        <button className="education-submit" type="text">
          submit
        </button>
      </div>
    </>
  );
};

export default Education;
