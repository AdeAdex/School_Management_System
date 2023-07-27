import React from 'react'
import SignupCarousel from '../StudentSignupComponents/SignupCarousel';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';



export const StaffSignupHero = () => {
        const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
    <div
        className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header"
        style={{
          width: "30%",
          backgroundColor: "#3c37ff",
          borderRadius: "10px",
          height: "100%",
          backgroundImage: "url('pic/teacher13.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          <i
            className="fas fa-circle-chevron-left"
            style={{ fontSize: "30px" }}
          ></i>
        </Link>
        {/* <div className="d-flex justify-content-center w-100">
          <img
            src="pic/ade.png"
            className="mt-5 mb-lg-5 d-flex align-items-center"
            style={{ width: "50px" }}
            alt=""
          />
        </div> */}

        <h2
          className="mt-lg-5 header-text"
          style={{ textTransform: "capitaliz" }}
        >
          Join us <br />
          
        </h2>
        <h4>be a part of us.</h4>
        <div>Let build the world together</div>
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
    </>
  )
}
