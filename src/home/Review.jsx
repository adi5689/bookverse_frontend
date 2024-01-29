"use client";

import { Avatar } from "flowbite-react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const ReviewData = [
    {
        link:"https://i.postimg.cc/9Q2thrsS/profile.jpg",
        name: "Muskan",
        designation: "An avid reader"
    },
    {
        link:"https://i.postimg.cc/dtfpWG18/pexels-rafael-barros-1819483.jpg",
        name: "Dinash",
        designation: "Writer"
    },
    {
        link:"https://i.postimg.cc/zXNFqBc9/pexels-spencer-selover-428364.jpg",
        name: "Dwarka",
        designation: "An avid reader"
    },
    {
        link:"https://i.postimg.cc/xC090LLX/pexels-sindre-fs-1040880.jpg",
        name: "Aditya",
        designation: "Writer"
    },
    {
        link:"https://i.postimg.cc/7L4kVSsK/pexels-r-fera-432059.jpg",
        name: "Ankit",
        designation: "An avid reader"
    },
]

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer Review&apos;s
      </h2>
      <div>
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
            {ReviewData.map((review) => (
                <SwiperSlide key={review.name} data-hash="slide1" className="flex justify-center py-[20px] px-[40px] md:py-[60px] md:px-[160px] bg-white text-black rounded-md">
                <div>
                  <div className="text-amber-400 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
    
                  {/* text content */}
                  <div>
                    <p className="mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem dolore numquam, porro inventore consequuntur voluptates
                      non ab, ducimus esse quasi temporibus dignissimos accusamus
                      quisquam ea aspernatur perferendis fugit rerum nemo.
                    </p>
                    <Avatar
                      img={review.link}
                      bordered
                      className="w-14 mb-4 mt-4"
                    />
                    <h5 className="text-lg font-medium">{review.name}</h5>
                    <p className="text-base">({review.designation})</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          
          {/* <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
          <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
          <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
          <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
          <SwiperSlide data-hash="slide6">Slide 6</SwiperSlide>
          <SwiperSlide data-hash="slide7">Slide 7</SwiperSlide>
          <SwiperSlide data-hash="slide8">Slide 8</SwiperSlide>
          <SwiperSlide data-hash="slide9">Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
