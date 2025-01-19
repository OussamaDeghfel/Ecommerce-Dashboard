import { BiCloudDownload } from "react-icons/bi";
import { CgDatabase } from "react-icons/cg";
import { FaUserCheck, FaUserPlus } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

const Customers = () => {
  return (
    <div className="w-full h-full flex flex-col px-2 sm:px-6 py-4 space-y-4 overflow-y-auto bg-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Customers</h1>
        <button className="flex justify-center items-center space-x-2 rounded-md border-2 border-gray-300 px-4 p-2">
          <BiCloudDownload size={25} />
          <span className="text-md font-medium">Export</span>
        </button>
      </div>

      {/* details in number  */}
      <div className="w-full flex gap-4">
        <div className="w-full flex flex-col h-fit px-4 py-4 border-2 border-gray-300 rounded-sm space-y-2">
          <CgDatabase size={20} />
          <span>total Customer</span>
          <span>49,038</span>
        </div>
        <div className="w-full flex flex-col h-fit px-4 py-4 border-2 border-gray-300 rounded-sm space-y-2">
          <FaUserPlus size={20} />
          <span>New Customer</span>
          <span>327</span>
        </div>
        <div className="w-full flex flex-col h-fit px-4 py-4 border-2 border-gray-300 rounded-sm space-y-2">
          <FaUserCheck size={20} />
          <span>Active User</span>
          <span>2,948</span>
        </div>
        <div className="w-full flex flex-col h-fit px-4 py-4 border-2 border-gray-300 rounded-sm space-y-2">
          <RiShoppingCartLine size={20} />
          <span>total Order</span>
          <span>2,281</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
