import React, { useContext } from 'react';
import CartItem from '../components/CartItems';
import CartContext from '../context/CartSlice';

const CartPage = () => {
  const { cartItems, totalCost } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-grid">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total Amount: ${totalCost.toFixed(2)}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
