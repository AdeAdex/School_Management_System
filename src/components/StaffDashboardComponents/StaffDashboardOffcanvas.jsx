import React from 'react'
import { useSelector } from 'react-redux'
import StaffDashboardOffcanvasTitle from './StaffDashboardOffcanvasTitle'
import StaffDashboardOffcanvasList from './StaffDashboardOffcanvasList'
import StaffDashboardOffcanvasList2 from './StaffDashboardOffcanvasList2'


const StaffDashboardOffcanvas = () => {
  const offcanvasState = useSelector((state) => state.portalReducer.hide_show)

  return (
    <>
      <div
        className="position-relativ"
        id=""
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div className="dashboard-offcanvas w-100 position-relativ text-white">
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
          {!offcanvasState &&
          <div
            className="text-capitalize text-center py-5 fs-5 fw-bold"
            id="menu"
          >
            personal menu
          </div>}
          <div className={`px-4 d-grid gap-5 ${offcanvasState ? 'meme' : ''}`} >
            <div className="d-grid gap-3">
            {!offcanvasState && <StaffDashboardOffcanvasTitle title="main menu" /> }
              <StaffDashboardOffcanvasList item="dashboard" params="/staff_dashboard/home" label="dashboard" icons="fas fa-border-all" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StaffDashboardOffcanvasTitle title="profile" /> }
              <StaffDashboardOffcanvasList item="my profile" params="/staff_dashboard/profile" label="my profile" icons="fas fa-user" />
              <StaffDashboardOffcanvasList item="change password" params="/staff_dashboard/change_password" label="change password" icons="fas fa-lock" />
              <StaffDashboardOffcanvasList item="edit details" params="/staff_dashboard/edit_details" label="edit details" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StaffDashboardOffcanvasTitle title="academics" /> }
              <StaffDashboardOffcanvasList item="resources" params="/staff_dashboard/resources" label="resources" icons="fas fa-file"/>
              <StaffDashboardOffcanvasList item="course registration" params="/staff_dashboard/course_registration" label="course registration" icons="fas fa-user" />
              <StaffDashboardOffcanvasList item="registration history" label="registration history" icons="fas fa-lock" />
              <StaffDashboardOffcanvasList item="results" label="results" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StaffDashboardOffcanvasTitle title="payment" /> }
              <StaffDashboardOffcanvasList item="pay tuition" label="pay tuition" icons="fas fa-user" />
              <StaffDashboardOffcanvasList item="payment history" label="payment history" icons="fas fa-lock" />
            </div>
            <div className="d-grid gap-3 mb-5">
             
              <StaffDashboardOffcanvasList2 item="logout" label="logout" icons="fas fa-user"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StaffDashboardOffcanvas