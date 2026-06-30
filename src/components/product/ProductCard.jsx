import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductCard = ({ product }) => {
  const originalPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">

      {/* Product Image */}

      <div className="relative overflow-hidden">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Discount Badge */}

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          {Math.round(product.discountPercentage)}% OFF
        </span>

        {/* Wishlist */}

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition">
          <FaHeart />
        </button>

      </div>

      {/* Product Details */}

      <div className="p-5">

        {/* Brand */}

        <p className="text-sm text-orange-500 font-medium">
          {product.brand}
        </p>

        {/* Title */}

        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-3">

          <FaStar className="text-yellow-400" />

          <span className="text-sm">
            {product.rating}
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold">
           {formatCurrency(product.price)}
          </span>

          <span className="text-gray-400 line-through">
           {formatCurrency(originalPrice)}
          </span>

        </div>

        {/* View Button */}

        <Link
          to={`/products/${product.id}`}
          className="block text-center mt-5 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;