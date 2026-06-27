import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../product/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeaturedProducts = async () => {
    try {
      const response = await api.get("/products?limit=8");
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Loading Products...
        </h2>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Handpicked products specially selected for you.
        </p>

      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;