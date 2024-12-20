import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    const links = (

        <>
        
        <li> <NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/Listed Book'>Listed Book</NavLink></li>
        <li> <NavLink to='/Pages to Read'>Pages to Read</NavLink></li>
        
        
        </>


    )


    return (
        <div className='container mx-auto mt-8'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to='/'><a className="btn btn-ghost text-xl">Book Vibe</a></Link>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu gap-8 menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn bg-green-500">Sign In</a>
    <a className="btn bg-blue-400">Sign Up</a>
  </div>
            </div>
        </div>
        
    );
};

export default Navbar;