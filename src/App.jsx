import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductList';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutUs';
import { CartProvider } from './context/CartSlice';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* REQUIRED LANDING PAGE CONTENT */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="background-image">
                <div className="overlay">
                  <h1>Welcome to Paradise Nursery</h1>
                  <p>
                    Discover a variety of beautiful plants to bring life into
                    your home.
                  </p>
                  <Link to="/products" className="get-started-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            }
          />

          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
