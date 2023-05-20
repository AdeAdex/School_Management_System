import React, { useState } from "react";
import SigninHero from "../components/signinComponents/SigninHero";
import SigninForm from "../components/signinComponents/SigninForm";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <section
        className="signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{ width: "75%", height: "100%" }}
      >
        <SigninHero />
        <SigninForm />
      </section>
    </>
  );
};

export default SignIn;
