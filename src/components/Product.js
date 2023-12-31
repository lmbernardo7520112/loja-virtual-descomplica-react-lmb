import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>R${product.price.toFixed(2)}</span>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;

