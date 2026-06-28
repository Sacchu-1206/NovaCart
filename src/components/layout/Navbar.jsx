import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          NovaCart
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500"
            }
          >
            Products
          </NavLink>

          {/* Wishlist */}

          <NavLink
            to="/wishlist"
            className="relative"
          >
            <FaHeart size={22} />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </NavLink>

          {/* Cart */}

          <NavLink
            to="/cart"
            className="relative"
          >
            <FaShoppingCart size={22} />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </NavLink>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;