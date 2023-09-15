import React from "react";
import StudentDashboardCalendar from "../../components/studentDashboardComponents/StudentDashboardCalendar";
import StudentDashboardPieChart from "../../components/studentDashboardComponents/StudentDashboardPieChart";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import StudentDetails from "../../components/studentDashboardComponents/StudentDetails";


const StudentDashboardHome = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-between dashboard-home-container w-100 h-100 gap-2">
        <div className="text-black w-100">
          <small className="d-flex flex-column px-4"><h6 className="text-uppercase">Welcome to your dashboard: {globalState.firstName} {" "}  {globalState.lastName}</h6><span className="my-3">You created an account with us on: {globalState.createdDate}</span></small>
          <div className="d-flex gap-3 w-100" style={{flexWrap: 'wrap'}}>
          <StudentDetails
            icons={<FaRegUser />}
            param={`${globalState.studentID}`}
            about="student Id"
          />
          <StudentDetails
            icons={<FaRegUser/>}
            param={`${globalState.level}`}
            about="Current Class"
          />
          <StudentDetails
            icons={<FaRegUser/>}
            param={`${globalState.level}`}
            about="Current Class"
          />
          <StudentDetails
            icons={<FaRegUser/>}
            param={`${globalState.level}`}
            about="Current Class"
          />
          </div>
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
