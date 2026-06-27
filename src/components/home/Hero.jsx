import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}

        <div className="flex-1">

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            New Collection 2026
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Discover Premium
            <span className="text-orange-500"> Shopping </span>
            Experience
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Explore thousands of premium products with fast delivery,
            secure payment and exclusive offers.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/products"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 duration-300"
            >
              Shop Now
            </Link>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white duration-300">
              Explore
            </button>

          </div>

        </div>

        {/* Right Content */}

        <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Hero"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;