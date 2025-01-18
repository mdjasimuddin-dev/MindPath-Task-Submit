import {
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineCharts = () => {
  const data = [
    {
      name: "Jan",
      uv: 5,
      pv: 5,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 36,
      pv: 32,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 30,
      pv: 8,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 48,
      pv: 48,
      amt: 2000,
    },
    {
      name: "May",
      uv: 48,
      pv: 75,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 60,
      pv: 88,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 65,
      pv: 95,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 92,
      pv: 70,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 148,
      pv: 40,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 32,
      pv: 8,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 56,
      pv: 52,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 58,
      pv: 82,
      amt: 2100,
    },
  ];
  return (
    <div className="shadow-lg my-10 rounded-md">
      <div className="p-6">
        <div className="flex justify-between ">
          <div>
            <h3 className="text-lg font-bold">Area Installed</h3>
            <p className="text-xs text-[#637381]">(+43%) than last year</p>
          </div>
          <div>
            <select
              // onChange={(e) => {
              //   setFilter(e.target.value);
              //   setCurrentPage(1);
              // }}
              // value={filter}
              name="category"
              id="category"
              className="border p-2 rounded-lg"
            >
              <option value="">Filter By year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option selected value="2019">
                2019
              </option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width="100%"
            height={300}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            style={{fontSize : '12px'}}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#FFD666"
              fill="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            {/* <Brush /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;
