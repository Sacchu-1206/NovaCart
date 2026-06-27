import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/product/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await api.get("/products?limit=100");
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, sort]);

  if (loading) {
    return (
      <h2 className="text-center text-3xl py-20">
        Loading Products...
      </h2>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

        <h1 className="text-4xl font-bold">
          All Products
        </h1>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-64 outline-none"
          />

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default Products;