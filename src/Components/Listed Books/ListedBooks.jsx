import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaFileAlt, FaCalendarAlt } from "react-icons/fa"; // Import icons

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortOption, setSortOption] = useState("title"); // Sorting state
  const navigate = useNavigate();

  useEffect(() => {
    const storedRead = JSON.parse(localStorage.getItem("read")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setReadBooks(storedRead);
    setWishlistBooks(storedWishlist);
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/Book details/${id}`);
  };

  const sortBooks = (books) => {
    return [...books].sort((a, b) => {
      if (sortOption === "title") return a.bookName.localeCompare(b.bookName);
      if (sortOption === "year") return a.year - b.year;
      return 0;
    });
  };

  const renderBooks = (books) => sortBooks(books).map((book) => {
    // Destructuring book properties
    const { id, bookName, author, image, tags, publisher, totalPages, yearOfPublishing, category, rating } = book;

    return (
      <div key={id} className="border rounded-lg shadow-md p-6 mb-6 flex gap-4 bg-white">
        {/* Book Image */}
        <img
          src={image}
          alt={bookName}
          className="w-32 h-40 object-cover rounded-md shadow-md border"
        />

        {/* Book Details */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{bookName}</h3>
          <p className="text-gray-600 text-sm mb-2">By: <span className="font-medium">{author}</span></p>

          {/* Tags */}
          <div className="flex gap-4 mb-2">
            <span className="font-bold">Tag:</span>
            {tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">{tag}</span>
            ))}
            <p className="flex items-center gap-2">
              <FaCalendarAlt className=" text-gray-400" /> <span className="capitalize">Year of publishing :</span> {yearOfPublishing}
            </p>
          </div>

          {/* Additional Details */}
          <div className="text-sm text-gray-500 flex gap-4 mb-4">
            <p className="flex items-center gap-1">
              <FaBook className="text-gray-400" /> Publisher: {publisher}
            </p>
            <p className="flex items-center gap-1">
              <FaFileAlt className="text-gray-400" /> Pages: {totalPages}
            </p>
          </div>

          {/* Labels */}
          <div className="flex gap-6 items-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 text-l rounded-2xl">Category: {category}</span>
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 text-l rounded-2xl">Rating: {rating}</span>

            <button
              onClick={() => handleViewDetails(id)}
              className="bg-green-500 text-white px-2 py-1 rounded-2xl hover:bg-green-600"
            >
              View Details
            </button>
          </div>

          {/* View Details Button */}
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h2 className="text-3xl text-center font-bold">Books</h2>
        {/* Sort By Dropdown */}
      </div>

      {/* Center the dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-md p-2 bg-white shadow-sm"
        >
          <option value="title">Sort By: Title</option>
          <option value="year">Sort By: Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-6 py-2 text-lg ${activeTab === "read" ? "font-bold border-b-2 border-green-500" : "text-gray-500"}`}
        >
          Read Books
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-2 text-lg ${activeTab === "wishlist" ? "font-bold border-b-2 border-green-500" : "text-gray-500"}`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book List */}
      {activeTab === "read" ? renderBooks(readBooks) : renderBooks(wishlistBooks)}
    </div>
  );
};

export default ListedBooks;
