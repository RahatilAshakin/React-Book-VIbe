import React from 'react';
import Banner from '../Banner/Banner';
import BookLists from '../BookLists/BookLists';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const books = useLoaderData(); // Add parentheses to call the function

  // console.log(books); // This will log the books data to the console

  return (
    <div className='container mx-auto'>
      <Banner />
      <BookLists books={books} /> {/* Pass the books data as props */}
    </div>
  );
};

export default Home;
