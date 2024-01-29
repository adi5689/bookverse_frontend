import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://bookverse-api.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,9)))
    }, [])
  return (
    <div className='text-white px-5 bg-[#000000] py-8'>
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks;
