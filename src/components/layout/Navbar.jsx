import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-orange-500">
            NovaCart
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>

          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>

        </ul>

        {/* Search */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-lg px-4 py-2 w-72 outline-none focus:border-orange-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">

          <Link to="/wishlist">
            <FaHeart className="cursor-pointer hover:text-orange-500 duration-200" />
          </Link>

          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-orange-500 duration-200" />
          </Link>

          <FaUser className="cursor-pointer hover:text-orange-500 duration-200" />

        </div>

      </div>
    </nav>
  );
};

export default Navbar;