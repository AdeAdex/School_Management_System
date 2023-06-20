import axios from "axios";
import React, { useEffect } from "react";
import "../Student/StudentPortalDashboard.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newStudent } from "../../redux/portalSlice";
import StudentDashboardNavbar from "../../components/studentDashboardComponents/StudentDashboardNavbar";
import StudentDashboardOffcanvas from "../../components/studentDashboardComponents/StudentDashboardOffcanvas";
import StudentProfile from "./StudentProfile";
import StudentChangePassword from "./StudentChangePassword";
import StudentEditDetails from "./StudentEditDetails";
import StudentDashboardHome from "./StudentDashboardHome";
import StudentCourseRegistration from "./StudentCourseRegistration";

const StudentPortalDashboard = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const endpoint = "http://localhost:2000/student_account/student_portal_dashboard";
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
          // console.log(response.data.response);
          console.log(response.data.message);
          dispatch(newStudent(response.data.response));
        } else {
          console.log(response.data.message);
          navigate("/student_signin");
        }
      });
  }, []);
  return (
    <>
      <section
        id=""
        className="d-flex"
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <div
          className="position-relative"
          id="offCan"
          style={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#030552",
            overflowY: "scroll",
          }}
        >
          <StudentDashboardOffcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
          <StudentDashboardNavbar />
          <div className="flex p-5 bg-green-300">
            <Routes>
              <Route path="home" element={<StudentDashboardHome />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="change_password" element={<StudentChangePassword />} />
              <Route path="edit_details" element={<StudentEditDetails />} />
              <Route path="course_registration" element={<StudentCourseRegistration/>} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentPortalDashboard;
