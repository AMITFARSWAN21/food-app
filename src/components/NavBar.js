import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300'>
      <div className='flex items-center'>
        <img src='/logo.png' alt="Logo" className='h-15 w-20' />
      </div>
      
      <div className='flex-1 flex justify-center space-x-8 font-semibold text-gray-700'>
        <Link className='text-lg hover:underline cursor-pointer' to="/">Home</Link>
        <Link className='text-lg hover:underline cursor-pointer' to="/menu">Menu</Link>
        <Link className='text-lg hover:underline cursor-pointer' to="/cart">Cart</Link>
        <Link className='text-lg hover:underline cursor-pointer' to="/review">Review</Link>
      </div>
      
      <div className='flex items-center space-x-10'>
        <img src={assets.search_icon} alt="Search" className='h-6 w-6' />
        <img src={assets.basket_icon} alt="Basket" className='h-6 w-6' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
