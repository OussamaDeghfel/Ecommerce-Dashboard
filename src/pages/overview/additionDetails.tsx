import { FaArrowRight } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const AdditionDetails = () => {

    const activities = [
        {
          id: 1,
          name: "David Elson",
          action: "favorited your shop",
          time: "6 mins ago",
          image: "https://images.pexels.com/photos/30071289/pexels-photo-30071289/free-photo-of-portrait-of-a-bearded-man-outdoors.jpeg", // Replace with actual image URL
          icon: "❤️", // You can replace this with a heart icon from a library like Heroicons
        },
        {
          id: 2,
          name: "Kurt Bates",
          action: "purchased your product",
          time: "16 mins ago",
          image: "https://via.placeholder.com/40",
          icon: "🛒",
        },
        {
          id: 3,
          name: "Eddie Lake",
          action: "favorited your shop",
          time: "20 mins ago",
          image: "https://via.placeholder.com/40",
          icon: "❤️",
        },
        {
          id: 4,
          name: "Patricia Sanders",
          action: "purchased your product",
          time: "32 mins ago",
          image: "https://via.placeholder.com/40",
          icon: "🛒",
        },
      ];

  return (
    <div className="flex flex-col space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop Advisor</h1>
          <button className="flex justify-center items-center space-x-2">
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
              <h3 className="font-medium">The Black Friday Starts Tomorrow</h3>
              <p className="text-sm text-gray-400">
                Find Out how to take the adcantage of the upcoming sales event
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
          <button className="flex justify-center items-center space-x-2">
            <span>See All</span> <FaArrowRight />{" "}
          </button>
        </div>
        <div className="flex flex-col border-2 border-gray-300 rounded-md p-5">
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <span className="font-medium">Active listings</span>
            <span className="text-lg font-semibold text-gray-900">6</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <span className="font-medium">Expired</span>
            <span className="text-lg font-semibold text-gray-900">2</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">Sold out</span>
            <span className="text-lg font-semibold text-gray-900">5</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recent Activities</h1>
          <button className="flex justify-center items-center space-x-2">
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
              <span className="font-medium">{activity.name}</span> {activity.action}
            </p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
          <div className="text-lg">{activity.icon}</div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionDetails;
