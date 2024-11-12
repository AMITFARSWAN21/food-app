import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../components/CartContext'; 

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Access addToCart from context

  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        const letters = ['a', 'b', 'c', 'd', 'e', 'i', 'j'];
        const foodPromises = letters.map(letter =>
          axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        );
        const foodResults = await Promise.all(foodPromises);
        const allFoods = foodResults.flatMap(result => result.data.meals);
        setFoods(allFoods);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching all food data:', error);
        setLoading(false); 
      }
    };

    fetchAllFoods();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Crave-Worthy Meals Just a Click Away!
      </h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {foods.map((food) => (
            <div
              key={food.idMeal}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 animate-scaleUp transition-transform duration-300 transform hover:scale-105"
            >
              <div className="border rounded-lg p-4 bg-white shadow-md animate-fadeIn">
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={food.strMealThumb}
                  alt={food.strMeal}
                />
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{food.strMeal}</h3>
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                      style={{ minWidth: '120px', height: '40px' }}
                      onClick={() => addToCart(food)} // Add item to cart
                    >
                      Add to Cart
                    </button>
                  </div>
                  <p className="text-gray-600">{food.strCategory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
