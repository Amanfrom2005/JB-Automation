import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ id, name, image, category, rating, description }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative pt-[100%] overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>

        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{category}</div>
          <h3 className="text-gray-800 font-medium text-sm sm:text-base mb-1 line-clamp-1">{name}</h3>
          <h3 className="text-gray-800 font-sm text-sm mb-1 line-clamp-4">{description}</h3>

          <div className="flex items-center mb-2">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
