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
  const menuItems = [
    { icon: RiHome4Line, text: "Home", active: true },
    { icon: BsGrid, text: "Catalog" },
    { icon: RiMoneyDollarCircleLine, text: "Finances" },
    { icon: GrGroup, text: "Customers" },
    { icon: TiPin, text: "Marketing" },
    { icon: IoStatsChartOutline, text: "Analytics" },
  ];

  return (
    <div className="flex flex-col w-[18%] h-screen bg-gray-300 border-r border-gray-500 px-4 py-8 text-black space-y-8">
      <h1 className="text-xl font-bold text-black">StoreTrack</h1>
      <div className="h-full flex flex-col justify-between ">
        <div className="flex flex-col space-y-4">
          <div className="flex w-full justify-between border-2 border-gray-400 p-2 rounded-md bg-gray-200 ">
            <div className="flex justify-center items-center space-x-1">
              <IoStorefront />
              <span className="text-sm font-medium">OwnShop</span>
            </div>
            <button>
              <RiExpandUpDownLine />
            </button>
          </div>
          <nav className="flex  flex-col space-y-2 justify-start items-start">
            <span className="text-sm">MENU</span>
            <ul className="flex flex-col w-full space-y-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`
              group flex items-center
              p-2 rounded-md transition-all
              hover:bg-gray-100
              ${item.active ? "bg-gray-200 border-2 border-gray-300" : ""}
              text-sm md:text-base cursor-pointer
            `}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  <span className="ml-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
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
