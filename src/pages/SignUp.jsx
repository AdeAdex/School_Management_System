import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PagesNavbar from "../components/PagesNavbar";
import SignupHero from "../components/signupComponents/SignupHero";
import SignupForm from "../components/signupComponents/SignupForm";

const SignUp = () => {
  return (
    <>
      <PagesNavbar />
      <section
        className="signup-container d-flex flex-lg-row flex-sm-column  mx-auto py-3"
        style={{ width: "75%", height: "", marginTop: "150px" }}
      >
        <SignupHero />
        <SignupForm />
      </section>
    </>
  );
};

export default SignUp;
