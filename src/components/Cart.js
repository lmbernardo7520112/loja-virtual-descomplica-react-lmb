import React from 'react';

const Cart = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - R${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: R${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;


