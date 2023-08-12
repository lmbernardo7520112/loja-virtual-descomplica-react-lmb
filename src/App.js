import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
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
          <Route
            path="/cart"
            element={<CartCard cartItems={cartItems} totalAmount={totalPrice} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



