import React from 'react'
import { useMediaQuery } from 'react-responsive'


const SigninHero = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
    <div
        className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header"
        style={{
          width: "50%",
          backgroundColor: "#3c37ff",
          borderRadius: "10px",
          height: '100%'
        }}
      >
        <img
          src="pic/ade.png"
          className="mt-5 mb-lg-5"
          style={{ width: "50px" }}
          alt=""
        />
        <h2 className="mt-lg-5 header-text" style={{ textTransform: "capitalize" }}>
          start your <br />
          journey with us.
        </h2>
        <div>Discover the world best education</div>
          {/* {isLargeScreen ? <SignupCarousel /> : null} */}
        
      </div>
    </>
  )
}

export default SigninHero