import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Product Image */}

      <div className="relative">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:text-red-500 transition">
          <FaHeart />
        </button>

      </div>

      {/* Product Details */}

      <div className="p-5">

        <p className="text-sm text-orange-500 font-medium">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-3">

          <FaStar className="text-yellow-400" />

          <span>
            {product.rating}
          </span>

        </div>

        <div className="flex items-center justify-between mt-5">

          <h2 className="text-2xl font-bold">
            ${product.price}
          </h2>

          <Link
            to={`/products/${product.id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;