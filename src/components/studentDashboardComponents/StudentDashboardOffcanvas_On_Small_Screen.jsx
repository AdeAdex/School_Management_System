import React from 'react'
import StudentDashboardOffcanvasTitle from './StudentDashboardOffcanvasTitle'
import StudentDashboardOffcanvasList from './StudentDashboardOffcanvasList'

const StudentDashboardOffcanvas_On_Small_Screen = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ backgroundColor: "#030552", width: '75%'}}
      >
       <div className="dashboard-offcanvas w-100 position-relative text-white">
          <div
            className="w-full flex justify-center shadow border-b-2"
            style={{ height: "80px" }}
          >
            <img
              src="pic/ade.png"
              alt=""
              className="my-auto"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="capitalize text-center py-6 text-lg font-bold" id="menu">
            personal menu
          </div>
          <div className="px-4 grid gap-y-12">
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="main menu" />
              <StudentDashboardOffcanvasList
                item="dashboard"
                icons="fas fa-border-all"
              />
            </div>
            <div className="grid gap-y-5">
            <StudentDashboardOffcanvasTitle title="profile"/>
            <StudentDashboardOffcanvasList item="my profile" icons="fas fa-user"/>
            <StudentDashboardOffcanvasList item="change password" icons="fas fa-lock"/>
            <StudentDashboardOffcanvasList item="edit details" icons="fas fa-edit"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboardOffcanvas_On_Small_Screen