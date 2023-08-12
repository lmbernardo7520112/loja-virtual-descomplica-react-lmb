import React from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

const Cart = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart">
      {/* Button to go back to the main page */}
      <Link to="/" className="back-button">
        Voltar para a Página Principal
      </Link>
      <CartCard cartItems={cartItems} totalAmount={totalPrice} />
    </div>
  );
};

export default Cart;







