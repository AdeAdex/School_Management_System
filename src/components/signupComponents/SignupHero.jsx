import React, { useState } from "react";
import SignupCarousel from "./SignupCarousel";
import { useMediaQuery } from "react-responsive";

const SignupHero = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div
        className="h-100 py-4 px-5 position-relative text-white signup-header"
        style={{
          width: "30%",
          backgroundColor: "#3c37ff",
          borderRadius: "10px",
        }}
      >
        <img
          src="pic/ade.png"
          className="mt-5 mb-lg-5"
          style={{ width: "50px" }}
          alt=""
        />
        <h2 className="mt-lg-5" style={{ textTransform: "capitalize" }}>
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
