import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/product/ProductCard";
import SkeletonCard from "../../components/common/SkeletonCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const getProducts = async () => {
    try {
      const response = await api.get("/products?limit=100");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((item) => item.category)),
  ];

  // Filter + Search + Sort
  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    // Sort
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  if (loading) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </section>
  );
}

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-gray-500 mt-2">
            {filteredProducts.length} Products Found
          </p>
        </div>

        {/* Controls */}

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full md:w-64 outline-none"
          />

          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="">Sort</option>
            <option value="low">Price : Low to High</option>
            <option value="high">Price : High to Low</option>
          </select>

        </div>

      </div>

      {/* Products */}

      {filteredProducts.length === 0 ? (
        <h2 className="text-center text-2xl py-20">
          No Products Found
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      )}

    </section>
  );
};

export default Products;