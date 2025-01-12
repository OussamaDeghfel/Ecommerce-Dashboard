import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
import { useState } from "react";


const Performance = () => {
  const performancePeriods = ["Day", "Week", "Month", "Year"] as const;
  type PerformancePeriod = typeof performancePeriods[number];

  const [choosedPeroid, setChoosedPeroid] = useState<PerformancePeriod>("Year");

  const performanceData = {
    Day: [
      {
        key: "1",
        title: "Total Views",
        value: 57, // Approx 1/365 of the yearly data
        lastValue: 42,
        rate: 1,
        up: true,
      },
      {
        key: "2",
        title: "Visits",
        value: 7, // Approx 1/365 of the yearly data
        lastValue: 2,
        rate: 1,
        up: true,
      },
      {
        key: "3",
        title: "Orders",
        value: 3, // Approx 1/365 of the yearly data
        lastValue: 1,
        rate: 1.5,
        up: true,
      },
      {
        key: "4",
        title: "Conversation Rate",
        value: "10%",
        lastValue: "5%",
        rate: 5,
        up: true,
      },
    ],
    Week: [
      {
        key: "1",
        title: "Total Views",
        value: 403, // Approx 1/52 of the yearly data
        lastValue: 295,
        rate: 8,
        up: true,
      },
      {
        key: "2",
        title: "Visits",
        value: 46, // Approx 1/52 of the yearly data
        lastValue: 14,
        rate: 6,
        up: true,
      },
      {
        key: "3",
        title: "Orders",
        value: 24, // Approx 1/52 of the yearly data
        lastValue: 2,
        rate: 4,
        up: true,
      },
      {
        key: "4",
        title: "Conversation Rate",
        value: "61%",
        lastValue: "20%",
        rate: 41,
        up: true,
      },
    ],
    Month: [
      {
        key: "1",
        title: "Total Views",
        value: 1753, // Approx 1/12 of the yearly data
        lastValue: 1295,
        rate: 36,
        up: true,
      },
      {
        key: "2",
        title: "Visits",
        value: 201, // Approx 1/12 of the yearly data
        lastValue: 61,
        rate: 29,
        up: true,
      },
      {
        key: "3",
        title: "Orders",
        value: 103, // Approx 1/12 of the yearly data
        lastValue: 10,
        rate: 18,
        up: true,
      },
      {
        key: "4",
        title: "Conversation Rate",
        value: "57%",
        lastValue: "61%",
        rate: 14,
        up: false,
      },
    ],
    Year: [
      {
        key: "1",
        title: "Total Views",
        value: 21040,
        lastValue: 15542,
        rate: 432,
        up: true,
      },
      {
        key: "2",
        title: "Visits",
        value: 2412,
        lastValue: 732,
        rate: 345,
        up: true,
      },
      {
        key: "3",
        title: "Orders",
        value: 1234,
        lastValue: 124,
        rate: 216,
        up: true,
      },
      {
        key: "4",
        title: "Conversation Rate",
        value: "85%",
        lastValue: "57%",
        rate: 29,
        up: true,
      },
    ],
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center">
        {" "}
        <span className="text-xl font-medium">Overview performance</span>{" "}
        <ul className="flex w-fit h-fit bg-gray-300 rounded-md p-1">
          {performancePeriods.map((period, idxPeriod) => (
            <li
              className={`p-2 px-4 cursor-pointer hover:bg-slate-500 ${
                choosedPeroid == period ? "bg-slate-500 text-white font-medium" : ""
              } hover:text-white rounded-sm`}
              key={idxPeriod}
              onClick={() => setChoosedPeroid(period)}
            >
              {period}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-8">
        {performanceData[choosedPeroid].map((data, index) => (
          <div
            className="flex justify-between items-center border-2 border-gray-300 p-5 rounded-md"
            key={index}
          >
            <div className="flex flex-col space-y-2">
              <span className="text-base">{data.title}</span>
              <span className="text-3xl font-medium">{data.value}</span>
              <span className="text-base">From last {data.lastValue}</span>
            </div>
            <div
              className={`${
                data.up ? "bg-green-300" : "bg-red-200"
              } rounded-md w-fit h-10 flex items-center space-x-2 p-2`}
            >
              {data.up ? (
                <Statistic
                  value={data.rate}
                  precision={1}
                  valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
                  prefix={<ArrowUpOutlined size={10} />}
                />
              ) : (
                <Statistic
                  value={data.rate}
                  precision={0}
                  valueStyle={{ color: "#fC0000", fontSize: "1rem" }}
                  prefix={<ArrowDownOutlined size={10} />}
                  suffix="%"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
