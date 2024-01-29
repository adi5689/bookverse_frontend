import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageUrl,
    authorName,
    bookDescription,
    bookPdfUrl,
    category,
    price,
  } = useLoaderData();

  return (
    <div className="mt-[50px] pb-20 text-white px-4 lg:px-24 text-center">
      <h1 className="text-5xl text-center font-bold text-white py-10">
        Details
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-28">
        <div className="md:w-1/3 flex justify-center">
          <img src={imageUrl} alt="img" className="h-96" />
        </div>

        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-center pt-6 md:text-left">
            {bookTitle}
          </h2>
          <h4 className="font-semibold text-base pt-3 text-center md:text-left">
            {authorName}
          </h4>
          <p className="pt-7 px-4 md:px-0 text-center md:text-left">
            {bookDescription}
          </p>
          <div className="flex justify-between px-4 md:px-0 pt-10">
            <p>
              <span className="text-[#fffc4c]">Category:</span> {category}
            </p>
            <p>
              <span className="text-[#fffc4c]">Price: </span>&#8377;{price}
            </p>
          </div>
          <div className="flex items-center justify-between px-4 md:px-0 pt-6">
            <button className="bg-[#fffc4c] hover:bg-[#000000] hover:border-2 hover:border-[#fffc4c] text-black hover:text-[#fffc4c] px-5 py-3 rounded-md">
              <a
                href={bookPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Pdf
              </a>
            </button>
            <button className="bg-[#fffc4c] hover:bg-[#000000] hover:border-2 hover:border-[#fffc4c] text-black hover:text-[#fffc4c] px-5 py-3 rounded-md">
              <a
                href="/"
              >
                back
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
