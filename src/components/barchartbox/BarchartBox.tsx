import "./barchart.scss";
import {Bar, ResponsiveContainer, BarChart, Tooltip} from "recharts";

type Props = {
    title: string;
    chartData: object[];
    dataKey: string;
    color: string;
}

export default function Barchart(props: Props) {
  return (
    <div className="barchart">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart  data={props.chartData}>
            <Tooltip
            contentStyle={{background: "#2a3447", borderRadius: "5px"}}
            labelStyle={{display: "none"}}
            cursor={{fill: "transparent"}}
             />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
