import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { formatCurrency } from "../../utils/formatCurrency";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  const getTrendingProducts = async () => {
    try {
      const response = await api.get("/products");

      const trending = response.data.products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

      setProducts(trending);
    } catch (error) {
      console.error("Failed to fetch trending products:", error);
    }
  };

  useEffect(() => {
    getTrendingProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-4xl font-bold">
            Trending Products
          </h2>

          <p className="text-gray-500 mt-3">
            Discover the highest-rated products loved by our customers.
          </p>

        </div>

        <Link
          to="/products"
          className="text-orange-500 font-semibold hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h3 className="text-lg font-semibold line-clamp-2">
                {product.title}
              </h3>

              <p className="text-orange-500 mt-2">
                ⭐ {product.rating}
              </p>

              <p className="text-2xl font-bold mt-3">
                 {formatCurrency(product.price)}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
};

export default TrendingProducts;