import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div class="education-login-box">
        <form className="education-form">
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>Username</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>Username</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>Username</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>Username</span>
            <i></i>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default Education;
