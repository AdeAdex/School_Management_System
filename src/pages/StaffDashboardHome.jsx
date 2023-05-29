import React from "react";
import DashboardCalendar from "../components/dashboardComponents/DashboardCalendar";
import DashboardPieChart from "../components/dashboardComponents/DashboardPieChart";

const StaffDashboardHome = () => {
  return (
    <>
      <div className="flex p-5">
      <div className="w-9/12 text-black">
        hello dashboard
      </div>
      <div>
        <DashboardCalendar/>
        <DashboardPieChart/>
      </div>
      </div>
    </>
  );
};

export default StaffDashboardHome;
