
import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './components/Cart'; 
import { CartProvider } from './components/CartContext'; 
import Review from './pages/Review';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/review' element={<Review />} /> 
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
