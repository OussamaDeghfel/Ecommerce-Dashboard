import { BsGrid } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { IoStatsChartOutline, IoStorefront } from "react-icons/io5";
import { RiExpandUpDownLine, RiHome4Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { TiPin } from "react-icons/ti";

// import ownerImage from "../assets/ownerimage.webp";

const SideNavbar = () => {
  return (
    <div className="flex flex-col w-[15%] h-screen bg-gray-300 border-r border-gray-500 px-4 py-8 text-black space-y-8">
      <h1 className="text-xl font-bold text-black">StoreTrack</h1>
      <div className="flex w-[25vh] justify-between border-2 border-gray-200 p-2 rounded-md mt-4 bg-white ">
        <div className="flex justify-center items-center space-x-1">
        <IoStorefront />
        <span className="text-sm font-medium">OwnShop</span>
        </div>
        <button><RiExpandUpDownLine /></button>
      </div>
      <div className="flex  flex-col space-y-2 justify-start items-start">
        <span className="text-sm">MENU</span>
        <ul className="flex flex-col w-full space-y-2">
          <li className="w-full flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer bg-white shadow-sm rounded-md border-2 border-gray-350"><RiHome4Line size={20} /><span className="text-lg">Home</span></li>
          <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer"><BsGrid size={20} /><span className="text-lg">Catalog</span></li>
          <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer"><RiMoneyDollarCircleLine size={20} /><span className="text-lg">Finances</span></li>
          <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer"><GrGroup size={20} /><span className="text-lg">Customers</span></li>
          <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer"><TiPin size={20} /><span className="text-lg">Marketing</span></li>
          <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer"><IoStatsChartOutline size={20} /><span className="text-lg">Analytics</span></li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
