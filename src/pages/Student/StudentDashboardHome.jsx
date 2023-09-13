import React from "react";
import StudentDashboardCalendar from "../../components/studentDashboardComponents/StudentDashboardCalendar";
import StudentDashboardPieChart from "../../components/studentDashboardComponents/StudentDashboardPieChart";
import { useSelector } from "react-redux";


const StudentDashboardHome = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-between dashboard-home-container w-100 h-100">
        <div className=" text-black">
          <small className="d-flex flex-column px-4">Welcome to your dashboard: <span className="my-3">You created an account with us on: {globalState.createdDate}</span></small>
        </div>
        <div className="dashboard-home-container-right d-flex shadow p-3 flex-column justify-content-center gap-2" style={{width: '350px', marginLeft: 'auto'}}>
          <StudentDashboardCalendar />
          <StudentDashboardPieChart />
        </div>
      </div>
    </>
  );
};

export default StudentDashboardHome;
