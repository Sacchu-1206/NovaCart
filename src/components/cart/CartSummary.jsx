import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>

      </div>

      <Link
        to="/checkout"
        className="block text-center mt-8 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Proceed To Checkout
      </Link>

    </div>
  );
};

export default CartSummary;