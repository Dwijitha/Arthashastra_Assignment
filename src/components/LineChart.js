import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="Year" label={{ value: "Year", position: "insideBottom", offset: -4 }} />
        <YAxis domain={[1, "dataMax"]} label={{ value: "Medals", angle: -90, position: "insideLeft" }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="top" className="legend"/>
        <Line type="monotone" dataKey="Medals" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default Chart;
