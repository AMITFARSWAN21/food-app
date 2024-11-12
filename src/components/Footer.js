import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
    
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-2">123 Ashoka Enclave Main</p>
            <p className="mb-2">Foodville, FA 12345</p>
            <p className="mb-2">Email: <a href="mailto:contact@foodie.com" className="text-gray-400 hover:text-white">contact@foodie.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+11234567890" className="text-gray-400 hover:text-white">(123) 456-7890</a></p>
          </div>
       
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h2 className="text-xl font-bold mb-2 ">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-700 pt-4 mt-4">
       
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Help & Support</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Legal</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

       
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 Foodie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
