import { CgWebsite } from "react-icons/cg";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-8">
        <div className="flex justify-between items-center mb-9">
          <h1 className="text-2xl font-bold">Hello, John</h1>
          <button className="flex justify-center items-center space-x-2 bg-blue-400 p-2 rounded-md font-medium">
            <CgWebsite /> <span>Open Store</span>
          </button>
        </div>
        <div>
          <div className="w-[50%]">
            <div className="flex w-full justify-between items-center">
              {" "}
              <span className="text-xl font-medium">
                Overview performance
              </span>{" "}
              <ul className="flex w-fit h-fit bg-gray-300 rounded-md">
                <li className="p-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white">
                  Day
                </li>
                <li className="p-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white">
                  Week
                </li>
                <li className="p-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white">
                  Month
                </li>
                <li className="p-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white">
                  Year
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-8">
              <div className="flex flex-col space-y-2 border-2 border-gray-300 p-5 rounded-md">
                <span className="text-base">Total Views</span>
                <span className="text-2xl font-medium">21,040</span>
                <span className="text-base">From last 15,542</span>
              </div>
              <div className="flex flex-col space-y-2 border-2 border-gray-300 p-5 rounded-md">
                <span className="text-base">Visits</span>
                <span className="text-2xl font-medium">5,985</span>
                <span className="text-base">From last 2,002</span>
              </div>
              <div className="flex flex-col space-y-2 border-2 border-gray-300 p-5 rounded-md">
                <span className="text-base">Orders</span>
                <span className="text-2xl font-medium">1,253</span>
                <span className="text-base">From last 560</span>
              </div>
              <div className="flex flex-col space-y-2 border-2 border-gray-300 p-5 rounded-md">
                <span className="text-base">Conversation Rate</span>
                <span className="text-2xl font-medium">85%</span>
                <span className="text-base">From last 90%</span>
              </div>
            </div>
          </div>
          <div>Revenue</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
