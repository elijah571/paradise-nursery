import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import '../app.css';

// Add a category property to each plant
const plants = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 12.99,
    category: 'Indoor',
    thumbnail:
      'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/af92/live/fca737f0-1dec-11f0-bfbd-17d9584820f6.jpg.webp',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 15.5,
    category: 'Indoor',
    thumbnail:
      'https://m.media-amazon.com/images/I/61N5G2LbIoL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 10.99,
    category: 'Indoor',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
  },
  {
    id: 4,
    name: 'Spider Plant',
    price: 9.99,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShc_NHwdrc93cOASIcoJRrGtPftvqITFUJ5Q&s',
  },
  {
    id: 5,
    name: 'Lavender',
    price: 14.99,
    category: 'Outdoor',
    thumbnail:
      'https://cloversgarden.com/cdn/shop/products/CGHidcoteLavenderPrimary_1000x1000.jpg?v=1679602241',
  },
  {
    id: 6,
    name: 'Fiddle leaf',
    price: 22.5,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6bTmLP7XhALQTJfP-cWYVZ9OPh9S1xsMWQ&s',
  },
];

const ProductPage = () => {
  // Get unique categories
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <Header />
      <h1 className="page-title">Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category} Plants</h2>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
