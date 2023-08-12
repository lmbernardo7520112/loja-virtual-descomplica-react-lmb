import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: R${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
