// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartSlice';
import AboutPage from '../pages/AboutUs';

const Header = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/products" className="logo">
        🌿 Paradise Nursery
      </Link>
      <Link to="/about">About Me</Link> {/* About link */}
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          🛒 {totalItems}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
