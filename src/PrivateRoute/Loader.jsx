import React from "react";
import "./loader.css";
import { FaBookBookmark } from "react-icons/fa6";

const Loader = () => {
  return (
    <div className="h-[1/2vh] flex flex-col justify-center items-center pt-[100px] pb-[200px] md:[300px]">
      <div className="glowing-cube">
        <div className="top">
          <FaBookBookmark  className="text-[#fffc4c]"/>
        </div>
        <div>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
