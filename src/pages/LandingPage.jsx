import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery! Discover a variety of houseplants to
          beautify your home.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
