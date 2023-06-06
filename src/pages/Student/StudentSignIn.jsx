import React from "react";
import SigninForm from "../../components/StudentSigninComponents/SigninForm";
import SigninHero from "../../components/StudentSigninComponents/SigninHero";
import "../Student/StudentSignIn.css"

const StudentSignIn = () => {
  return (
    <>
      <section className="signin-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3">
        <SigninHero />
        <SigninForm />
      </section>
    </>
  );
};

export default StudentSignIn;
