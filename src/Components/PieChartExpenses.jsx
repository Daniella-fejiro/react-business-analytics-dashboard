import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function ExpensePieChart({ expenses }) {
  const COLORS = ["#030c5c", "#8d1108", "#ee9207", "#4d0641", "#114404", "rgba(5, 63, 55, 0.33)"];

  return (
    <div style={{ width:"50%", height: 300 }} className="chartitem">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={expenses}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#1f16c4"
            label
          >
            {expenses.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}