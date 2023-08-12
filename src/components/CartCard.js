import React from 'react';

const CartCard = ({ cartItems, totalAmount }) => {
  return (
    <div className="cart-card">
      <h2>Seu Carrinho</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>R${item.price.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="total">
              Total: R${totalAmount.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartCard;




