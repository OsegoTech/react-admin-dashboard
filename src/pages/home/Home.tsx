import Barchart from "../../components/barchartbox/BarchartBox";
import Piechart from "../../components/barchartbox/piechart/Piechart";
import Chartbox from "../../components/chartbox/Chartbox";
import Topbox from "../../components/topbox/Topbox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct}/>
      </div>
      <div className="box box4"><Piechart /></div>
      <div className="box box5">
        <Chartbox {...chartBoxRevenue}/>
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxConversion}/>
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8"><Barchart {...barChartBoxVisit} /></div>
      <div className="box box9"><Barchart {...barChartBoxRevenue}/></div>
    </div>
  );
}
