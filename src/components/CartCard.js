import React from 'react';

const CartCard = ({ cartItems, totalAmount }) => {
  return (
    <div className="cart-card">
      <h2>Seu Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantidade: {item.quantity}</span>
            <span>Valor: R${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p>Total: R${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartCard;
