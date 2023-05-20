import React, { useState } from "react";
import "./SignUp.css";
import SignupHero from "../components/signupComponents/SignupHero";
import SignupForm from "../components/signupComponents/SignupForm";

const SignUp = () => {
  return (
    <>
      <section
        className="signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{ width: "75%", height: "100vh" }}
      >
        <SignupHero />
        <SignupForm />
      </section>
    </>
  );
};

export default SignUp;
