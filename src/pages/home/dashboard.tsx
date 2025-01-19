import { CgWebsite } from "react-icons/cg";
import Performance from "./performance";
import Revenue from "./revenue";
import PlanChoose from "./planChoose";
import { Avatar, List, Modal } from "antd";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import menuser from "../../assets/menuser.png";
import menuser2 from "../../assets/menuser2.png";
import womenuser from "../../assets/womenuser.svg";

const Dashboard = () => {
  // const activities = [
  //   {
  //     id: 1,
  //     name: "David Elson",
  //     action: "favorited your shop",
  //     time: "6 mins ago",
  //     image: menuser,
  //     icon: "❤️",
  //   },
  //   {
  //     id: 2,
  //     name: "Kurt Bates",
  //     action: "purchased your product",
  //     time: "16 mins ago",
  //     image: menuser2,
  //     icon: "🛒",
  //   },
  //   {
  //     id: 3,
  //     name: "Eddie Lake",
  //     action: "favorited your shop",
  //     time: "20 mins ago",
  //     image: menuser,
  //     icon: "❤️",
  //   },
  //   {
  //     id: 4,
  //     name: "Patricia Sanders",
  //     action: "purchased your product",
  //     time: "32 mins ago",
  //     image: womenuser,
  //     icon: "🛒",
  //   },
  // ];

  const stats = {
    totalProducts: 50,
    activeListings: 20,
    expiredListings: 10,
    soldOutListings: 15,
    totalCategories: 5,
    averagePrice: 45.67,
    highestPrice: 120,
    lowestPrice: 10,
    totalStockRemaining: 200,
    totalRevenue: 5000,
  };

  const activities = [
    {
      id: 1,
      name: "David Elson",
      action: "favorited your shop",
      time: "6 mins ago",
      type: "favorite",
      details: {
        profilePicture: menuser,
        interactions: 15,
      },
    },
    {
      id: 2,
      name: "Kurt Bates",
      action: "purchased your product",
      time: "16 mins ago",
      type: "purchase",
      details: {
        profilePicture: womenuser,
        productName: "Stylish Jacket",
        quantity: 2,
        totalPrice: 120,
        purchaseDate: "2025-01-13 12:45 PM",
        orderId: "ORD123456",
      },
    },
    {
      id: 3,
      name: "Eddie Lake",
      action: "favorited your shop",
      time: "20 mins ago",
      type: "favorite",
      details: {
        profilePicture: menuser2,
        interactions: 10,
      },
    },
    {
      id: 4,
      name: "Patricia Sanders",
      action: "purchased your product",
      time: "32 mins ago",
      type: "purchase",
      details: {
        profilePicture: menuser,
        productName: "Classic T-Shirt",
        quantity: 1,
        totalPrice: 25,
        purchaseDate: "2025-01-13 12:15 PM",
        orderId: "ORD123457",
      },
    },
  ];

  const [shopAdvisorActive, setShopAdvisorActive] = useState(false);
  const [productsActive, setProductsActive] = useState(false);
  const [activitiesActive, setActivitiesActive] = useState(false);

  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-8 overflow-y-scroll space-y-6">
        <div>
          <Modal
            title="Shop Advisor"
            open={shopAdvisorActive}
            onOk={() => setShopAdvisorActive(false)}
            onCancel={() => setShopAdvisorActive(false)}
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
          <Modal
            title="Products"
            open={productsActive}
            onOk={() => setProductsActive(false)}
            onCancel={() => setProductsActive(false)}
            footer={null}
          >
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Store Product Statistics
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Total Products</span>
                  <p className="text-2xl font-bold">{stats.totalProducts}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Active Listings</span>
                  <p className="text-2xl font-bold">{stats.activeListings}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">
                    Expired Listings
                  </span>
                  <p className="text-2xl font-bold">{stats.expiredListings}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">
                    Sold Out Listings
                  </span>
                  <p className="text-2xl font-bold">{stats.soldOutListings}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">
                    Total Categories
                  </span>
                  <p className="text-2xl font-bold">{stats.totalCategories}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Average Price</span>
                  <p className="text-2xl font-bold">
                    ${stats.averagePrice.toFixed(2)}
                  </p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Highest Price</span>
                  <p className="text-2xl font-bold">${stats.highestPrice}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Lowest Price</span>
                  <p className="text-2xl font-bold">${stats.lowestPrice}</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">
                    Total Stock Remaining
                  </span>
                  <p className="text-2xl font-bold">
                    {stats.totalStockRemaining}
                  </p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-semibold">Total Revenue</span>
                  <p className="text-2xl font-bold">${stats.totalRevenue}</p>
                </li>
              </ul>
            </div>
          </Modal>
          <Modal
            title="Recent Activities"
            open={activitiesActive}
            onOk={() => setActivitiesActive(false)}
            onCancel={() => setActivitiesActive(false)}
            footer={null}
          >
            <List
              dataSource={activities}
              renderItem={(activity) => (
                <List.Item
                  key={activity.id}
                  className="border-b border-gray-200 py-4"
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={activity.details.profilePicture}
                        alt={`${activity.name}'s profile`}
                      />
                    }
                    title={
                      <div className="flex justify-between">
                        <span>
                          <strong>{activity.name}</strong> {activity.action}
                        </span>
                        <span className="text-sm text-gray-500">
                          {activity.time}
                        </span>
                      </div>
                    }
                    description={
                      <div className="text-gray-700 text-sm">
                        {activity.type === "favorite" ? (
                          <>
                            <p>
                              <strong>Total Interactions:</strong>{" "}
                              {activity.details.interactions}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              <strong>Product:</strong>{" "}
                              {activity.details.productName}
                            </p>
                            <p>
                              <strong>Quantity:</strong>{" "}
                              {activity.details.quantity}
                            </p>
                            <p>
                              <strong>Total Price:</strong> $
                              {activity.details.totalPrice}
                            </p>
                            <p>
                              <strong>Purchase Date:</strong>{" "}
                              {activity.details.purchaseDate}
                            </p>
                            <p>
                              <strong>Order ID:</strong>{" "}
                              {activity.details.orderId}
                            </p>
                          </>
                        )}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
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
                    onClick={() => setShopAdvisorActive(true)}
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
                  <button
                    className="flex justify-center items-center space-x-2 bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-2 rounded-md"
                    onClick={() => setProductsActive(true)}
                  >
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
                  <button
                    className="flex justify-center items-center space-x-2 bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-2 rounded-md"
                    onClick={() => setActivitiesActive(true)}
                  >
                    <span>See All</span> <FaArrowRight />{" "}
                  </button>
                </div>
                <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
                  {activities.slice(0, 4).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-4 py-3 border-b border-gray-300"
                    >
                      <img
                        src={activity.details.profilePicture}
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
                      <div className="text-lg">{activity.type === "favorite" ? "❤️" : "🛒"}</div>
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
