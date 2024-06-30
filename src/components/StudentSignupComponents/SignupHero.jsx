import React, { useState } from "react";
import SignupCarousel from "./SignupCarousel";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SignupHero = ({ isAdmissionPage }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {isAdmissionPage ? (
        <div
          className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header justify-content-center align-items-center"
          style={{
            width: "30%",
            backgroundColor: "#3c37ff",
            borderRadius: "10px",
            height: "100%",
            backgroundImage: "url('/pic/signupimg.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          {isLargeScreen ? (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Link to="/">
                <img
                  src="/pic/ade.png"
                  alt=""
                  className=""
                  style={{ width: "100px" }}
                />
              </Link>
              <div>
                <div className="fw-bold fs-4" style={{ fontFamily: "" }}>
                  Adex School
                </div>
                <div className="fs-6 mt-3" style={{ fontFamily: "georgia" }}>
                  Admission Portal
                </div>
              </div>
            </div>
          ) : (
            <div className="w-100 d-flex flex-colum justify-content-cente align-items-cente">
              <Link to="/">
                <img
                  src="/pic/ade.png"
                  alt=""
                  className="ms-0"
                  style={{ width: "50px" }}
                />
              </Link>
              <div
                className="fw-bold fs-4 d-flex mt-auto mx-auto"
                style={{ fontFamily: "" }}
              >
                Adex School
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header"
          style={{
            width: "30%",
            backgroundColor: "#3c37ff",
            borderRadius: "10px",
            height: "100%",
            backgroundImage: "url('/pic/signupimg.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            <i
              className="fas fa-circle-chevron-left"
              style={{ fontSize: "30px" }}
            ></i>
          </Link>

          <div className="d-flex justify-content-center w-100">
            <img
              src="/pic/ade.png"
              className="mt-5 mb-lg-1 d-flex align-items-center"
              style={{ width: "50px" }}
              alt=""
            />
          </div>

          <h2
            className="mt-lg-1 header-text"
            style={{ textTransform: "capitalize" }}
          >
            start your <br />
            journey with us.
          </h2>
          <div>Discover the world best education</div>

          {isLargeScreen ? (
            <SignupCarousel
              carousel_content="This is a very nice school for any child who want the best
                education. I really recommend them 💯"
              carousel_content2="The service render at Adex International School is simply unbelievable. I'm
                really satisfied with the way my daughter is improving in her
                study"
                carousel_content3="Adex International School nurtures creativity, with dedicated staff and innovative teaching, making a significant impact on my child's education."
              carousel_name1="Grace Ojegbile"
              carousel_name2="Felix Owolabi"
              carousel_name3="Bunmi Aasa"
              carousel_role1="Fashionist"
              carousel_role2="Developer"
              carousel_role3="Banker"
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SignupHero;
