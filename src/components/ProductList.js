import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Adjust the import path accordingly

const ProductList = ({ productsData, addToCart }) => {
  return (
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
        {/* Ver Carrinho button */}
        <div div className="blue-button ver-carrinho-button">
          <Link to="/cart">Ver Carrinho</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductList;


