// src/pages/Cart.js
import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {cart.map((item) => (
            <div
              key={item.idMeal}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="border rounded-lg p-4 bg-white shadow-md">
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{item.strMeal}</h3>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                      onClick={() => removeFromCart(item.idMeal)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-gray-600">{item.strCategory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        <Link to="/menu" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Cart;
