import axios from "axios";
import React, { useEffect, useState } from "react";
import Offcanvas from "../components/dashboardComponents/Offcanvas";
import "../pages/Dashboard.css";
import DashboardCalendar from "../components/dashboardComponents/DashboardCalendar";
import "react-calendar/dist/Calendar.css";
import DashboardPieChart from "../components/dashboardComponents/DashboardPieChart";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate()
  const [first, setFirst] = useState([]);
  const [hubby, sethubby] = useState("");
  const [country, setcountry] = useState("");
  const [lga, setlga] = useState("");

  useEffect(() => {
    const endpoint = "http://localhost:2000/staff_account/staff_dashboard";
    let token = localStorage.token
    axios.get(endpoint, { 
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      } 
    })
    .then((response) => {
      if (response.data.status) {
        console.log(response.data.response)
      } else {
        navigate('/staff_signin')
      }
    })
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
              {/* { 
                  
                    <div className="detail" key={eachStudent._id}>
                    <h4>{eachStudent.firstName}</h4>
                      <h2>{eachStudent.lastName}</h2>
                      <h2>{eachStudent.phoneNumber}</h2>
                    </div>
                } */}

              {/* <form method="post" className="">
                <input type="text" name="" id="" onChange={(e)=> sethubby(e.target.value)} />
                <input type="text" name="" id="" onChange={(e)=> setcountry(e.target.value)} />
                <input type="text" name="" id="" onChange={(e)=> setlga(e.target.value)}/>
                <button type="submit" className="btn btn-primary" onClick={updateDetails}>Update</button>
              </form> */}
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
