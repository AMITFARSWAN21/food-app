import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { menu_list } from '../assets/assets';
import './Menu.css';
import Footer from '../components/Footer';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative h-[70vh] w-full bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center px-8"
           style={{ backgroundImage: "url('/header_img.png')" }}>
        <div className="text-white text-6xl font-bold leading-snug tracking-wide mb-4">
          <h2 className="text-left">
            Order Your <br /> Favourite Food Here
          </h2>
        </div>

        <div className="text-left mt-8 mb-8">
          <Link to="/menu">
            <button className="bg-white text-black py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
              View Menu
            </button>
          </Link>
        </div>
      </div>

      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className={`text-4xl font-bold mb-6 text-center text-gray-800 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          Explore Our Best
        </h1>
        <p className={`mb-12 text-center text-gray-600 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          Discover the best culinary delights right at your doorstep. At Tomato, we bring your favorite dishes from local restaurants straight to you with a click.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu_list.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src={item.menu_image} alt={item.menu_name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 text-center">{item.menu_name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Top Restaurants collaborating with us
          </h2>
          <div className="flex justify-center space-x-12">
            {['location1.avif', 'location2.avif', 'location3.avif', 'location4.avif', 'location5.avif'].map((location, index) => (
              <div key={index} className="h-64 w-60 bg-cover bg-center shadow-md hover:shadow-xl transition-shadow duration-300" 
                   style={{ backgroundImage: `url('/${location}')` }}>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Best Place To Eat Across Cities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Bangalore', 'Pune', 'Mumbai', 'Faridabad', 'Gurgaon', 'Noida', 'Jammu', 'Jaipur'].map((city, index) => (
              <div key={index} className="h-40 flex flex-col items-center justify-center bg-white text-black font-semibold border border-gray-400 p-4 m-2 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <h2>Best Restaurant in {city}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Best Cuisine Near Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Chinese', 'Korean', 'South Indian', 'Kerala', 'North Indian', 'Sea Food', 'Punjabi', 'Kashmiri'].map((cuisine, index) => (
              <div key={index} className="h-40 flex flex-col items-center justify-center bg-white text-black font-semibold border border-gray-400 p-4 m-2 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <h2 className="truncate">{cuisine} Restaurants near me</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
