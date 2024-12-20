import React from 'react';

const Booklist = ({ book }) => {
  const {
    id,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleOpenBooks = () => {
    window.open(`/Book Details/${id}`);
  };

  return (
    <div 
      className="border border-black p-4 rounded-xl shadow-lg relative group cursor-pointer transform 
      transition-transform duration-300 hover:scale-110" 
      onClick={handleOpenBooks} // Handle click event
    >
      {/* Hover tooltip */}
      <div 
        className="absolute top-3/4 right-2 bg-red-600 text-white font-bold text-m px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        Click for details
      </div>

      {/* Book Content */}
      <div>
        <div>
          <img
            src={image}
            alt="Book cover"
            className="h-96 w-full rounded-md"
          />
          <div className="mt-6 flex space-x-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-green-100 text-green-800 text-l font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900">{bookName}</h2>
          <p className="text-l mt-2 text-gray-600">By: {author}</p>
          <hr className="mt-5 border-2 border-dashed" />
          <div className="flex items-center justify-between my-4">
            <p className="text-sm text-gray-500">{category}</p>
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-bold text-sm">{rating}</span>
              <p className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.151-6.063 5.845 1.447 8.315-7.384-3.894-7.384 3.894 1.447-8.315-6.063-5.845 8.332-1.151z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
