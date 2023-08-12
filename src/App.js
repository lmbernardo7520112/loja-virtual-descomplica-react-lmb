import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import productsData from './components/ProductsData';
import AboutUsSection from './components/AboutUsSection';
import Navbar from './Navbar';
import Carousel from './components/Carousel';
import OurTeamSection from './components/OurTeamSection';
import Footer from './components/Footer';
import CartCard from './components/CartCard'; // Import the CartCard component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      // If the item is already in the cart, increase its quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === existingCartItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Navbar />
        <Carousel />
        <AboutUsSection />
        <OurTeamSection />
        <Routes>
          <Route
            path="/"
            element={<ProductList productsData={productsData} addToCart={addToCart} />}
          />
          {/* Display the CartCard component on the cart page */}
          <Route path="/cart" element={<CartCard cartItems={cartItems} totalAmount={totalPrice} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

