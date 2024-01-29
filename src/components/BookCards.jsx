import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  // console.log(books);
  return (
    <div className="px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-white my-2">
        {headline}
      </h2>

      {/* cards */}
      <div className="mt-16">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{clickable: true}}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {
            books.map(book => 
            <SwiperSlide key={book._id} className="border-2 p-3 border-white rounded-md bg-white text-black">
              <Link to={`/book/${book._id}`}>
                <div className="relative  bg-black h-30">
                  <img src={book.imageUrl} alt="" className=""/>
                  <div className="absolute top-3 right-3 bg-[#fffc4c] hover:bg-black text-black hover:text-[#fffc4c] rounded-md mt-3 p-3">
                    <FaCartShopping className="w-4 h-4"/>
                  </div>
                </div>
                <div>
                  <div>
                  <h3 className="font-bold">{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p className="text-green-600">&#8377;{book.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: [#fffc4c];
          }
        `}
      </style>
    </div>
  );
};

export default BookCards;
