import React, { useEffect, useState } from 'react'
import SignupHero from '../../components/StudentSignupComponents/SignupHero'
import SignupForm from '../../components/StudentSignupComponents/SignupForm'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import "../Student/StudentSignUp.css"

const StudentSignUp = () => {
  const location = useLocation();
  const isAdmissionPage = location.pathname.startsWith('/student/admission/');
  // const [dialCode, setDialCode] = useState([])

  // useEffect(() => {
  //   let endpoint = "http://localhost:2000/staff_account/dial_code"
  //   axios.get(endpoint)
  //   .then((response) => {
  //     setDialCode(response.data);
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching countries:", error);
  //   });
  // }, [])
  

  return (
    <>
      <section
        className="signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{ width: "75%", height: "100vh", }}
      >
        <SignupHero isAdmissionPage={isAdmissionPage} />
        <SignupForm isAdmissionPage={isAdmissionPage}/>
      </section>
    </>
  )
}

export default StudentSignUp



