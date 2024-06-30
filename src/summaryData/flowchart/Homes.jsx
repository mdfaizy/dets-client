import axios from "axios";
import { useState,useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Cell,
} from "recharts";
import styles from "./Home.module.css";
// import Sidebar from "../sidebar/Sidebar";

// Dummy data for the charts
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const years = ["New", "EXIT", "PG", "JOB", "PASS", "FAIL", "TOTAL STUDENT"];
const student = years.map((year) => ({
  name: year,
  value: getRandomInt(10, 300),
}));
const admissions = years.map((year) => ({
  name: year,
  count: getRandomInt(5, 300),
}));
const data = { 
  student, admissions };

// Dummy data for top selling products
const topSellingProducts = [
  { name: "Mail", value: 240 },
  { name: "Feamil", value: 130 },
  { name: "Domicile", value: 80 },
  { name: "IT", value: 50 },
  { name: "EIE", value: 60 },
];

// Colors for each slice of the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const Homes = () => {



  return (
    <div className={styles.container}>
      {/* <Sidebar /> */}
      <div className={styles.home_dashboard}>
        <h1 className={styles.header}>Dashboard</h1>
        <div className={styles.summary}>
          <h2>Student Details</h2>
          {/* Summary components here */}
        </div>
        <div className={styles.charts}>
          <div className={styles.
            student_chart}>
            <h2>Student Info</h2>
            <BarChart width={500} height={300} data={data.
              student
            }>
              <XAxis dataKey="name"  />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#ccc" />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div className={styles.admissions_chart}>
            <h2>Student</h2>
            <LineChart width={500} height={300} data={data.admissions}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#ccc" />
              <Line type="monotone" dataKey="count" stroke="#82ca9d" />
            </LineChart>
          </div>
          {/* Additional charts like PieChart for order types can be added here */}
          <div className={styles.top_selling_chart}>
            <h2>Student</h2>
            <PieChart width={600} height={400} >
              <Pie
                data={topSellingProducts}
                cx={300}
                cy={200}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {topSellingProducts.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
