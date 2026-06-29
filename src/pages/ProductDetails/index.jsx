import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";

import api from "../../services/api";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist } from "../../redux/wishlistSlice";

import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );

      toast.success("Product added to cart");
  };

  const handleWishlist = () => {
    dispatch(addToWishlist(product));
    toast.success("Product added to wishlist");
  };

  if (loading) {
    return (
      <h2 className="text-center text-3xl py-20">
        Loading Product...
      </h2>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Image */}

        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}

        <div>

          <p className="text-orange-500 font-medium">
            {product.brand}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mt-4">

            <FaStar className="text-yellow-400" />

            <span>{product.rating}</span>

          </div>

          <h2 className="text-3xl font-bold mt-6">
            ${product.price}
          </h2>

          <p className="text-gray-600 mt-6 leading-7">
            {product.description}
          </p>

          <p className="mt-5">
            <strong>Category :</strong> {product.category}
          </p>

          <p className="mt-2">
            <strong>Stock :</strong> {product.stock}
          </p>

          {/* Quantity */}

          <div className="flex items-center gap-4 mt-8">

            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
              className="border px-4 py-2 rounded-lg"
            >
              -
            </button>

            <span className="text-xl font-semibold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="border px-4 py-2 rounded-lg"
            >
              +
            </button>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button
              onClick={handleAddToCart}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
            >
              Add To Cart
            </button>

            <button
              onClick={handleWishlist}
              className="border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              Wishlist
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;