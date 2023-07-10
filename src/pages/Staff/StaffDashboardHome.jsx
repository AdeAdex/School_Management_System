import React, { useEffect, useState } from "react";
import DashboardCalendar from "../../components/dashboardComponents/DashboardCalendar";
import DashboardPieChart from "../../components/dashboardComponents/DashboardPieChart";
import axios from "axios";

const StaffDashboardHome = () => {
  const [allStudent, setAllStudent] = useState([])
  useEffect(() => {
    let endpoint = "http://localhost:2000/student_account/allStudent"
    axios.get(endpoint, {
      headers: {
        authorization: `Bearer`,
        contentType: "application/json"
      }
    })
    .then ((response) => {
      // console.log(response.data);
      setAllStudent(response.data.response)
    })

  }, []);

  const upgrade = (personEmail) => {
    let studentEmail = personEmail
    let endpoint = "http://localhost:2000/student_account/upgrade_level"
    axios.post(endpoint, {studentEmail})
    .then((response) => {

    })
  }

  return (
    <>
      <div className="flex p-5 flex-column w-100">
        <div className="w-100 text-black">Dashbord</div>
        <div className="w-100">
          <table className="table table-border table-stripped gap-2 w-100">
            <thead>
              <tr className="text-uppercase">
                <td>first name</td>
                <td>last name</td>
                <td>email</td>
                <td>matric No</td>
                <td>class</td>
                <td>action</td>
              </tr>
            </thead>
            { allStudent.map((student, index) => (
              <tbody key={index}>
              <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.matric}</td>
                <td>{student.level}</td>
                <td>
                  <button onClick={()=> {upgrade(student.email)}}>Upgrade</button>
                </td>
              </tr>
            </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffDashboardHome;
