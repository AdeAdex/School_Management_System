import React, { useEffect, useRef, useState } from 'react'
import StaffDashboardOffcanvasTitle from './StaffDashboardOffcanvasTitle';
import StaffDashboardOffcanvasList from './StaffDashboardOffcanvasList';
import StaffDashboardOffcanvasList2 from './StaffDashboardOffcanvasList2';


const StaffDashboardOffcanvas_On_Small_Screen = () => {
  const offCanvasRef = useRef(null);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen((prev) => !prev); // Toggle the isOffcanvasOpen state
  };
  return (
    <>
        <div
        className="offcanvas offcanvas-start offcanvas-on-small-screen"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ backgroundColor: "#030552", width: '75%', overflowY: 'scroll'}}
        ref={offCanvasRef}
      >
       <div className="dashboard-offcanvas w-100 position-relative text-white">
          <div
            className="w-100 d-flex justify-content-center shadow"
            style={{ height: "80px", width: "100%", borderBottom: '2px solid white' }}
          >
            <img
              src="/pic/ade.png"
              alt=""
              className="my-auto"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div
            className="text-capitalize text-center py-5 fs-5 fw-bold"
            id="menu"
          >
            personal menu
          </div>
          <div className="px-4 d-grid gap-5">
            <div className="d-grid gap-3">
              <StaffDashboardOffcanvasTitle title="main menu" />
              <StaffDashboardOffcanvasList toggleOffcanvas={toggleOffcanvas} item="dashboard" params="/staff_dashboard/home" icons="fas fa-border-all" />
            </div>
            <div className="d-grid gap-3">
              <StaffDashboardOffcanvasTitle title="profile" />
              <StaffDashboardOffcanvasList  item="my profile" params="/staff_dashboard/profile" icons="fas fa-user" />
              <StaffDashboardOffcanvasList  item="change password" params="/staff_dashboard/change_password" icons="fas fa-lock" />
              <StaffDashboardOffcanvasList  item="edit details" params="/staff_dashboard/edit_details" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
              <StaffDashboardOffcanvasTitle title="academics" />
              <StaffDashboardOffcanvasList  item="resources" params="/staff_dashboard/resources" icons="fas fa-file"/>
              <StaffDashboardOffcanvasList  item="course registration" params="/staff_dashboard/course_registration" icons="fas fa-user" />
              <StaffDashboardOffcanvasList  item="registration history" icons="fas fa-lock" />
              <StaffDashboardOffcanvasList  item="results" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
              <StaffDashboardOffcanvasTitle title="payment" />
              <StaffDashboardOffcanvasList  item="pay tuition" icons="fas fa-user" />
              <StaffDashboardOffcanvasList  item="payment history" icons="fas fa-lock" />
              <StaffDashboardOffcanvasList  item="results" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3 mb-5">
              {/* <StaffDashboardOffcanvasTitle title="" /> */}
              <StaffDashboardOffcanvasList2 item="logout" icons="fas fa-user" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StaffDashboardOffcanvas_On_Small_Screen