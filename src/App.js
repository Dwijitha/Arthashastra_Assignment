import React, { useState } from "react";
import Table from "./components/Table"; 
import LineChart from "./components/LineChart"; 
import data from "./dummyData.json";
import './App.css'; 

function App() {
  const [activeTab, setActiveTab] = useState("table");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <h1>Olympic Track Records</h1>
      <div className="button-container"> {/* Apply class name to the button container */}
        <button onClick={() => handleTabClick("table")}>Show Table</button>
        <button onClick={() => handleTabClick("chart")}>Show Chart</button>
      </div>
      <div className="content-container">
        {activeTab === "table" && <Table data={data} />}
        {activeTab === "chart" && <LineChart data={data} />}
      </div>
    </div>
  );
}

export default App;
