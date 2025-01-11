import { GrGroup } from "react-icons/gr";
import { IoStatsChartOutline, IoStorefront } from "react-icons/io5";
import { RiHome4Line, RiMoneyDollarCircleLine } from "react-icons/ri";

import ownerImage from "../assets/ownerimage.webp";
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router";
import { useState } from "react";
import { Select } from "antd";

const SideNavbar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon: RiHome4Line, text: "Home", path: "/" },
    { icon: RiMoneyDollarCircleLine, text: "Finances", path: "/finance" },
    { icon: GrGroup, text: "Customers", path: "/customers" },
    { icon: IoStatsChartOutline, text: "Analytics", path: "/analytics" },
  ];

  return (
    <div className="flex flex-col w-[35vh] h-screen bg-gray-300 border-r border-gray-500 px-4 py-8 text-black space-y-8">
      <h1 className="text-xl font-bold text-black">StoreTrack</h1>
      <div className="h-full flex flex-col justify-between ">
        <div className="flex flex-col space-y-4">
          <div className="flex w-full justify-between border-2 border-gray-300 p-2 rounded-md bg-gray-200 ">
            <div className="w-full flex justify-between items-center space-x-3">
              <IoStorefront size={25} />
              <Select
                className="w-full shadow-sm rounded-md"
                defaultValue={"ownshop"}
                options={[
                  { value: "ownshop", label: "OwnShop" },
                  { value: "secondshop", label: "SecondShop" },
                  { value: "thirdshop", label: "ThirdShop" },
                ]}
              />
            </div>
          </div>
          <div>
            <span className="text-sm">MENU</span>
            <nav className="w-full h-fit flex flex-col space-y-2 justify-start items-start">
              <ul className="flex flex-col w-full space-y-1">
                {menuItems.map((item, index) => (
                  <Link to={item.path}>
                    <li
                      key={index}
                      onClick={() => setActiveItem(index)}
                      className={`
              flex items-center
              p-2 rounded-md transition-all
              hover:bg-gray-100
              ${
                activeItem == index
                  ? "bg-gray-100 border-2 border-slate-300"
                  : ""
              }
               cursor-pointer
            `}
                    >
                      <item.icon size={20} />
                      <span className="ml-3 text-sm lg:text-md whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.text}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2 bg-gray-200 p-2 rounded-lg border-2 border-gray-300 shadow-sm">
          <div className="w-full flex justify-start items-center space-x-2 border-b border-gray-300 py-2">
            <img
              src={ownerImage}
              alt="the image of the owner account "
              className="w-8 h-8 rounded-lg"
            />
            <address className="w-fit text-xs flex flex-col not-italic overflow-hidden whitespace-nowrap text-ellipsis">
              <p className="font-medium">Oussama Deghfel</p>
              <span className="text-gray-500">oussama@gmail.com</span>
            </address>
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
