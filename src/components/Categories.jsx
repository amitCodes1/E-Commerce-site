import { Link } from "react-router-dom";
import {
  Laptop,
  Shirt,
  Sofa,
  Smartphone,
  Sparkles,
  Watch,
} from "lucide-react";

const categories = [
  {
    title: "Beauty",
    icon: <Sparkles size={40} />,
    color: "bg-pink-500",
  },
  {
    title: "Furniture",
    icon: <Sofa size={40} />,
    color: "bg-orange-500",
  },
  {
    title: "Mens Shirts",
    icon: <Shirt size={40} />,
    color: "bg-blue-500",
  },
  {
    title: "Laptops",
    icon: <Laptop size={40} />,
    color: "bg-green-500",
  },
  {
    title: "Smartphones",
    icon: <Smartphone size={40} />,
    color: "bg-purple-500",
  },
  {
    title: "Mens Watches",
    icon: <Watch size={40} />,
    color: "bg-red-500",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((category) => (
          <Link
            key={category.title}
            to="/products"
            className="group"
          >
            <div
              className={`${category.color} text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300`}
            >
              {category.icon}

              <h3 className="mt-4 font-semibold text-center">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default Categories;