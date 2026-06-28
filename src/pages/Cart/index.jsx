import { useSelector } from "react-redux";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">

          <h2 className="text-3xl font-bold">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Looks like you haven't added any products yet.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

          {/* Cart Summary */}

          <div>

            <CartSummary />

          </div>

        </div>
      )}

    </section>
  );
};

export default Cart;