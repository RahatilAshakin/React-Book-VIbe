import React from 'react';
import Booklist from '../Booklist/Booklist';


const BookLists = ({ books }) => {
  return (
    <div className="my-8 mt-16">
      <h1 className="text-center text-3xl font-bold capitalize text-black-600">
        Books 
      </h1>

      <div className=' gap-8 mt-4 bg-white border grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-gray-200 rounded-lg shadow-md p-4'>

        {books.map(book=> <Booklist key={book.id} book={book}></Booklist>)}

      </div>
     
    </div>
  );
};

export default BookLists;
