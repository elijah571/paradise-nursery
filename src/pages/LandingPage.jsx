import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="background-image">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Discover a variety of beautiful plants to bring life into your home.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
