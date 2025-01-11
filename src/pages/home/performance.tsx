import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic } from "antd";

const Performance = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        {" "}
        <span className="text-xl font-medium">Overview performance</span>{" "}
        <ul className="flex w-fit h-fit bg-gray-300 rounded-md p-1">
          <li className="p-2 px-4 cursor-pointer hover:bg-slate-500 hover:text-white rounded-sm">
            Day
          </li>
          <li className="p-2 px-4 cursor-pointer hover:bg-slate-500 hover:text-white rounded-sm">
            Week
          </li>
          <li className="p-2 px-4 cursor-pointer hover:bg-slate-500 hover:text-white rounded-sm">
            Month
          </li>
          <li className="p-2 px-4 cursor-pointer hover:bg-slate-500 hover:text-white rounded-sm">
            Year
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-8">
        <div className="flex justify-between items-center border-2 border-gray-300 p-5 rounded-md">
          <div className="flex flex-col space-y-2">
            <span className="text-base">Total Views</span>
            <span className="text-3xl font-medium">21,040</span>
            <span className="text-base">From last 15,542</span>
          </div>
          <div className="bg-green-300 rounded-md w-fit h-10 flex items-center space-x-2 p-2">
            <Statistic
              value={432}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
              prefix={<ArrowUpOutlined size={10} />}
            />
          </div>
        </div>
        <div className="flex justify-between items-center  space-y-2 border-2 border-gray-300 p-5 rounded-md">
          <div className="flex flex-col space-y-2">
            <span className="text-base">Visits</span>
            <span className="text-3xl font-medium">5,985</span>
            <span className="text-base">From last 2,002</span>
          </div>
          <div className="bg-green-300 rounded-md w-fit h-fit flex items-center space-x-2 p-2">
            <Statistic
              value={3001}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
              prefix={<ArrowUpOutlined size={10} />}
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-y-2 border-2 border-gray-300 p-5 rounded-md">
          <div className="flex flex-col space-y-2">
            <span className="text-base">Orders</span>
            <span className="text-2xl font-medium">1,253</span>
            <span className="text-base">From last 560</span>
          </div>
          <div className="bg-green-300 rounded-md w-fit h-fit flex items-center space-x-2 p-2">
            <Statistic
              value={516}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
              prefix={<ArrowUpOutlined size={10} />}
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-y-2 border-2 border-gray-300 p-5 rounded-md">
          <div className="flex flex-col space-y-2">
            <span className="text-base">Conversation Rate</span>
            <span className="text-2xl font-medium">85%</span>
            <span className="text-base">From last 90%</span>
          </div>
          <div className="bg-red-200  rounded-md w-fit h-fit flex items-center space-x-2 p-2">
            <Statistic
              value={5}
              precision={0}
              valueStyle={{ color: "#ff0000", fontSize: "1rem" }}
              prefix={<ArrowDownOutlined size={10} />}
              suffix={"%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
