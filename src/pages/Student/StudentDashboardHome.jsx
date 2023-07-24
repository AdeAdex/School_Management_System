import React from "react";
import StudentDashboardCalendar from "../../components/studentDashboardComponents/StudentDashboardCalendar";
import StudentDashboardPieChart from "../../components/studentDashboardComponents/StudentDashboardPieChart";

const StudentDashboardHome = () => {
  return (
    <>
      <div className="d-flex justify-content-between dashboard-home-container w-100 h-100">
        <div className=" text-black">hello dashboard</div>
        <div className="right d-flex shadow p-3 flex-column justify-content-center gap-2" style={{width: '350px', marginLeft: 'auto'}}>
          <StudentDashboardCalendar />
          <StudentDashboardPieChart />
        </div>
      </div>
    </>
  );
};

export default StudentDashboardHome;
