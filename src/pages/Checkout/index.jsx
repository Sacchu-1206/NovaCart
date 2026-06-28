import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleOrder = () => {
    alert("Order Placed Successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Billing Form */}

        <div className="bg-white shadow-md rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Billing Details
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Shipping Address"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

          </form>

        </div>

        {/* Order Summary */}

        <div className="bg-white shadow-md rounded-xl p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          <button
            onClick={handleOrder}
            className="w-full mt-8 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
};

export default Checkout;