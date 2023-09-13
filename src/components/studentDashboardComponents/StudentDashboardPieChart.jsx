import React, { useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import axios from "axios";
import { useSelector } from "react-redux";



const StudentDashboardPieChart = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  useEffect(() => {
    let studentEmail = globalState.email
    let endpoint = "http://localhost:2000/student_account/student_performance"
    axios.post(endpoint, { studentEmail })
    .then((response) => {
      if (response.data.status) {
        console.log(response);
      }
    })
  }, [globalState])
  
  return (
    <>
    <PieChart className='mx-auto' style={{width: '80%'}}
        data={[
          { title: "One", value: 10, color: "#E38627" , animate: true, animationDuration:500, animationEasing: "linear" },
          { title: "Two", value: 15, color: "#C13C37" },        
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
      />
    </>
  )
}

export default StudentDashboardPieChart