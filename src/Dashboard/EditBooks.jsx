"use client";
import React, {useState} from 'react';
import { Button, Textarea, Label, Select, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, price, bookDescription, bookPdfUrl } = useLoaderData();
  
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Historical Fiction",
    "Self Help",
    "Psychology",
    "Science Fiction",
    "Animals",
    "Horror",
    "Programming",
    "Fantasy",
    "Biography",
    "Business",
    "Children",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle submission
  const handleUpdateSubmission = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;

    const updatedBookObj = {
        bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl, price
    }
    // console.log(bookObj);

    //UPDATE book data to db
    fetch(`https://bookverse-api.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedBookObj),
    }).then(res => res.json()).then(data => {
      alert("Book data successfully UPDATED!");
    })
  }

  return (
    <div className="px-4 pt-5 pb-5 lg:pb-[60px] my-12 bg-black">
      <h2 className="mb-8 text-3xl font-bold text-white">Update Book Details</h2>

      <form onSubmit={handleUpdateSubmission} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8 text-white">
          {/* book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" className="text-white" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
              className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" className="text-white" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author Name"
              required
              defaultValue={authorName}
              className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* image url */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" className="text-white" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name="imageUrl"
              placeholder="Book Image URL"
              required
              defaultValue={imageUrl}
              className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"
            />
          </div>

          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" className="text-white"/>
            </div>
            <Select
              id="inputState"
              name="category"
              className="border-2 bg-[#d7cccc] text-black border-[#fffc4c] w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              defaultValue={category}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row/book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" className="text-white"/>
          </div>
          <Textarea id="bookDescription" defaultValue={bookDescription} placeholder="Enter Book Description..." required rows={8} className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"/>
        </div>


        {/* 4th row/ PDF URL */}
        <div className="flex gap-8">
          {/* PDF URL */}
        <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL" className="text-white" />
            </div>
            <TextInput
              id="bookPdfUrl"
              type="text"
              name="bookPdfUrl"
              placeholder="Book PDF URL"
              required
              defaultValue={bookPdfUrl}
              className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"
            />
          </div>

          {/* price */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price of Book" className="text-white" />
            </div>
            <TextInput
              id="price"
              type="text"
              name="price"
              placeholder="Price of Book"
              required
              defaultValue={price}
              className="border-2 bg-[#e9e9e9] text-black border-[#fffc4c]"
            />
          </div>
        </div>
        

        <Button type="submit" className="bg-[#fffc4c] text-black hover:text-[#fffc4c] hover:bg-black hover:border-2 hover:border-[#fffc4c]">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks
