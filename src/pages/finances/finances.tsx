import usa_flag from "../../assets/usa_flag.png";
import euro_flag from "../../assets/euro_flag.png";
import gbp_flag from "../../assets/gbp_flag.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";

import { LuArrowUpRight } from "react-icons/lu";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Line,
  Tooltip,
} from "recharts";
import { RiArrowUpDownFill } from "react-icons/ri";

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

  const assetsCardsBalance = [
    {
      cardType: visa,
      cardNumber: "6132135151924875",
      cardUser: "Oussama deghfel",
      CardAmount: "$88,200.00",
    },
    {
      cardType: mastercard,
      cardNumber: "8457629531984215",
      cardUser: "Oussama deghfel",
      CardAmount: "$42,532.00",
    },
    {
      cardType: paypal,
      cardNumber: "7846543968127584",
      cardUser: "Oussama deghfel",
      CardAmount: "$65,548.25",
    },
  ];

  const todayTransactions = [
    {
      title: "Buy online at Walmart.com",
      amount: 8534.0,
      date: "27 June",
      time: "1:34 PM",
      type: "online",
    },
    {
      title: "Cash withdrawal by ATM",
      amount: 10480.0,
      date: "27 June",
      time: "5:12 PM",
      type: "cash",
    },
    {
      title: "Payment for Income projets",
      amount: 201.5,
      date: "27 June",
      time: "2:45 PM",
      type: "income",
    },
    {
      title: "Purchasing from Alibaba",
      amount: 184.0,
      date: "27 June",
      time: "4:00 PM",
      type: "cash",
    },
  ];

  const last7DaysTransactions = [
    {
      title: "Grocery shopping at Target",
      amount: 452.3,
      date: "10 January",
      time: "11:20 AM",
      type: "online",
    },
    {
      title: "Subscription payment for Netflix",
      amount: 15.99,
      date: "9 January",
      time: "9:00 PM",
      type: "cash",
    },
    {
      title: "Dinner at Olive Garden",
      amount: 84.5,
      date: "8 January",
      time: "7:45 PM",
      type: "income",
    },
    {
      title: "Electronics purchase at Best Buy",
      amount: 1245.0,
      date: "7 January",
      time: "4:30 PM",
      type: "cash",
    },
    {
      title: "Book purchase from Amazon",
      amount: 38.75,
      date: "6 January",
      time: "3:15 PM",
      type: "income",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-8 space-y-6 overflow-y-scroll">
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
            <div className="w-full border-2 border-gray-300 rounded-md p-4 space-y-2">
              <div className="w-full flex justify-between items-center">
                <span>income</span> <LuArrowUpRight size={20} />{" "}
              </div>
              <div className="text-3xl font-medium">$8,189.00</div>
              <div className="w-full flex justify-between items-center">
                <span>84 transactions</span>{" "}
                <span className="text-orange-400 font-bold">+10%</span>
              </div>
            </div>
            <div className="w-full border-2 border-gray-300 rounded-md p-4 space-y-2">
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
          <div className="w-full h-fit border-2 border-gray-300 p-2 rounded-md">
            {/* Chart  */}
            <div>
              <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-medium">Your Assets</h1>

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

            {/* Balance Cards  */}
            <div className="w-full h-fit flex flex-col p-2 space-y-2">
              {assetsCardsBalance.map((card) => (
                <div className="w-full flex justify-center items-center space-x-2 border-2 border-gray-300 p-2 rounded-md">
                  <img
                    src={card.cardType}
                    className="w-12 h-10 "
                    alt="card image"
                  />
                  <div className=" w-full flex justify-between items-center ">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">
                        {card.cardNumber.replace(/(.{4})/g, "$1 ")}
                      </span>
                      <span className="text-gray-500">{card.cardUser}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold">
                        {card.CardAmount}
                      </span>
                      <span className="text-gray-500">Account Balance</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Transactions  */}
        <div className="w-[40%] h-screen border-2 border-gray-300 rounded-md py-3 p-2 space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Latest transactions</h1>
            <LuArrowUpRight size={20} />
          </div>
          <div>
            <div className="space-y-2">
              <h1 className="text-lg text-gray-500">Today</h1>
              <div className="space-y-2">
                {todayTransactions.map((transactions) => (
                  <div className="w-full flex justify-center items-center space-x-2 border-2 border-gray-300 p-2 rounded-md">
                    <div
                      className={`rounded-full p-2 ${
                        transactions.type === "online"
                          ? "bg-green-300"
                          : transactions.type === "cash"
                          ? "bg-gray-200"
                          : "bg-slate-500"
                      }`}
                    >
                      <RiArrowUpDownFill size={18} />
                    </div>
                    <div className="w-full flex flex-col ">
                      <div className="flex justify-between items-center font-medium">
                        <span>{transactions.title}</span>
                        <span>${transactions.amount}</span>
                      </div>
                      <span className="text-gray-500">
                        {transactions.date}, {transactions.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-gray-500">Last 7 days</h1>
              <div className="space-y-2">
                {last7DaysTransactions.map((transactions) => (
                  <div className="w-full flex justify-center items-center space-x-2 border-2 border-gray-300 p-2 rounded-md">
                    <div
                      className={`rounded-full p-2 ${
                        transactions.type === "online"
                          ? "bg-green-300"
                          : transactions.type === "cash"
                          ? "bg-gray-200"
                          : "bg-slate-500"
                      }`}
                    >
                      <RiArrowUpDownFill size={18} />
                    </div>
                    <div className="w-full flex flex-col ">
                      <div className="flex justify-between items-center font-medium">
                        <span>{transactions.title}</span>
                        <span>${transactions.amount}</span>
                      </div>
                      <span className="text-gray-500">
                        {transactions.date}, {transactions.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
