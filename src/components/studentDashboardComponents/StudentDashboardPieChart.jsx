import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentDashboardPieChart = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    let studentEmail = globalState.email;
    let endpoint = "http://localhost:2000/student_account/student_performance";
    axios.post(endpoint, { studentEmail }).then((response) => {
      if (response.data.status) {
        // console.log();
        setPerformance(response.data.res);
      }
    });
  }, [globalState]);

  return (
    <>
      <PieChart
        className="mx-auto"
        style={{ width: "80%" }}
        data={[
          {
            label: "One",
            value: 10,
            color: "#E38627",
            animate: true,
            animationDuration: 500,
            animationEasing: "linear",
          },
          { label: "Two", value: 15, color: "#C13C37" },
          { label: "Three", value: 20, color: "#6A2135" },
          { label: "Four", value: 20, color: "#6fc191" },
        ]}
      />
    </>
  );
};

export default StudentDashboardPieChart;
