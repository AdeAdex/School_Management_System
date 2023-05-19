import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";

const SignIn = () => {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      const endpoint = "http://localhost:2000/student_account/student_signin";
      axios.post(endpoint, values)
      .then((res) => {
        if (res.data == "pass") {
          console.log(res.data);
          navigate("/student_dashboard");
        } else {
          navigate("/signin");
        }
      });
    },
  });

  return (
    <>
      
    <PagesNavbar/>
    <div className="d-flex gap-5 mx-auto main">
      <div className="main-container">
        <div className="container">
          <div className="file-btn" id="imgContainer">
            <img src="pic/avatar.png" id="myFrame" />
          </div>
          <h1 id="h1">
            welcome <span>back!</span>
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            action="/student_account/student_signin"
            method="post"
          >
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="email"
                onChange={formik.handleChange}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputbox mb-4">
              <input
                required="required"
                type="text"
                name="password"
                onChange={formik.handleChange}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="check">
              <span>
                 <input type="checkbox" id="checkBox" /> Remember Me
              </span>
              <a href="" id="forgotPass">
                Forgot password
              </a>
            </div>
            <button
              className="btn btn-primary col-12"
              type="submit"
              // onClick={login}
            >
              Login
            </button>
            <h3 id="h3">or log in with</h3>
            <div className="social-icons">
              <a href="www.facebook.com" className="icon-links">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="www.facebook.com" className="icon-links">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="www.google.com" className="icon-links">
                <i className="fab fa-google"></i>
              </a>
              <a href="www.twitter.com" className="icon-links">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="sign-up-container">
              <span>Not on Adex yet?</span> <a href="/student_signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
      <div
        className="d-none second-container"
        style={{ width: "70%", height: "100%" }}
      >
        <div
          className="w-75 h-75 m-auto text-black p-5"
          style={{ backgroundColor: "#302bc8;" }}
        >
          digital platform for distance learning
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
