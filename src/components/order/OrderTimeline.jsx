const OrderTimeline = ({ status }) => {
  const steps = [
  "Order Placed",
  "Packed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

if (status === "Cancelled") {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Tracking
      </h2>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">

        <h3 className="text-red-600 text-xl font-bold">
          ❌ Order Cancelled
        </h3>

        <p className="text-gray-600 mt-3">
          This order has been cancelled successfully.
        </p>

      </div>

    </div>
  );
}

  const currentStep = steps.indexOf(status);

  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-8">
        Order Tracking
      </h2>

      <div className="space-y-6">

        {steps.map((step, index) => {

          const completed = index <= currentStep;

          return (
            <div
              key={step}
              className="flex items-center gap-5"
            >

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold ${
                  completed
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                ✓
              </div>

              <div>

                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </h3>

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
};

export default OrderTimeline;