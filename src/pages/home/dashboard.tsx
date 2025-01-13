import { CgWebsite } from "react-icons/cg";
import Performance from "./performance";
import Revenue from "./revenue";
// import AdditionDetails from "./additionDetails";
import PlanChoose from "./planChoose";
import { Modal } from "antd";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import menuser from "../../assets/menuser.png";
import menuser2 from "../../assets/menuser2.png";
import womenuser from "../../assets/womenuser.svg";

const Dashboard = () => {
  const activities = [
    {
      id: 1,
      name: "David Elson",
      action: "favorited your shop",
      time: "6 mins ago",
      image: menuser,
      icon: "❤️",
    },
    {
      id: 2,
      name: "Kurt Bates",
      action: "purchased your product",
      time: "16 mins ago",
      image: menuser2,
      icon: "🛒",
    },
    {
      id: 3,
      name: "Eddie Lake",
      action: "favorited your shop",
      time: "20 mins ago",
      image: menuser,
      icon: "❤️",
    },
    {
      id: 4,
      name: "Patricia Sanders",
      action: "purchased your product",
      time: "32 mins ago",
      image: womenuser,
      icon: "🛒",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-8 overflow-y-scroll space-y-6">
        <div>
          <Modal
            title="Shop Advisor"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="space-y-3">
              <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                <div className="flex justify-center items-start space-x-4">
                  <IoIosNotifications
                    color="blue"
                    className="bg-blue-200 p-2 rounded-lg"
                    size={40}
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium">
                      Optimize Your Product Listings
                    </h3>
                    <p className="text-sm text-gray-400">
                      Learn how to improve your product visibility and increase
                      sales
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="rounded-md px-2 py-1 shadow-md w-fit border-2 border-gray-300 cursor-pointer hover:bg-blue-200 hover:font-bold">
                    View Tips
                  </button>
                </div>
              </div>
              <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                <div className="flex justify-center items-start space-x-4">
                  <IoIosNotifications
                    color="purple"
                    className="bg-purple-200 p-2 rounded-lg"
                    size={40}
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium">Customer Service Excellence</h3>
                    <p className="text-sm text-gray-400">
                      Discover best practices for handling customer inquiries
                      and feedback
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="rounded-md px-2 py-1 shadow-md w-fit border-2 border-gray-300 cursor-pointer hover:bg-purple-200 hover:font-bold">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                <div className="flex justify-center items-start space-x-4">
                  <IoIosNotifications
                    color="orange"
                    className="bg-orange-200 p-2 rounded-lg"
                    size={40}
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium">Marketing Strategies Guide</h3>
                    <p className="text-sm text-gray-400">
                      Explore effective marketing techniques to grow your online
                      presence
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="rounded-md px-2 py-1 shadow-md w-fit border-2 border-gray-300 cursor-pointer hover:bg-orange-200 hover:font-bold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>

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
            {/* <AdditionDetails /> */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Shop Advisor</h1>
                  <button
                    className="flex justify-center items-center space-x-2 bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-2 rounded-md"
                    onClick={showModal}
                  >
                    <span>See All</span> <FaArrowRight />{" "}
                  </button>
                </div>
                <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                  <div className="flex justify-center items-start space-x-4">
                    <IoIosNotifications
                      color="green"
                      className="bg-green-200 p-2 rounded-lg"
                      size={40}
                    />
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-medium">
                        The Black Friday Starts Tomorrow
                      </h3>
                      <p className="text-sm text-gray-400">
                        Find Out how to take the adcantage of the upcoming sales
                        event
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="rounded-md px-2 py-1 shadow-md w-fit  border-2 border-gray-300 cursor-pointer hover:bg-green-200 hover:font-bold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Products</h1>
                  <button className="flex justify-center items-center space-x-2 bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-2 rounded-md">
                    <span>See All</span> <FaArrowRight />{" "}
                  </button>
                </div>
                <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium">Active listings</span>
                    <span className="text-lg font-semibold text-gray-900">
                      6
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium">Expired</span>
                    <span className="text-lg font-semibold text-gray-900">
                      2
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sold out</span>
                    <span className="text-lg font-semibold text-gray-900">
                      5
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Recent Activities</h1>
                  <button className="flex justify-center items-center space-x-2 bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-2 rounded-md">
                    <span>See All</span> <FaArrowRight />{" "}
                  </button>
                </div>
                <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-4 py-3 border-b border-gray-300"
                    >
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.name}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <div className="text-lg">{activity.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
