import React from "react";
import Loader from "../PrivateRoute/Loader";


const About = () => {
  return (
    <div className="mt-[60px] pb-10 md:pb-20">
      <div>
        <h1 className="text-4xl md:text-5xl text-center font-bold text-white py-10">
          About
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <Loader />
          </div>
          <div className="p-14 md:p-24 flex items-center">
            <p className="text-white">BooKVersE is a online catalogue, where we store the details about famous books, that too of different categories. You can also get access to PDF files for the books, which you can read for free. <br /> <span className="text-[#fffc4c] pt-6">Happy reading!</span></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
