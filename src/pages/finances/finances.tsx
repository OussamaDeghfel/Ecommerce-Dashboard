import { EuroCircleFilled } from "@ant-design/icons";
import { BiDollarCircle } from "react-icons/bi";

const Finances = () => {
  return (
    <div className="w-full h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold">Finances</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold">$220,320.60</span>
          <span>Total balance from all stores</span>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col border-r border-gray-400 p-4">
            <div className="flex items-center space-x-1">
              <BiDollarCircle size={25} />
              <span>USD</span>
            </div>
            <span className="text-2xl font-bold">$46,441.00</span>
          </div>
          <div className="flex flex-col border-r border-gray-400 p-4">
            <div className="flex items-center space-x-1">
              <EuroCircleFilled size={25} />
              <span>EUR</span>
            </div>
            <span className="text-2xl font-bold">€169,525.00</span>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex items-center space-x-1">
              <BiDollarCircle size={25} />
              <span>GBP</span>
            </div>
            <span className="text-2xl font-bold">£7,845.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
