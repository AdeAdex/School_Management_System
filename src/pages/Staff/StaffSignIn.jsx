import React from 'react'
import StaffSigninHero from '../../components/staffSigninComponents/StaffSigninHero'
import StaffSigninForm from '../../components/staffSigninComponents/StaffSigninForm'

const StaffSignIn = () => {
  return (
    <>
        <section
        className="signin-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
      >
        <StaffSigninHero/>
        <StaffSigninForm/>
      </section>
    </>
  )
}

export default StaffSignIn