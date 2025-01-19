import { Select } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 170 },
  { month: "Feb", revenue: 200 },
  { month: "Mar", revenue: 220 },
  { month: "Apr", revenue: 270 },
  { month: "May", revenue: 300 },
  { month: "Jun", revenue: 250 },
  { month: "Jul", revenue: 200 },
  { month: "Aug", revenue: 350 },
  { month: "Sep", revenue: 387 },
  { month: "Oct", revenue: 360 },
  { month: "Nov", revenue: 380 },
  { month: "Dec", revenue: 470 },
];

const Revenue = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        {" "}
        <span className="text-xl font-medium">Revenue</span>{" "}
        <ul className="flex w-fit h-fit bg-gray-300 rounded-md">
          <Select
            className="custom-select shadow-sm rounded-md"
            defaultValue="2025"
            options={[
              { value: "2025", label: <span>2025</span> },
              { value: "2024", label: <span>2024</span> },
            ]}
          />
        </ul>
      </div>
      <div className="p-4 bg-gray-200 shadow-lg rounded-md border-2 border-gray-300 mt-2">
        <div className="space-y-2">
          <h2 className="text-xl">Total Revenue</h2>
          <h1 className="text-2xl font-bold">$14,020,110</h1>
          <p className="text-gray-400">
            You gained <span className="text-green-600">$470.00</span> this
            month
          </p>
        </div>
        <div className="mt-5">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
