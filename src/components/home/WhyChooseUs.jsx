import {
  FaTruck,
  FaCreditCard,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTruck size={38} />,
    title: "Free Shipping",
    description:
      "Free delivery on all orders above $50.",
  },
  {
    id: 2,
    icon: <FaCreditCard size={38} />,
    title: "Secure Payment",
    description:
      "100% secure payment with trusted gateways.",
  },
  {
    id: 3,
    icon: <FaUndoAlt size={38} />,
    title: "Easy Returns",
    description:
      "7-day hassle-free return policy.",
  },
  {
    id: 4,
    icon: <FaHeadset size={38} />,
    title: "24/7 Support",
    description:
      "Friendly customer support anytime.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Why Choose NovaCart?
        </h2>

        <p className="text-gray-500 mt-4">
          We focus on providing a smooth, secure, and
          reliable shopping experience.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >

            <div className="flex justify-center text-orange-500">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6">
              {feature.title}
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              {feature.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;