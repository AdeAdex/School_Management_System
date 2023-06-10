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
          {/* <div class="education-user-box">
            <input required="" name="" className="education-input" type="text" />
            <label className="education-label">Email</label>
          </div>
          <div class="education-user-box">
            <input required="" name="" className="education-input" type="password" />
            <label className="education-label">Password</label>
          </div> */}
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
