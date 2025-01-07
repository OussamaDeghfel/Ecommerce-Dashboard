import { BsGrid } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { IoStatsChartOutline, IoStorefront } from "react-icons/io5";
import {
  RiExpandUpDownLine,
  RiHome4Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { TiPin } from "react-icons/ti";

import ownerImage from "../assets/ownerimage.webp";
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

const SideNavbar = () => {
  return (
    <div className="flex flex-col w-[15%] h-screen bg-gray-300 border-r border-gray-500 px-4 py-8 text-black space-y-8">
      <h1 className="text-xl font-bold text-black">StoreTrack</h1>
      <div className="h-full flex flex-col justify-between ">
      <div className="flex flex-col space-y-4">
        <div className="flex w-[25vh] justify-between border-2 border-gray-400 p-2 rounded-md bg-gray-200 ">
          <div className="flex justify-center items-center space-x-1">
            <IoStorefront />
            <span className="text-sm font-medium">OwnShop</span>
          </div>
          <button>
            <RiExpandUpDownLine />
          </button>
        </div>
        <div className="flex  flex-col space-y-2 justify-start items-start">
          <span className="text-sm">MENU</span>
          <ul className="flex flex-col w-full space-y-2">
            <li className="w-full flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer bg-gray-100 shadow-sm rounded-md border-2 border-gray-300">
              <RiHome4Line size={20} />
              <span className="text-lg">Home</span>
            </li>
            <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer">
              <BsGrid size={20} />
              <span className="text-lg">Catalog</span>
            </li>
            <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer">
              <RiMoneyDollarCircleLine size={20} />
              <span className="text-lg">Finances</span>
            </li>
            <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer">
              <GrGroup size={20} />
              <span className="text-lg">Customers</span>
            </li>
            <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer">
              <TiPin size={20} />
              <span className="text-lg">Marketing</span>
            </li>
            <li className="flex justify-start items-center space-x-2 px-2 py-1 cursor-pointer">
              <IoStatsChartOutline size={20} />
              <span className="text-lg">Analytics</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-gray-200 p-2 rounded-lg border-2 border-gray-300 shadow-sm">
        <div className="flex justify-start items-center space-x-2 border-b border-gray-300 py-2">
          <img
            src={ownerImage}
            alt="the image of the owner account "
            className="w-10 h-10 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Oussama Deghfel</span>
            <span className="text-xs text-gray-500">oussama@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <button className="flex justify-center items-center space-x-1">
            <MdOutlineSettings size={20} /> <span>Setting</span>
          </button>
          <button className="flex justify-center items-center space-x-1">
            <BiLogOutCircle size={20} /> <span>Log out</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideNavbar;
