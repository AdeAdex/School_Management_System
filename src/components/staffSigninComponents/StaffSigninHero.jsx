import React from 'react'
import { Link } from 'react-router-dom'

const StaffSigninHero = () => {
  return (
    <>
        <div className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signin-header" style={{backgroundImage: "url('pic/teacher14.jpg')"}}>
        <Link to="/staff_signup" style={{color: 'white'}}><i className="fas fa-circle-chevron-left" style={{ fontSize: "30px" }} ></i></Link> 
        <h2
          className="mt-lg-4 header-text"
          style={{ textTransform: "capitalize" }}
        >
          hello,
        </h2>
        <h5>Please fill out the form below</h5>
        <div>to login into your account </div>
        {/* {isLargeScreen ? <SignupCarousel /> : null} */}
      </div>
    </>
  )
}

export default StaffSigninHero