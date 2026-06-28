import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { placeOrder } from "../../redux/orderSlice";
import { clearCart } from "../../redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      orderId: `NV-${Date.now()}`,
      orderDate: new Date().toLocaleDateString(),

      customer: formData,

      products: cartItems,

      totalItems: cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),

      subtotal,

      shipping,

      total,

      paymentStatus: "Cash On Delivery",

      status: "Order Placed",
    };

    dispatch(placeOrder(order));

    dispatch(clearCart());

    alert("Order Placed Successfully!");

    navigate("/my-orders");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Billing Form */}

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Billing Details
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="4"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-white shadow rounded-xl p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Items</span>
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
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
};

export default Checkout;