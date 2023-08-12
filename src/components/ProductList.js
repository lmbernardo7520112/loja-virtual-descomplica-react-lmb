import React from 'react';
import Product from './Product';

const ProductList = ({ productsData, addToCart }) => {
  return (
    <section id="nossos-produtos" className="section">
      <h2>Nossos Produtos</h2>
      <div className="section-content">
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

