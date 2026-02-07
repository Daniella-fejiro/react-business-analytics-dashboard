import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function DashboardChart({ records }) {
  const chartData = Array.isArray(records)
    ? records.map(record => ({
        date: record.date || "",
        revenue: record.revenue || 0,
        expenses: record.totalExpenses || 0,
        profit: record.profit || 0
      }))
    : [];

  if (chartData.length === 0) return <p>No data available</p>;

  return (
    <div style={{ width: "70%", height: 300 }} className="chartitem">
      <ResponsiveContainer  height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#0a0653" />
          <Line type="monotone" dataKey="expenses" stroke="#125003" />
          <Line type="monotone" dataKey="profit" stroke="#ff0800" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}