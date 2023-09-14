import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentDashboardPieChart = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    let studentEmail = globalState.email;
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_performance";
    axios.post(endpoint, { studentEmail }).then((response) => {
      if (response.data.status) {
        setPerformance(response.data.res);
      }
    });
  }, [globalState]);

  // Helper function to generate random colors
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const categories = ["English", "Math", "Current Affair", "Sciences"];
  const equalPercentage = 100 / categories.length;



  const truncateLabel = (label, maxLabelLength) => {
    if (label.length > maxLabelLength) {
      return label.slice(0, maxLabelLength) + "...";
    }
    return label;
  };


  // Generate data for the PieChart
  const pieChartData = categories.map((category) => ({
    // title: category,
    title: truncateLabel(category, 10),
    value: equalPercentage,
    color: getRandomColor(),
  }));

  return (
    <>
      {/* <PieChart
        className="mx-auto"
        style={{ width: "80%" }}
        data={[
          {
            label: "English",
            value: 10,
            color: "#E38627",
            animate: true,
            animationDuration: 500,
            animationEasing: "linear",
          },
          { label: "Math", value: 15, color: "#C13C37" },
          { label: "Current Affair", value: 20, color: "#6A2135" },
          { label: "Sciences", value: 20, color: "#6fc191" },
        ]}
      /> */}

      <small className="mt-3 fw-bold">Your performance in the entrance exam is indicated below: </small>

      <PieChart
        className="mx-auto"
        style={{ width: "80%" }}
        data={pieChartData}
        label={({ dataEntry }) =>
          `${dataEntry.title}: ${Math.round(dataEntry.value)}%`
        }
        labelStyle={{ fontSize: "5px" }}
      />
    </>
  );
};

export default StudentDashboardPieChart;


// className={bodyClassName} style={bodyStyle}
// className="card-body" style={styles}
