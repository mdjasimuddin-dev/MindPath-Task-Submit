import Bannar from "../components/Bannar";
import Card from "../components/Card";
import icon1 from "../assets/up_arrow1.svg";
import icon2 from "../assets/down_arrow2.svg";
import img1 from "../assets/img_1.svg";
import img2 from "../assets/img_2.svg";
import img3 from "../assets/img_3.svg";
import PieCharts from "../components/chart/PieCharts";
import LineCharts from "../components/chart/LineChart";

const Homepage = () => {
  return (
    <div className="font-publicSans ml-10">
      <Bannar />

      {/* Card  */}
      <div className="grid grid-cols-3 gap-5 my-10">
        <Card
          icon={icon1}
          text="Total Active Users"
          parsent="+2.6%"
          user="18,765"
          img={img1}
        />

        <Card
          icon={icon1}
          text="Total Active Users"
          parsent="+0.2%"
          user="4,876"
          img={img2}
        />

        <Card
          icon={icon2}
          text="Total Active Users"
          parsent="-0.1%"
          user="678"
          img={img3}
        />
      </div>

      {/* rechart */}
      <div className="grid grid-cols-3 gap-5 ">
        <div className="gird grid-cols-1">
          <PieCharts />
        </div>

        <div className="gird col-span-2">
          <LineCharts />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
