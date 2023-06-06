import React from 'react'
import StudentDashboardCalendar from '../../components/studentDashboardComponents/StudentDashboardCalendar'
import StudentDashboardPieChart from '../../components/studentDashboardComponents/StudentDashboardPieChart'

const StudentDashboardHome = () => {
  return (
    <>
      <div className="flex p-5">
      <div className="w-9/12 text-black">
        hello dashboard
      </div>
      <div>
        <StudentDashboardCalendar/>
        <StudentDashboardPieChart/>
      </div>
      </div>
    </>
  )
}

export default StudentDashboardHome