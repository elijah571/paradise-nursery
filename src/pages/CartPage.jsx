// src/pages/CartPage.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartSlice';
import CartItem from '../components/CartItems';
import Header from '../components/Header';
import '../app.css';

const CartPage = () => {
  const { cartItems, totalItems, totalCost } = useContext(CartContext);

  return (
    <div>
      <Header />
      <h2 className="page-title">Shopping Cart</h2>
      <div className="cart-grid">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <Link to="/products" className="btn">
            Continue Shopping
          </Link>
          <button className="btn checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
