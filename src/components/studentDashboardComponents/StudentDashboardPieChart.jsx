import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentDashboardPieChart = () => {
  let globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    let studentEmail = globalState.email;
    let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_performance";
    axios.post(endpoint, { studentEmail }).then((response) => {
      if (response.data.status) {
        setPerformance(response.data.res);
      }
    });
  }, [globalState]);

  // const categoryPercentages = {};
  // performance.forEach((item) => {
  //   if (!categoryPercentages[item.category]) {
  //     categoryPercentages[item.category] = { correct: 0, total: 0 };
  //   }
  //   if (item.correctness) {
  //     categoryPercentages[item.category].correct++;
  //   }
  //   categoryPercentages[item.category].total++;
  // });

  // const pieChartData = Object.keys(categoryPercentages).map((category) => ({
  //   label: category, // This sets the category name as the label
  //   value: (categoryPercentages[category].correct / categoryPercentages[category].total) * 100,
  //   color: getRandomColor(), // Define a function to generate unique colors
  // }));

  // // Function to generate random colors (you can replace this)
  // function getRandomColor() {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  const categoryPercentages = performance.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { correct: 0, total: 0 };
    }
    if (item.correctness) {
      acc[item.category].correct++;
    }
    acc[item.category].total++;
    return acc;
  }, {});



   // Helper function to generate random colors
   const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // // Convert percentages to PieChart data
  // const pieChartData = Object.keys(categoryPercentages).map((category) => ({
  //   title: category,
  //   value:
  //     (categoryPercentages[category].correct /
  //       categoryPercentages[category].total) *
  //     100,
  //   color: getRandomColor(),
  // }));


  const categories = ["English", "Math", "Current Affair", "Sciences"];
  const equalPercentage = 100 / categories.length;

  // Generate data for the PieChart
  const pieChartData = categories.map((category) => ({
    title: category,
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

      {/* <PieChart
        className="mx-auto"
        style={{ width: "80%" }}
        data={pieChartData}
        label={({ dataEntry }) =>
          `${dataEntry.title}: ${Math.round(dataEntry.value)}%`
        } // Display labels with title and percentage
        labelStyle={{ fontSize: "5px" }} // Adjust label font size as needed
        animationDuration={100}
      /> */}


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
