import React from 'react'
import StudentDashboardOffcanvasTitle from './StudentDashboardOffcanvasTitle'
import StudentDashboardOffcanvasList from './StudentDashboardOffcanvasList'

const StudentDashboardOffcanvas = () => {
  return (
    <>
      <div
        className="position-relative tailwind-page"
        id=""
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div className="dashboard-offcanvas w-100 position-relative text-white">
          <div
            className="w-full flex justify-center shadow border-b-2"
            style={{ height: "80px", width: "100%" }}
          >
            <img
              src="pic/ade.png"
              alt=""
              className="my-auto"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div
            className="capitalize text-center py-6 text-lg font-bold"
            id="menu"
          >
            personal menu
          </div>
          <div className="px-4 grid gap-y-12">
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="main menu" />
              <StudentDashboardOffcanvasList item="dashboard" params="/student_dashboard/home" icons="fas fa-border-all" />
            </div>
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="profile" />
              <StudentDashboardOffcanvasList item="my profile" params="/student_dashboard/profile" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="change password" params="/student_dashboard/change_password" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="edit details" params="/student_dashboard/edit_details" icons="fas fa-edit" />
            </div>
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="academics" />
              <StudentDashboardOffcanvasList item="resources" params="/student_dashboard/resources" icons="fas fa-file"/>
              <StudentDashboardOffcanvasList item="course registration" params="/student_dashboard/course_registration" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="registration history" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
            </div>
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="payment" />
              <StudentDashboardOffcanvasList item="pay tuition" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="payment history" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
            </div>
            <div className="grid gap-y-5">
              <StudentDashboardOffcanvasTitle title="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboardOffcanvas
