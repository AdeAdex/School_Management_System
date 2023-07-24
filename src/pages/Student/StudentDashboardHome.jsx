import React from "react";
import StudentDashboardCalendar from "../../components/studentDashboardComponents/StudentDashboardCalendar";
import StudentDashboardPieChart from "../../components/studentDashboardComponents/StudentDashboardPieChart";

const StudentDashboardHome = () => {
  return (
    <>
      <div className="d-flex p-5 dashboard-home-container">
        <div className=" text-black">hello dashboard</div>
        <div className="right d-flex border flex-column" style={{marginLeft: 'auto'}}>
          <StudentDashboardCalendar />
          <StudentDashboardPieChart />
        </div>
      </div>
    </>
  );
};

export default StudentDashboardHome;
