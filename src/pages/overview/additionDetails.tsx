import { FaArrowRight } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const AdditionDetails = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop Advisor</h1>
          <button className="flex justify-center items-center space-x-2">
            <span>See All</span> <FaArrowRight/>{" "}
          </button>
        </div>
        <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
          <div className="flex justify-center items-start space-x-4">
            <IoIosNotifications color="green" className="bg-green-200 p-2 rounded-lg" size={40} />
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">The Black Friday Starts Tomorrow</h3>
              <p className="text-sm text-gray-400">
                Find Out how to take the adcantage of the upcoming sales event
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button className="rounded-md px-2 py-1 shadow-md w-fit  border-2 border-gray-300 cursor-pointer hover:bg-green-200 hover:font-bold">Learn More</button>
          </div>
        </div>
      </div>
      <div>Products</div>
      <div>Recent Activities</div>
    </div>
  );
};

export default AdditionDetails;
