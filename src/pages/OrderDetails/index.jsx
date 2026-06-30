import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { updateOrderStatus } from "../../redux/orderSlice";
import OrderTimeline from "../../components/order/OrderTimeline";
import { formatCurrency } from "../../utils/formatCurrency";

const OrderDetails = () => {
  const { orderId } = useParams();

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);

  const order = orders.find(
    (item) => item.orderId === orderId
  );

  const handleCancelOrder = () => {
  dispatch(
    updateOrderStatus({
      orderId: order.orderId,
      status: "Cancelled",
    })
  );

  toast.success("Order cancelled successfully.");
};

  if (!order) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">

        <h2 className="text-3xl font-bold">
          Order Not Found
        </h2>

        <Link
          to="/my-orders"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Back To Orders
        </Link>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Order Details
      </h1>

      {/* Order Information */}

      <div className="bg-white shadow-md rounded-xl p-6">

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Order Information
            </h2>

            <p>
              <strong>Order ID :</strong> {order.orderId}
            </p>

            <p className="mt-2">
              <strong>Date :</strong> {order.orderDate}
            </p>

            <p className="mt-2">
              <strong>Status :</strong> {order.status}
            </p>
              
              {order.status === "Order Placed" && (
              <button onClick={handleCancelOrder}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
                >
                Cancel Order </button>
                )}
            <p className="mt-2">
              <strong>Payment :</strong> {order.paymentStatus}
            </p>

            <p className="mt-2">
              <strong>Total :</strong>
              {formatCurrency(order.total)}
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Shipping Details
            </h2>

            <p>
              <strong>Name :</strong>
              {" "}
              {order.customer.fullName}
            </p>

            <p className="mt-2">
              <strong>Email :</strong>
              {" "}
              {order.customer.email}
            </p>

            <p className="mt-2">
              <strong>Phone :</strong>
              {" "}
              {order.customer.phone}
            </p>

            <p className="mt-2">
              <strong>Address :</strong>
              {" "}
              {order.customer.address}
            </p>

          </div>

        </div>

      </div>

      {/* Ordered Products */}

      <div className="bg-white shadow-md rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Ordered Products
        </h2>

        <div className="space-y-5">

          {order.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-5 border-b pb-5"
            >

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h3 className="font-semibold text-lg">
                  {product.title}
                </h3>

                <p className="text-gray-500">
                  {product.brand}
                </p>

              </div>

              <div className="text-right">

                <p>
                  Qty : {product.quantity}
                </p>

                <p className="font-bold mt-2">
                  {formatCurrency(product.price * product.quantity)}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Tracking */}

      <div className="mt-10">
        <OrderTimeline status={order.status} />
      </div>

    </section>
  );
};

export default OrderDetails;