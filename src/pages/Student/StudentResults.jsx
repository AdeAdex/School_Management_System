import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

const StudentDashboardBarChart = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const studentEmail = globalState.email;
    const endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_performance";
    axios.post(endpoint, { studentEmail }).then((response) => {
      if (response.data.status) {
        setPerformance(response.data.res);
      }
    });
  }, [globalState]);

  const categoryCounts = {};
  performance.forEach((item) => {
    const { category, correctness } = item;
    if (!categoryCounts[category]) {
      categoryCounts[category] = {
        total: 0,
        trueCount: 0,
      };
    }
    categoryCounts[category].total++;
    if (correctness) {
      categoryCounts[category].trueCount++;
    }
  });

  const categories = ["English", "Maths", "Current Affair", "Sciences"];

  const mathsTrueCount = categoryCounts["Maths"]
    ? categoryCounts["Maths"].trueCount
    : 0;
  const mathsTotalCount = categoryCounts["Maths"]
    ? categoryCounts["Maths"].total
    : 0;

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: "Performance (%)",
        data: categories.map((category) =>
          category === "Maths"
            ? mathsTotalCount > 0
              ? (mathsTrueCount / mathsTotalCount) * 100
              : 0
            : categoryCounts[category] && categoryCounts[category].total > 0
            ? (categoryCounts[category].trueCount /
                categoryCounts[category].total) *
              100
            : 0
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <>
      <small className="mt-3 fw-bold">
        Your performance in the entrance exam is indicated below:{" "}
      </small>

      <Bar data={barChartData} options={options} />
    </>
  );
};

export default StudentDashboardBarChart;
