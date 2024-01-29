import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-[#000000] flex items-center">
      <div className="flex w-full flex-col md:flex-row items-center gap-12 md:gap-[350px] py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-white">
            Buy and Sell your books <span className="text-[#fffc4c]">with a tap on your screen</span>!
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odit
            quae hic possimus optio architecto officiis deleniti necessitatibus
            dolorum velit, officia dolores et asperiores culpa magnam magni,
            vero nisi ullam!
          </p>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your book here!"
              className="py-2 px-2 mt-4 outline-none rounded-tl-md rounded-bl-md"
            />
            <button className="bg-[#fffc4c] px-6 py-2 rounded-tr-md rounded-br-md text-black font-medium hover:bg-[#be23c6] hover:text-white transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="flex justify-center items-center">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
