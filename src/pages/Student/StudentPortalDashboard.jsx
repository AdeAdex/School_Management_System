import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "../Student/StudentPortalDashboard.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newStudent } from "../../redux/portalSlice";
import StudentDashboardNavbar from "../../components/studentDashboardComponents/StudentDashboardNavbar";
import StudentDashboardOffcanvas from "../../components/studentDashboardComponents/StudentDashboardOffcanvas";
import StudentProfile from "./StudentProfile";
import StudentChangePassword from "./StudentChangePassword";
import StudentEditDetails from "./StudentEditDetails";
import StudentDashboardHome from "./StudentDashboardHome";
import StudentCourseRegistration from "./StudentCourseRegistration";
import StudentResources from "./StudentResources";
import ChatModal from "../../components/studentDashboardComponents/ChatModal";
import socketClient from 'socket.io-client';
import StudentRegistrationHistory from "./StudentRegistrationHistory";
import StudentResults from "./StudentResults";
import StudentPayment from "./StudentPayment";
import StudentPaymentHistory from "./StudentPaymentHistory";


const StudentPortalDashboard = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  const [content, setContent] = useState("Initial Content");
  let socketRef = useRef()
  const endpoint2 = "http://localhost:2000"

  useEffect(() => {
    const url = `/course_registration?myEmail=${encodeURIComponent(
      globalState.email
    )}&myClass=${encodeURIComponent(
      globalState.level
    )}&myTerm=${encodeURIComponent(
      globalState.term
    )}&myOption=${encodeURIComponent(globalState.options)}`;

    if (window.location.pathname === "/course_registration") {
      navigate(url);
    }

    const endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_portal_dashboard";
    let studentSignInToken = localStorage.studentSignInToken;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentSignInToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          dispatch(newStudent(response.data.response));
          // console.log(globalState);
        } else {
          console.log(response.data.message);
          navigate("/student_signin");
        }
      });

    socketRef.current = socketClient(endpoint2);

  }, [globalState, navigate]);


  return (
    <>
      <section
        id="dashboard"
        className="d-flex"
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <div
          className="position-relativ"
          id="offCan"
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: "#030552",
            overflowY: "scroll",
          }}
        >
          <StudentDashboardOffcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
        <div className="nav-container">
          <StudentDashboardNavbar />
        </div>
          <div
            className="d-flex p-4 centered-container"
            style={{ overflowY: "scroll", height: "90%" }}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <Routes>
                <Route path="home" element={<StudentDashboardHome />} />
                <Route path="profile" element={<StudentProfile globalState={globalState}/>} />
                <Route
                  path="change_password"
                  element={
                    <StudentChangePassword myEmail={globalState.email} />
                  }
                />
                <Route path="edit_details" element={<StudentEditDetails socket={socketRef}/>} />
                <Route path="resources" element={<StudentResources />} />
                <Route
                  path="course_registration"
                  element={
                    <StudentCourseRegistration
                      myEmail={globalState.email}
                      myClass={globalState.level}
                      myTerm={globalState.term}
                      myOption={globalState.options}
                    />
                  }
                />
                <Route path="registration_history" element={<StudentRegistrationHistory/>} />
                <Route path="results" element={<StudentResults/>} />
                <Route path="pay_tuition" element={<StudentPayment/>} />
                <Route path="payment_history" element={<StudentPaymentHistory/>} />
              </Routes>
            )}
          </div>
        </div>
      </section>

    </>
  );
};

export default StudentPortalDashboard;




