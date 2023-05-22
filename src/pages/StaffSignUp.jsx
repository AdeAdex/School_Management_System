import React from 'react'
import StaffSignupForm from '../components/staffSignupComponents/StaffSignupForm'
import { StaffSignupHero } from '../components/staffSignupComponents/StaffSignupHero'


const StaffSignUp = () => {
  return (
    <>
        <section
        className="signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{ width: "75%", height: "100%" }}
      >
        <StaffSignupHero/>
        <StaffSignupForm/>
      </section>
    </>
  )
}

export default StaffSignUp