import axios from "axios";
import React, { useEffect, useState } from "react";
import Offcanvas from "../components/dashboardComponents/Offcanvas";
import "../pages/Dashboard.css";
import "react-calendar/dist/Calendar.css";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newName } from "../redux/portalSlice";
import StaffProfile from "./StaffProfile";
import StaffChangePassword from "./StaffChangePassword";
import StaffDashboardHome from "./StaffDashboardHome";
import StaffEditDetails from "./StaffEditDetails";

const Dashboard = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
        console.log(response);
        if (response.data.status) {
          console.log(response.data.response);
          dispatch(newName(response.data.response));
        } else {
          navigate("/staff_signin");
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
          <Offcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
          <DashboardNavbar />
          <div className="flex p-5 bg-green-300">
            <Routes>
              <Route path="home" element={<StaffDashboardHome/>} />
              <Route path="profile" element={<StaffProfile />} />
              <Route path="change_password" element={<StaffChangePassword />} />
              <Route path="edit_details" element={<StaffEditDetails/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
