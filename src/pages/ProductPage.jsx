import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import '../styles.css';

const plants = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 12.99,
    thumbnail:
      'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/af92/live/fca737f0-1dec-11f0-bfbd-17d9584820f6.jpg.webp',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 15.5,
    thumbnail:
      'https://m.media-amazon.com/images/I/61N5G2LbIoL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 10.99,
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
  },
  {
    id: 4,
    name: 'Spider Plant',
    price: 9.99,
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShc_NHwdrc93cOASIcoJRrGtPftvqITFUJ5Q&s',
  },
  {
    id: 5,
    name: 'Lavender',
    price: 14.99,
    thumbnail:
      'https://cloversgarden.com/cdn/shop/products/CGHidcoteLavenderPrimary_1000x1000.jpg?v=1679602241',
  },
  {
    id: 6,
    name: 'Fiddle leaf',
    price: 22.5,
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6bTmLP7XhALQTJfP-cWYVZ9OPh9S1xsMWQ&s',
  },
];

const ProductPage = () => {
  return (
    <div>
      <Header />
      <h2 className="page-title">Our Plants</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
