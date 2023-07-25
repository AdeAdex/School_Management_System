import React, { useEffect, useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footerComponents/Footer";
import CollapseContainer from "./CollapseContainer";

const LoginAccountType = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const navigate = useNavigate();

  const handleAccountTypeClick = (accountType) => {
    setSelectedAccountType(accountType);
  };

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
    // alert(event.target.value);
  };

 const toLogin = () => {
    if (selectedAccountType === "teacher") {
      navigate('/staff_signin')
    } else if (selectedAccountType === "student") {
      navigate('/student_login')
    } else {
      alert("pick")
    }
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check if the media size is small
  const checkMediaSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };


  useEffect(() => {
    setSelectedAccountType("")
    checkMediaSize();

    // Add event listener to check media size on window resize
    window.addEventListener("resize", checkMediaSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMediaSize);
    };
  }, [])
  

  return (
    <>
      <PagesNavbar />
      <section
        className="w-100 d-flex"
        style={{
          height: "100%",
          backgroundColor: "#F8F9FD",
          paddingTop: "170px",
        }}
      >
        <div className="m-auto w-lg-50 w-sm-100 shadow px-5 py-5 h-100 d-flex flex-column justify-content-center">
          <div>
            <div className="text-center text-capitalize fs-3 fw-bold">
              welcome to Adex school
            </div>
            <div className="text-center fw-bold">
              Select one of the options below
            </div>
          </div>
          <div className="d-flex gap-4 mt-4 mx-auto">
            <div
              className="shadow position-relative text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                outline: "1px solid #1F9FEF",
                cursor: "pointer",
              }}
              onClick={() => handleAccountTypeClick("teacher")}
            >
              <input
                type="radio"
                name="accountType"
                value="teacher"
                checked={selectedAccountType === "teacher"}
                onChange={handleAccountTypeChange}
                style={{ position: "absolute", right: "10px", top: "10px" }}
              />
              <span>teacher</span>
              <img
                src="/pic/teacher_avatar5.jpg"
                className="mx-auto"
                style={{ height: "80%", width: "80%", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <div
              className="shadow position-relative text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                outline: "1px solid #1F9FEF",
                cursor: "pointer",
              }}
              onClick={() => handleAccountTypeClick("student")}
            >
              <input
                type="radio"
                name="accountType"
                value="student"
                checked={selectedAccountType === "student"}
                onChange={handleAccountTypeChange}
                style={{ position: "absolute", right: "10px", top: "10px" }}
              />
              <span>student</span>
              <img
                src="/pic/teacher_avatar4.jpg"
                className="mx-auto"
                style={{ height: "80%", width: "80%", borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
          <div className="mt-5 d-flex">
            <button className="btn btn-primary btn-sm px-5 mx-auto text-capitalize" onClick={toLogin}>
              next
            </button>
          </div>
            <div className="mt-5">
              <div className="text-center mb-3" style={{fontFamily: "cursive"}}>Adex protects your privacy</div>
              {isSmallScreen ? (
                <CollapseContainer btn_txt="read more" content="We use data provided by members to enhance their experience on our platform and deliver personalized content and services. Our privacy policy outlines how we collect, use, and safeguard your data. We are committed to maintaining the confidentiality and security of all member information. Your trust is of utmost importance to us, and we strive to uphold the highest standards in protecting your privacy. If you have any concerns or questions about our privacy practices, please do not hesitate to contact us. Your privacy is paramount, and we value your continued trust in our platform."/>
              ) : (
                <div style={{fontFamily: 'monospace'}}>We use data provided by members to enhance their experience on our platform and deliver personalized content and services. Our privacy policy outlines how we collect, use, and safeguard your data. We are committed to maintaining the confidentiality and security of all member information. Your trust is of utmost importance to us, and we strive to uphold the highest standards in protecting your privacy. If you have any concerns or questions about our privacy practices, please do not hesitate to contact us. Your privacy is paramount, and we value your continued trust in our platform.</div>
              )}
              
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default LoginAccountType;
