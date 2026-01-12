// src/components/PlantCard.jsx
import { useContext } from 'react';
import CartContext from '../context/CartSlice';

const PlantCard = ({ plant }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const inCart = cartItems.some((item) => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.thumbnail} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={() => addToCart(plant)} disabled={inCart}>
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
