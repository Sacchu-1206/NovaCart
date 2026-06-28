import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaShoppingCart, FaBoxOpen } from "react-icons/fa";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const orders = useSelector(
    (state) => state.orders.orders
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

        {/* Navigation */}

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

          {/* My Orders */}

         <NavLink
          to="/my-orders"
          className={({ isActive }) =>
          `relative flex items-center gap-2 ${
           isActive ? "text-orange-500 font-semibold": "hover:text-orange-500" }`
  }
>
            <FaBoxOpen />

            <span>Orders</span>

            {orders.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs px-2 rounded-full">
                {orders.length}
              </span>
            )}
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