import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const PieCharts = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="shadow-lg my-10 rounded-md">
      <p className="text-lg font-publicSans font-bold p-5">Current Download</p>
      <ResponsiveContainer
        width="100%"
        height={300}
        // style={{ border: "1px solid red" }}
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* Text in the center of the chart */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            +10000
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
