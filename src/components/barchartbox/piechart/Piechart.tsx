import "./piechart.scss";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export default function Piechart() {
  return (
    <div className="piechart">
      <h1>Leads by source</h1>
      div
      <ResponsiveContainer width={"99%"} height={300}>
        <PieChart >
            <Tooltip 
            contentStyle={{background: "white", borderRadius: "5px"}}
            />
          <Pie
            data={data}
        
            innerRadius={"70%"}
            outerRadius={"90%"}
            // fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
