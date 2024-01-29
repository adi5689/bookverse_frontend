import React from "react";
import { Link } from "react-router-dom";

const Favoritebook = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-12 bg-black px-4 lg:px-24 my-24">
      <div className="md:w-1/2">
        <img
          src="https://i.postimg.cc/YCmF2dy2/favoritebook.jpg"
          alt="banner-img"
          className="rounded md:w-10/12 py-10"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-[#fffc4c]">Book</span> here!
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Books hold immense value as gateways to knowledge, offering a timeless
          reservoir of wisdom, imagination, and insight. They serve as catalysts
          for learning, fostering empathy, creativity, and personal growth. With
          the power to transport readers to different worlds, books are
          indispensable companions that illuminate minds and shape the fabric of
          cultures across generations.
        </p>
        {/* stats */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold text-[#fffc4c]">
              100<span className="text-green-600">+</span>
            </h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#fffc4c]">
              1000<span className="text-green-600">+</span>
            </h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#fffc4c]">
              1500<span className="text-green-600">+</span>
            </h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-8 block">
          <button className="transition-all duration-300 hover:bg-[#000000] hover:text-[#fffc4c] bg-[#fffc4c] text-black rounded-md font-semibold px-5 py-2 hover:border-2 hover:border-[#fffc4c]">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favoritebook;
