import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-black mt-16 py-12 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug text-black">
            2024 National Book Awards for Fiction Shortlist
          </h2>
          <Link to="/shop" className="mt-8 block">
            <button className="transition-all duration-200 hover:bg-[#000000] hover:text-[#fffc4c] bg-[#fffc4c] text-black rounded-md font-semibold px-5 py-2 hover:border-[1px] hover:border-[#fffc4c]">
              Get Promo-Code
            </button>
          </Link>
        </div>

        <div>
            <img src="https://i.postimg.cc/QMbt1Ctn/awardbooks.png" alt="" className="w-96"/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
