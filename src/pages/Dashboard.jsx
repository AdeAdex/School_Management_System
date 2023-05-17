import axios from "axios";
import React, { useState } from "react";
import Offcanvas from "../components/dashboardComponents/Offcanvas";
import "../pages/Dashboard.css";
import DashboardCalendar from "../components/dashboardComponents/DashboardCalendar";
import 'react-calendar/dist/Calendar.css';
import DashboardPieChart from "../components/dashboardComponents/DashboardPieChart";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";

const Dashboard = () => {
  const [first, setfirst] = useState([]);

  const endpoint = "http://localhost:2000/student_account/dashboard";
  axios.get(endpoint).then((response) => {
    // console.log(response.data)
    setfirst(response.data);
  });

  return (
    <>
      {/* <div style={{ marginTop: "" }}>
        <h1 className="text-center text-capitalize my-3">
          Welcome to the dashboard
        </h1>
        <table className="table table-striped table-bordered table-responsive ">
          <thead>
            <tr className="text-center">
              <td>S/N</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Email</td>
              <td>PhoneNumber</td>
            </tr>
          </thead>
          {first.map((eachStudent, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{first[index].firstName}</td>
                <td>{first[index].lastName}</td>
                <td>{first[index].email}</td>
                <td>{first[index].phoneNumber}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div> */}
      <section id="" className="d-flex" style={{ width: "100%" }}>
        <div
          className="position-relative"
          id="offCan"
          style={{
            width: "20%",
            overflow: "hidden",
            height: "100vh",
            backgroundColor: "#030552",
          }}
        >
          <Offcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
        <DashboardNavbar/>
          <div className="flex">
            <div className="w-9/12">left</div>
            <div>
            <DashboardCalendar/>
            <DashboardPieChart/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
