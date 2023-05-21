import React from 'react'
import { useMediaQuery } from 'react-responsive'


const SigninHero = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
    <div
        className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signin-header"
      >
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