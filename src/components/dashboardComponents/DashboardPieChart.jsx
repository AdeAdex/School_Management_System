import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Pie3D } from "react-pie3d";

const DashboardPieChart = () => {
        
 
  return (
    <>
      <PieChart
        data={[
          { title: "One", value: 10, color: "#E38627" , animate: true, animationDuration:500, animationEasing: "linear" },
          { title: "Two", value: 15, color: "#C13C37" },        
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
      />
    </>
  );
};

export default DashboardPieChart;
