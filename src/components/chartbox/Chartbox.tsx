import { Link } from "react-router-dom";
import "./chartbox.scss";
import { ResponsiveContainer, Line, LineChart, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: string | number;
    percentage: number;
    chartData: object[];
}



export default function Chartbox(props: Props) {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/userlist" style={{color: props.color}}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
                <Tooltip
                contentStyle={{background: "transparent", border: "none"}}
                labelStyle={{display: "none"}}
                // position={{x:100, y: 50}}
                 />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}
