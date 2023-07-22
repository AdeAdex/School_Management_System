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
          <div
            className="tw-capitalize tw-text-center tw-py-6 tw-text-lg tw-font-bold"
            id="menu"
          >
            personal menu
          </div>
          <div className="tw-px-4 tw-grid tw-gap-y-12">
            <div className="tw-grid tw-gap-y-5">
              <StudentDashboardOffcanvasTitle title="main menu" />
              <StudentDashboardOffcanvasList item="dashboard" params="/student_dashboard/home" icons="fas fa-border-all" />
            </div>
            <div className="tw-grid tw-gap-y-5">
              <StudentDashboardOffcanvasTitle title="profile" />
              <StudentDashboardOffcanvasList item="my profile" params="/student_dashboard/profile" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="change password" params="/student_dashboard/change_password" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="edit details" params="/student_dashboard/edit_details" icons="fas fa-edit" />
            </div>
            <div className="tw-grid tw-gap-y-5">
              <StudentDashboardOffcanvasTitle title="academics" />
              <StudentDashboardOffcanvasList item="resources" params="/student_dashboard/resources" icons="fas fa-file"/>
              <StudentDashboardOffcanvasList item="course registration" params="/student_dashboard/course_registration" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="registration history" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
            </div>
            <div className="tw-grid tw-gap-y-5">
              <StudentDashboardOffcanvasTitle title="payment" />
              <StudentDashboardOffcanvasList item="pay tuition" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="payment history" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
            </div>
            <div className="tw-grid tw-gap-y-5">
              <StudentDashboardOffcanvasTitle title="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboardOffcanvas_On_Small_Screen