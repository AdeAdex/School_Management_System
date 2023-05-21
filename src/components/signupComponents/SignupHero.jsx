import React, { useState } from "react";
import SignupCarousel from "./SignupCarousel";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SignupHero = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div
        className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header"
        style={{
          width: "30%",
          backgroundColor: "#3c37ff",
          borderRadius: "10px",
          height: '100%'
        }}
      >
        <Link to="/" style={{color: 'white'}}><i className="fas fa-circle-chevron-left" style={{ fontSize: "30px" }} ></i></Link> 
        <div className="d-flex justify-content-center w-100">
        <img
          src="pic/ade.png"
          className="mt-5 mb-lg-5 d-flex align-items-center"
          style={{ width: "50px" }}
          alt=""
        />
        </div>
       
        <h2 className="mt-lg-5 header-text" style={{ textTransform: "capitalize" }}>
          start your <br />
          journey with us.
        </h2>
        <div>Discover the world best education</div>
          {isLargeScreen ? <SignupCarousel /> : null}
        
      </div>
    </>
  );
};

export default SignupHero;
