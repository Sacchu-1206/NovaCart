import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-md rounded-xl p-5">

      {/* Product Image */}

      <div className="flex items-center gap-5">

        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-28 h-28 object-cover rounded-lg"
        />

        <div>

          <h2 className="text-xl font-semibold">
            {item.title}
          </h2>

          <p className="text-orange-500 mt-1">
            {item.brand}
          </p>

          <h3 className="text-2xl font-bold mt-3">
            ${item.price}
          </h3>

        </div>

      </div>

      {/* Quantity */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          -
        </button>

        <span className="text-xl font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          +
        </button>

      </div>

      {/* Total */}

      <div>

        <h2 className="text-2xl font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </h2>

      </div>

      {/* Remove */}

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        Remove
      </button>

    </div>
  );
};

export default CartItem;