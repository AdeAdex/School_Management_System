import axios from "axios";
import React, { useState } from "react";
import Offcanvas from "../components/dashboardComponents/Offcanvas";
import Navbar from "../components/dashboardComponents/Navbar";
import '../pages/Dashboard.css'

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
      <section className="d-flex" style={{width: '100%'}}>
        <Offcanvas/>
        <Navbar/>
      </section>
    </>
  );
};

export default Dashboard;