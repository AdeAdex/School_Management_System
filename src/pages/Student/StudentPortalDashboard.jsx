import React from 'react'

const StudentPortalDashboard = () => {
  return (
    <>
        <section
        id=""
        className="d-flex"
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <div
          className="position-relative"
          id="offCan"
          style={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#030552",
            overflowY: "scroll",
          }}
        >
          <Offcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
          <DashboardNavbar />
          <div className="flex p-5 bg-green-300">
            <Routes>
              <Route path="home" element={<StaffDashboardHome/>} />
              <Route path="profile" element={<StaffProfile />} />
              <Route path="change_password" element={<StaffChangePassword />} />
              <Route path="edit_details" element={<StaffEditDetails/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentPortalDashboard