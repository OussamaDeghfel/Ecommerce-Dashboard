import { CgWebsite } from "react-icons/cg";
import Performance from "./performance";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-8">
        <div className="flex justify-between items-center mb-9">
          <h1 className="text-2xl font-bold">Hello, John</h1>
          <button className="flex justify-center items-center space-x-2 bg-blue-400 hover:bg-green-400 p-2 rounded-md font-medium">
            <CgWebsite color="white" /> <span className="text-white">Open Store</span>
          </button>
        </div>
        <div>
          <div className="w-[50%]">
            <Performance />
          </div>
          <div>Revenue</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;