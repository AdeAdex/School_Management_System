import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SigninHero = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signin-header" style={{backgroundImage: "url('pic/signin_img.png')"}}>
        <Link to="/student_signup" style={{color: 'white'}}><i className="fas fa-circle-chevron-left" style={{ fontSize: "30px" }} ></i></Link> 
        <h2
          className="mt-lg-4 header-text"
          style={{ textTransform: "capitalize" }}
        >
          hi dear
        </h2>
        <h5>To keep connecting with us,</h5>
        <div>Please login with your personal info</div>
        {/* {isLargeScreen ? <SignupCarousel /> : null} */}
      </div>
    </>
  );
};

export default SigninHero;
