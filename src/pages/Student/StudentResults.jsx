import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

const StudentResults = () => {
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

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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

  // Calculate the total true count and total count for "Maths"
  const mathsTrueCount = categoryCounts["Maths"]
    ? categoryCounts["Maths"].trueCount
    : 0;
  const mathsTotalCount = categoryCounts["Maths"]
    ? categoryCounts["Maths"].total
    : 0;

  const pieChartData = categories.map((category) => ({
    title: category,
    value:
      category === "Maths"
        ? mathsTotalCount > 0
          ? (mathsTrueCount / mathsTotalCount) * 100
          : 0 // Set Maths to 0% if there is no data
        : categoryCounts[category] && categoryCounts[category].total > 0
        ? (categoryCounts[category].trueCount /
            categoryCounts[category].total) *
          100
        : 0,
    color: getRandomColor(),
  }));

  return (
    <>
      <div className="d-flex flex-column px-3">
        <small className="my-3">Still Working on this Page ...</small>
        <PieChart
          className="mx-auto"
          style={{ width: "80%" }}
          data={pieChartData}
          label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value.toFixed(1)}%`}
          labelStyle={{ fontSize: "4px" }}
        />
      </div>
    </>
  );
};

export default StudentResults;
