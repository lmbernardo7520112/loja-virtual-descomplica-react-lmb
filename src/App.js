import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import LogoDescomplica from './images/LogoDescomplica.png';
import ProductList from './components/ProductList'; // Import your ProductList component
import productsData from './components/ProductsData'; // Import the product data
import AboutUsSection from './components/AboutUsSection';
import Navbar from './Navbar';
import Carousel from './components/Carousel';
import OurTeamSection from './components/OurTeamSection';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar /> {/* Use the Navbar component */}
      <Carousel />
      <AboutUsSection /> 
      <OurTeamSection />

      <section id="nossos-produtos" className="section">
        <h2>Nossos Produtos</h2>
        <div className="section-content">
          {productsData.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>R${product.price.toFixed(2)}</span>
              <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
