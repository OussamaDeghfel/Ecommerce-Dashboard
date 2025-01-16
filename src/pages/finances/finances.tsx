import usa_flag from "../../assets/usa_flag.png";
import euro_flag from "../../assets/euro_flag.png";
import gbp_flag from "../../assets/gbp_flag.png";
import { LuArrowUpRight } from "react-icons/lu";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Line,
  Tooltip
} from "recharts";

const Finances = () => {
  const assetsData = [
    { month: "Jan", assets: 50210 },
    { month: "Feb", assets: 70000 },
    { month: "Mar", assets: 23500 },
    { month: "Apr", assets: 34000 },
    { month: "May", assets: 18050 },
    { month: "Jun", assets: 40420 },
    { month: "Jul", assets: 66000 },
    { month: "Aug", assets: 35850 },
    { month: "Sep", assets: 82000 },
    { month: "Oct", assets: 64050 },
    { month: "Nov", assets: 73021 },
    { month: "Dec", assets: 86582 },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-8 space-y-6">
      <h1 className="text-3xl font-bold">Finances</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold">$220,320.60</span>
          <span>Total balance from all stores</span>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col border-r border-gray-400 p-4">
            <div className="flex items-center space-x-1">
              <img
                src={usa_flag}
                alt="euro dollar flag"
                className="w-6 h-5 rounded-full"
              />
              <span>USD</span>
            </div>
            <span className="text-2xl font-bold">$46,441.00</span>
          </div>
          <div className="flex flex-col border-r border-gray-400 p-4">
            <div className="flex items-center space-x-1">
              <img
                src={euro_flag}
                alt="euro dollar flag"
                className="w-8 h-6 rounded-full"
              />
              <span>EUR</span>
            </div>
            <span className="text-2xl font-bold">€169,525.00</span>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex items-center space-x-1">
              <img
                src={gbp_flag}
                alt="euro dollar flag"
                className="w-6 h-6 rounded-full"
              />
              <span>GBP</span>
            </div>
            <span className="text-2xl font-bold">£7,845.00</span>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex space-x-4">
        {/* INCOME AND SPENDING && OWNER ASSETS */}
        <div className="w-[60%] h-full flex flex-col space-y-4">
          {/* income and spending */}
          <div className="w-full flex space-x-4">
            <div className="w-full border-2 border-gray-400 rounded-md p-4 space-y-2">
              <div className="w-full flex justify-between items-center">
                <span>income</span> <LuArrowUpRight size={20} />{" "}
              </div>
              <div className="text-3xl font-medium">$8,189.00</div>
              <div className="w-full flex justify-between items-center">
                <span>84 transactions</span>{" "}
                <span className="text-orange-400 font-bold">+10%</span>
              </div>
            </div>
            <div className="w-full border-2 border-gray-400 rounded-md p-4 space-y-2">
              <div className="w-full flex justify-between items-center">
                <span>spending</span> <LuArrowUpRight size={20} />{" "}
              </div>
              <div className="text-3xl font-medium">$4,802,00</div>
              <div className="w-full flex justify-between items-center">
                <span>23 transactions</span>{" "}
                <span className="text-orange-400 font-bold">+34%</span>
              </div>
            </div>
          </div>

          {/* owner assets */}
          <div className="w-full h-full border-2 border-gray-400 p-2">
            <div>
              <div className="w-full flex justify-between items-center">
                <h1 className="text-xl">Your Assets</h1>

                <ul className="w-fit flex space-x-4 p-2 ">
                  <li>D</li>
                  <li>W</li>
                  <li>M</li>
                  <li>Y</li>
                  <li className="font-bold">ALL</li>
                </ul>
              </div>
              <div className="w-full p-2">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={assetsData}>
                    <CartesianGrid strokeDasharray="1 2" />
                    <XAxis dataKey="month" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="assets"
                      stroke="#898989"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] border-2 border-gray-400 rounded-md">
          latest transactions
        </div>
      </div>
    </div>
  );
};

export default Finances;
