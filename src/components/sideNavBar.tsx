import { AiTwotoneSecurityScan } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsPersonRolodex } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoGrid } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";

const SideNavbar = () => {
  return (
    <div className="flex flex-col w-[15%] h-screen bg-gray-800 text-white p-8 space-y-8">
      <div>
        <p className="font-bold text-lg">StoreTrack</p>
      </div>
      <div className="space-y-4">
        <span className="font-medium">MENU</span>
        <div>
          <ul className="space-y-2">
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <IoGrid /> <span>Overview</span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <ImStatsDots /> <span>Statistics</span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <BsPersonRolodex /> <span>Customers</span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <MdCategory /> <span>Products</span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <BiSolidMessageSquareDetail /> <span>Messages</span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              {" "}
              <FaExchangeAlt /> <span>Transactions</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <span className="font-medium">GENERAL</span>
        <ul className="space-y-2">
          <li className="flex justify-start items-center space-x-2">
            {" "}
            <RiSettingsLine /> <span>Settings</span>
          </li>
          <li className="flex justify-start items-center space-x-2">
            {" "}
            <AiTwotoneSecurityScan /> <span>Security</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
