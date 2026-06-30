import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">

          <h2 className="text-3xl font-bold">
            No Orders Yet
          </h2>

          <p className="text-gray-500 mt-3">
            You haven't placed any orders yet.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Start Shopping
          </Link>

        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row justify-between gap-5">

                <div>

                  <h2 className="text-xl font-bold">
                    Order ID
                  </h2>

                  <p className="text-gray-600">
                    {order.orderId}
                  </p>

                  <p className="mt-3">
                    <strong>Date :</strong> {order.orderDate}
                  </p>

                  <p className="mt-2">
                    <strong>Items :</strong> {order.totalItems}
                  </p>

                  <p className="mt-2">
                    <strong>Total :</strong> 
                    {formatCurrency(order.total)}
                  </p>

                </div>

                <div className="flex flex-col justify-between">

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-center">
                    {order.status}
                  </span>

                  <Link
                    to={`/my-orders/${order.orderId}`}
                    className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-center hover:bg-orange-600"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default MyOrders;