// src/components/CartItem.jsx
import { useContext } from 'react';
import CartContext from '../context/CartSlice';
import '../App.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Unit Price: ${item.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)}>Delete</button>
    </div>
  );
};

export default CartItem;
