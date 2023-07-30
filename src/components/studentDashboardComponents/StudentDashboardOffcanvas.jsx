import React from 'react'
import StudentDashboardOffcanvasTitle from './StudentDashboardOffcanvasTitle'
import StudentDashboardOffcanvasList from './StudentDashboardOffcanvasList'
import { useSelector } from 'react-redux'
import StudentDashboardOffcanvasList2 from './StudentDashboardOffcanvasList2'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const StudentDashboardOffcanvas = () => {
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
            {!offcanvasState && <StudentDashboardOffcanvasTitle title="main menu" /> }
              <StudentDashboardOffcanvasList item="dashboard" params="/student_dashboard/home" label="dashboard" icons="fas fa-border-all" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StudentDashboardOffcanvasTitle title="profile" /> }
              <StudentDashboardOffcanvasList item="my profile" params="/student_dashboard/profile" label="my profile" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="change password" params="/student_dashboard/change_password" label="change password" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="edit details" params="/student_dashboard/edit_details" label="edit details" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StudentDashboardOffcanvasTitle title="academics" /> }
              <StudentDashboardOffcanvasList item="resources" params="/student_dashboard/resources" label="resources" icons="fas fa-file"/>
              <StudentDashboardOffcanvasList item="course registration" params="/student_dashboard/course_registration"  label="course registration" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="registration history" label="registration history" icons="fas fa-lock" />
              <StudentDashboardOffcanvasList item="results" label="results" icons="fas fa-edit" />
            </div>
            <div className="d-grid gap-3">
               {!offcanvasState && <StudentDashboardOffcanvasTitle title="payment" /> }
              <StudentDashboardOffcanvasList item="pay tuition" label="pay tuition" icons="fas fa-user" />
              <StudentDashboardOffcanvasList item="payment history" label="payment history" icons="fas fa-lock" />
              {/* <StudentDashboardOffcanvasList item="results" label="" icons="fas fa-edit" /> */}
            </div>
            <div className="d-grid gap-3 mb-5">
              {/* <StudentDashboardOffcanvasTitle title="" /> */}
              {/* <StudentDashboardOffcanvasList item="logout" label="" icons="fas fa-user" /> */}
              <StudentDashboardOffcanvasList2 item="logout" label="logout" icons="fas fa-user"/>
            </div>
          </div>
        </div>
      </div>

      {/* <Box sx={{ width: "50px" }}>
      <Grid container justifyContent="center">
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Box> */}
    </>
  )
}

export default StudentDashboardOffcanvas






