import React, {useState, useEffect} from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://bookverse-api.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(9,)))
    }, [])
  return (
    <div className='text-white px-5 bg-[#000000] py-8'>
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
