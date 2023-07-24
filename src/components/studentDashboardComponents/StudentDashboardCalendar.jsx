import React, { useState } from 'react'
import Calendar from 'react-calendar'


const StudentDashboardCalendar = () => {
        const [myCalendar, setMyCalendar] = useState(new Date())
  return (
    <>
    <Calendar className="shadow mx-auto" onChange={setMyCalendar} value={myCalendar}/>
    </>
  )
}

export default StudentDashboardCalendar