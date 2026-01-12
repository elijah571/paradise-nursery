import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import '../App.css';

// Add a category property to each plant
const plants = [
  // Indoor (6)
  {
    id: 1,
    name: 'Aloe Vera',
    price: 12.99,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo6rhRaF-a9LbnJufDZfhzIFpkHavkTExKQ&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaYFpJeZsHUfcGQtDbdKTfqCabhA79_81-w&s',
  },
  {
    id: 4,
    name: 'Spider Plant',
    price: 9.99,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDU5TcXBJQdeaUTuS_Ao-10QnWUMPZkWYSw&s',
  },
  {
    id: 5,
    name: 'Fiddle Leaf',
    price: 22.5,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyFL1-ZS00T-OoyRlZ29aHgsJoVrNqsX6NQ&s',
  },
  {
    id: 6,
    name: 'ZZ Plant',
    price: 18.0,
    category: 'Indoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qu-95ZpGqFxHwhGWbR71KCK90ENOVHvFuw&s',
  },

  // Outdoor (6)
  {
    id: 7,
    name: 'Lavender',
    price: 14.99,
    category: 'Outdoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIUcJ_I0b43bYZJCxDr95FeNMhfYDh7dqAA&s',
  },
  {
    id: 8,
    name: 'Rose',
    price: 19.99,
    category: 'Outdoor',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFTtWSzMAifN_nM0ieLDH552lQmn34085eA&s',
  },
  {
    id: 9,
    name: 'Hibiscus',
    price: 16.99,
    category: 'Outdoor',
    thumbnail:
      'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/other/roselle_hibiscus_sabdariffa_flowers_other/1800x1200_roselle_hibiscus_sabdariffa_flowers_other.jpg?resize=750px:*&output-quality=75',
  },
  {
    id: 10,
    name: 'Tulip',
    price: 11.99,
    category: 'Outdoor',
    thumbnail:
      'https://tuliptoursholland.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftulip-tours-holland.appspot.com%2Fo%2Fblog%252F0bb16ab2-7e82-47dc-a1fa-e4c56b7dd17a-IMG_8511.jpg%3Falt%3Dmedia%26token%3D8b38e5cc-fb96-4099-b6b3-7673be42cfd5&w=1080&q=75',
  },
  { id: 11, name: 'Daisy', price: 8.99, category: 'Outdoor', thumbnail: '...' },
  {
    id: 12,
    name: 'Sunflower',
    price: 13.99,
    category: 'Outdoor',
    thumbnail:
      'https://northernseeds.ca/cdn/shop/files/shastadaisies.jpg?v=1734314741',
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
