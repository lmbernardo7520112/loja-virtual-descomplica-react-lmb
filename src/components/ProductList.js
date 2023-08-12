// ProductList.js
import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductList = ({ productsData, addToCart }) => {
  return (
    <section id="nossos-produtos" className="section">
      {/* ... (other content) */}
      <div className="section-content">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            {/* ... (product details) */}
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
        <Link to="/cart" className="btn btn-primary">Ver Carrinho</Link>
      </div>
    </section>
  );
};

export default ProductList;




