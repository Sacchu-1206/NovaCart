import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaTshirt,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Electronics",
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: "Mobiles",
    icon: <FaMobileAlt />,
  },
  {
    id: 3,
    title: "Fashion",
    icon: <FaTshirt />,
  },
  {
    id: 4,
    title: "Accessories",
    icon: <FaHeadphones />,
  },
];

const Categories = () => {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Shop By Category
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Explore our most popular shopping categories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          {categories.map((category) => (

            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer"
            >

              <div className="text-5xl text-orange-500 flex justify-center mb-5">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;