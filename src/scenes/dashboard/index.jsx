import React from "react";
import Bar from "../../components/Bar";
import Pie from "../../components/Pie";
import Earning from "../../components/Earning";
import Sale from "../../components/Sale";

const Dashboard = () => {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Create space between the items
  };

  return (
    <div>
      <Earning />
      <div style={flexContainerStyle}>
        <Bar />
        <Pie />
      </div>
      <Sale />
    </div>
  );
};

export default Dashboard;
