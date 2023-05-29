import axios from "axios";
import React, { useEffect, useState } from "react";
import Offcanvas from "../components/dashboardComponents/Offcanvas";
import "../pages/Dashboard.css";
import DashboardCalendar from "../components/dashboardComponents/DashboardCalendar";
import "react-calendar/dist/Calendar.css";
import DashboardPieChart from "../components/dashboardComponents/DashboardPieChart";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newName } from "../redux/portalSlice";
import StaffProfile from "./StaffProfile";

const Dashboard = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [first, setFirst] = useState([]);
  const [hubby, sethubby] = useState("");
  const [country, setcountry] = useState("");
  const [lga, setlga] = useState("");
  // const [myFirstName, setMyFirstName] = useState("");
  // const [myLastName, setMyLastName] = useState("");

  useEffect(() => {
    const endpoint = "http://localhost:2000/staff_account/staff_dashboard";
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
          console.log(response.data.response);
          // setMyFirstName(response.data.response.firstName)
          // setMyLastName(response.data.response.lastName)
          // dispatch(newName(
          //   console.log("ade")
          // ))
          dispatch(newName(response.data.response));
          // console.log(dispatch);
        } else {
          navigate("/staff_signin");
        }
      });
  }, []);

  // const updateDetails = (e) => {
  //  const myUpdate = {
  //     hubby,
  //     country,
  //     lga,
  //   }
  //   e.preventDefault();

  //   console.log(myUpdate);
  //   const endpoint = 'http://localhost:2000/staff_account/staff_dashboard'
  //   axios.post(endpoint, myUpdate)
  //   .then((response) => {

  //   })
  // }

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
          <div className="flex p-5">
            <div className="w-9/12 text-black">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="profile" element={<StaffProfile />} />
              </Routes>
            </div>
            <div>
              <DashboardCalendar />
              <DashboardPieChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
