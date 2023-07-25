import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Staff/Dashboard.css";
import "react-calendar/dist/Calendar.css";
import DashboardNavbar from "../../components/dashboardComponents/DashboardNavbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newName } from "../../redux/portalSlice";
import StaffProfile from "./StaffProfile";
import StaffChangePassword from "./StaffChangePassword";
import StaffDashboardHome from "./StaffDashboardHome";
import StaffEditDetails from "./StaffEditDetails";
import StaffDashboardOffcanvas from "../../components/StaffDashboardComponents/StaffDashboardOffcanvas";
import StaffDashboardNavbar from "../../components/StaffDashboardComponents/StaffDashboardNavbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const endpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/staff_dashboard";
    let token = localStorage.token;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          dispatch(newName(response.data.response));
        } else {
          navigate("/staff_signin");
        }
      });
  }, []);

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
          <StaffDashboardOffcanvas/>
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
        <div className="nav-container">
          <StaffDashboardNavbar/>
        </div>
          <div
            className="d-flex p-4 centered-container"
            style={{ overflowY: "scroll", height: "90%" }}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <Routes>
              <Route path="home" element={<StaffDashboardHome/>} />

              <Route path="profile" element={<StaffProfile />} />
              <Route path="change_password" element={<StaffChangePassword />} />
              <Route path="edit_details" element={<StaffEditDetails/>}/>
              </Routes>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
