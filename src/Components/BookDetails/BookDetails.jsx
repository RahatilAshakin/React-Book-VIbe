import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = () => {
  // Load books data
  const books = useLoaderData();
  const { id } = useParams();
  const bookId = parseInt(id);

  // Find book by ID
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold text-red-500">Book Not Found</h2>
        <p className="text-gray-500 mt-2">
          We couldn't locate the book with ID <strong>{id}</strong>.
        </p>
      </div>
    );
  }

  // Handle button actions
  const handleAction = (key) => {
    const readList = JSON.parse(localStorage.getItem("read")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isInReadList = readList.some((b) => b.id === book.id);
    const isInWishlist = wishlist.some((b) => b.id === book.id);

    if (key === "wishlist" && isInReadList) {
      Swal.fire({
        icon: "error",
        title: "Action Not Allowed",
        text: `"${book.bookName}" is already in your "Read" list.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else if (!isInWishlist && key === "wishlist") {
      wishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Swal.fire({
        icon: "success",
        title: `Added to Wishlist!`,
        text: `"${book.bookName}" has been successfully added.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else if (!isInReadList && key === "read") {
      readList.push(book);
      localStorage.setItem("read", JSON.stringify(readList));
      if (isInWishlist) {
        const updatedWishlist = wishlist.filter((b) => b.id !== book.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      }
      Swal.fire({
        icon: "success",
        title: `Added to Read!`,
        text: `"${book.bookName}" has been successfully added.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: `Already in ${key === "read" ? "Read" : "Wishlist"}!`,
        text: `"${book.bookName}" is already on your list.`,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="flex justify-center items-center">
          <img src={image} alt={`Cover of ${bookName}`} className="w-72 p-4 rounded-lg" />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{bookName}</h1>
            <p className="text-lg text-gray-600 mt-2">By: {author}</p>
            <hr className="my-4 border-2" />
            <p><strong>{category}</strong></p>
            <p className="mt-4 text-gray-700">{review}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <strong>Tags:</strong>
            {tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">#{tag}</span>
            ))}
          </div>
          <div className="space-y-2 text-gray-700 mt-4">
            <p><strong>Total Pages:</strong> {totalPages}</p>
            <p><strong>Publisher:</strong> {publisher}</p>
            <p><strong>Year:</strong> {yearOfPublishing}</p>
            <p><strong>Rating:</strong> <span className="text-green-600">{rating} / 5</span></p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700" onClick={() => handleAction("read")}>Read</button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400" onClick={() => handleAction("wishlist")}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
