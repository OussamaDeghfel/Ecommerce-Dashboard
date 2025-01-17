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
import { Select } from "antd";

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
    // {
    //   cardType: mastercard,
    //   cardNumber: "7846543968127584",
    //   cardUser: "Oussama deghfel",
    //   CardAmount: "$10,208.09",
    // },
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
    <div className="w-full h-full flex flex-col px-2 sm:px-6 py-4 space-y-4 overflow-y-auto bg-gray-200">
      <div className="w-full h-fit flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-2">
          <span className="text-3xl sm:text-5xl font-bold">$220,320.60</span>
          <span className="text-sm sm:text-base">
            Total balance from all stores
          </span>
        </div>

        <div className="flex flex-wrap justify-start md:justify-center items-center gap-4">
          <div className="flex flex-col border-r border-gray-400 p-2 sm:p-4">
            <div className="flex items-center space-x-1">
              <img
                src={usa_flag}
                alt="usa dollar flag"
                className="w-6 h-5 rounded-full"
              />
              <span className="text-sm sm:text-base">USD</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold">$46,441.00</span>
          </div>
          <div className="flex flex-col border-r border-gray-400 p-2 sm:p-4">
            <div className="flex items-center space-x-1">
              <img
                src={euro_flag}
                alt="euro flag"
                className="w-6 sm:w-8 h-5 sm:h-6 rounded-full"
              />
              <span className="text-sm sm:text-base">EUR</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold">€169,525.00</span>
          </div>
          <div className="flex flex-col p-2 sm:p-4">
            <div className="flex items-center space-x-1">
              <img
                src={gbp_flag}
                alt="gbp flag"
                className="w-6 h-5 sm:h-6 rounded-full"
              />
              <span className="text-sm sm:text-base">GBP</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold">£7,845.00</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* INCOME AND SPENDING && OWNER ASSETS */}
        <div className="w-full lg:w-[60%] flex flex-col space-y-6">
          {/* income and spending */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="w-full border-2 border-gray-300 rounded-md p-4 space-y-2">
              <div className="w-full flex justify-between items-center">
                <span>income</span> <LuArrowUpRight size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-medium">$8,189.00</div>
              <div className="w-full flex justify-between items-center text-sm sm:text-base">
                <span>84 transactions</span>
                <span className="text-orange-400 font-bold">+10%</span>
              </div>
            </div>
            <div className="w-full border-2 border-gray-300 rounded-md p-4 space-y-2">
              <div className="w-full flex justify-between items-center">
                <span>spending</span> <LuArrowUpRight size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-medium">$4,802,00</div>
              <div className="w-full flex justify-between items-center text-sm sm:text-base">
                <span>23 transactions</span>
                <span className="text-orange-400 font-bold">+34%</span>
              </div>
            </div>
          </div>

          {/* owner assets */}
          <div className="w-full border-2 border-gray-300 p-2 rounded-md">
            <div className="w-full h-[60%] min-h-[300px]">
                <div className="w-full flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-medium">Your Assets</h1>
                <Select
                  className="custom-select shadow-sm rounded-md"
                  defaultValue="2025"
                  options={[
                  { value: "2025", label: <span>2025</span> },
                  { value: "2024", label: <span>2024</span> },
                  ]}
                />
                </div>
              <div className="w-full p-2">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={assetsData}>
                    <CartesianGrid strokeDasharray="1 2" />
                    <XAxis dataKey="month" />
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

            {/* Balance Cards */}
            <div className="w-full flex flex-col p-2 space-y-2">
              {assetsCardsBalance.map((card) => (
                <div className="w-full flex justify-center items-center space-x-4 border-b border-gray-300 p-2 rounded-md last:border-b-0">
                  <img
                    src={card.cardType}
                    className="w-8 sm:w-10 h-6 sm:h-8"
                    alt="card image"
                  />
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-md font-bold">
                        {card.cardNumber.replace(/(.{4})/g, "$1 ")}
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {card.cardUser}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm sm:text-md font-bold">
                        {card.CardAmount}
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        Account Balance
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Transactions */}
        <div className="w-full lg:w-[40%] border-2 border-gray-300 rounded-md py-3 p-2 space-y-2">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold">
              Latest transactions
            </h1>
            <LuArrowUpRight size={20} />
          </div>
          <div className="flex flex-col w-full">
            <div className="space-y-2">
              <h1 className="text-base sm:text-lg text-gray-500">Today</h1>
              <div className="space-y-2 w-full sm:w-[98%] mx-auto">
                {todayTransactions.map((transactions) => (
                  <div className="w-full flex items-center space-x-2 border-b border-gray-300 p-2 last:border-b-0">
                    <div
                      className={`rounded-full p-2 ${
                        transactions.type === "online"
                          ? "bg-green-300"
                          : transactions.type === "cash"
                          ? "bg-gray-200"
                          : "bg-slate-500"
                      }`}
                    >
                      <RiArrowUpDownFill size={16} className="sm:size-18" />
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                        <span>{transactions.title}</span>
                        <span>${transactions.amount}</span>
                      </div>
                      <span className="text-gray-500 text-xs">
                        {transactions.date}, {transactions.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <h1 className="text-base sm:text-lg text-gray-500">
                Last 7 days
              </h1>
              <div className="space-y-2 w-full sm:w-[98%] mx-auto">
                {last7DaysTransactions.map((transactions) => (
                  <div className="w-full flex items-center space-x-2 border-b border-gray-300 p-2 last:border-b-0">
                    <div
                      className={`rounded-full p-2 ${
                        transactions.type === "online"
                          ? "bg-green-300"
                          : transactions.type === "cash"
                          ? "bg-gray-200"
                          : "bg-slate-500"
                      }`}
                    >
                      <RiArrowUpDownFill size={16} className="sm:size-18" />
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                        <span>{transactions.title}</span>
                        <span>${transactions.amount}</span>
                      </div>
                      <span className="text-gray-500 text-xs">
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
