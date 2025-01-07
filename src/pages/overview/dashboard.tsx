import { CgWebsite } from "react-icons/cg";
import Performance from "./performance";
import Revenue from "./revenue";
import AdditionDetails from "./additionDetails";
import PlanChoose from "./planChoose";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-8 overflow-y-scroll space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hello, Oussama</h1>
          <button className="flex justify-center items-center space-x-2 bg-blue-400 hover:bg-green-400 p-2 rounded-md font-medium">
            <CgWebsite color="white" />{" "}
            <span className="text-white">Open Store</span>
          </button>
        </div>
        <div>
          <PlanChoose />
        </div>
        <div className="flex space-x-6">
          <div className="w-[75%] space-y-8">
            <Performance />
            <Revenue />
          </div>
          <div>
            <AdditionDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
