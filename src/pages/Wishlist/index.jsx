import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeFromWishlist,
} from "../../redux/wishlistSlice";

import {
  addToCart,
} from "../../redux/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white shadow-md rounded-xl p-10 text-center">

          <h2 className="text-3xl font-bold">
            Your Wishlist is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Save your favourite products here.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Browse Products
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <p className="text-orange-500 text-sm">
                  {item.brand}
                </p>

                <h2 className="text-xl font-semibold mt-2">
                  {item.title}
                </h2>

                <p className="text-2xl font-bold mt-3">
                  ${item.price}
                </p>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() =>
                      dispatch(removeFromWishlist(item.id))
                    }
                    className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default Wishlist;