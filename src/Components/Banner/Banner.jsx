import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-gray-100 mt-4 py-10">
            <div className="container mx-auto px-4">
                {/* <h1 className="text-center text-4xl font-bold text-red-700 mb-8">This is Home</h1> */}

                <div className="card lg:card-side flex flex-col lg:flex-row mx-auto max-w-5xl rounded-lg">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center gap-4 p-6 text-center lg:text-left  lg:w-1/2">
                        <h2 className="text-3xl font-bold capitalize">Books to freshen up your bookshelf</h2>
                        <p className="text-gray-700">Click the button to explore our curated list of books.</p>
                        <Link to="/Listed Book">
                            <button className="btn bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 capitalize">
                                View The List
                            </button>
                        </Link>
                    </div>

                    {/* Image Section */}
                    <figure className="lg:w-1/2">
                        <img
                            src="https://i.ibb.co/SXnmY5G/images.jpg" // Use your required image URL
                            alt="Books"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;
