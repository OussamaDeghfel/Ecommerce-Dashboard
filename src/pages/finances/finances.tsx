import usa_flag from "../../assets/usa_flag.png";
import euro_flag from "../../assets/euro_flag.png";
import gbp_flag from "../../assets/gbp_flag.png";

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
              <img src={usa_flag} alt="euro dollar flag" className="w-6 h-5 rounded-full" />
              <span>USD</span>
            </div>
            <span className="text-2xl font-bold">$46,441.00</span>
          </div>
          <div className="flex flex-col border-r border-gray-400 p-4">
            <div className="flex items-center space-x-1">
            <img src={euro_flag} alt="euro dollar flag" className="w-8 h-6 rounded-full" />
              <span>EUR</span>
            </div>
            <span className="text-2xl font-bold">€169,525.00</span>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex items-center space-x-1">
            <img src={gbp_flag} alt="euro dollar flag" className="w-6 h-6 rounded-full" />
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
