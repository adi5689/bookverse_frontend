"use client";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookverse-api.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="pt-28 lg:px-24 bg-black text-white">
      <h2 className="text-5xl font-bold text-center">Our Book Collection</h2>
      <div className="py-10 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-2 sm:gap-10">
        {books.map((book) => (
          <Card
            key={book._id}
            className="bg-slate-20 border-2 border-[#fffc4c] p-2 flex flex-col justify-center items-center"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={book.imageUrl}
          >
            <div className="text-center py-0">
              <h4 className="font-bold text-xl">{book.bookTitle}</h4>
              <p>{book.authorName}</p>
            </div>
            <Link to={`/book/${book._id}`} className="flex justify-center"><button className="bg-[#fffc4c] p-2 rounded-md text-black hover:text-[#fffc4c] hover:bg-black hover:border-[1px] hover:border-[#fffc4c]">See More</button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
