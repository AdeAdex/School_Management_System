import React from "react";
import StudentDashboardCalendar from "../../components/studentDashboardComponents/StudentDashboardCalendar";
import StudentDashboardPieChart from "../../components/studentDashboardComponents/StudentDashboardPieChart";
import { useSelector } from "react-redux";
import { FaRegUser, FaUser, FaGraduationCap, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import StudentDetails from "../../components/studentDashboardComponents/StudentDetails";


const StudentDashboardHome = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-between dashboard-home-container w-100 h-100 gap-2">
        <div className="text-black w-100 pe-3 dashboard-home-container-left">
          <small className="d-flex flex-column px-4 mb-5 text-white py-4" style={{backgroundColor: '#030552', borderRadius: '5px'}}><h6 className="text-uppercase">Welcome to your dashboard: {globalState.firstName} {" "}  {globalState.lastName}</h6><span className="my-3">You created an account with us on: {globalState.createdDate}</span></small>
          <div className="d-flex gap-3 w-100" style={{flexWrap: 'wrap'}}>
          <StudentDetails
            icons={<FaUser />}
            param={`${globalState.studentID}`}
            about="student Id"
          />
          <StudentDetails
            icons={<FaGraduationCap />}
            param={`${globalState.level}`}
            about="Current Class"
          />
          <StudentDetails
            icons={<FaCalendarAlt />}
            param={`${globalState.term}`}
            about="Current Term"
          />
          <StudentDetails
            icons={<FaBuilding />}
            param={`${globalState.options}`}
            about="Faculty"
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
