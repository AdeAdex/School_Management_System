import React from 'react'
import SignupHero from '../../components/StudentSignupComponents/SignupHero'
import SignupForm from '../../components/StudentSignupComponents/SignupForm'
import { useLocation } from 'react-router-dom';
// import "../Student/StudentSignUp.css"

const StudentSignUp = () => {
  const location = useLocation();
  const isAdmissionPage = location.pathname.startsWith('student/admission/');
  return (
    <>
      <section
        className="signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{ width: "75%", height: "100vh", }}
      >
        {/* <SignupHero/> */}
        {/* <SignupForm/> */}
        {/* {!isAdmissionPage && <SignupHero />}  */}
        <SignupHero isAdmissionPage={isAdmissionPage} />
        <SignupForm />
      </section>
    </>
  )
}

export default StudentSignUp



