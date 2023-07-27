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
          <div className="d-flex flex-column justify-content-center">
            <img
              src="/pic/ade.png"
              alt=""
              className=""
              style={{ width: "100px" }}
            />
            <div className="">Adex School</div>
            <div className="">Admission Portal</div>
          </div>
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
          backgroundRepeat: "no-repeat",
        }}
      >
        {isLargeScreen ? (
          <Link to="/" style={{ color: "white" }}>
            <i
              className="fas fa-circle-chevron-left"
              style={{ fontSize: "30px" }}
            ></i>
          </Link>
        ) : null}

        <div className="d-flex justify-content-center w-100">
          <img
            src="pic/ade.png"
            className="mt-5 mb-lg-1 d-flex align-items-center"
            style={{ width: "50px" }}
            alt=""
          />
        </div>

        {isLargeScreen ? (
          <>
            <h2
              className="mt-lg-1 header-text"
              style={{ textTransform: "capitalize" }}
            >
              start your <br />
              journey with us.
            </h2>
            <div>Discover the world best education</div>
          </>
        ) : (
          <div>Discover the world best education</div>
        )}

        {isLargeScreen ? (
          <SignupCarousel
            carousel_content="This is a very nice school for any child who want the best
                education. I really recommend them 💯"
            carousel_content2="The service render at Adex School is simply unbelievable. I'm
                really satisfied with the way my daughter is improving in her
                study"
            carousel_content3="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, minima quia eligendi repellat eius in molestias
                distinctio, expedita labore amet"
            carousel_name1="Grace George"
            carousel_name2="Timson K"
            carousel_name3="Adeolu Adex"
            carousel_role1="Fashionist"
            carousel_role2="Freelancer"
            carousel_role3="Developer"
          />
        ) : null}
      </div>
    )}
      
    </>
  );
};

export default SignupHero;
