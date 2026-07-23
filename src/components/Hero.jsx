import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2">

          <p className="text-blue-300 text-lg mb-3">
            🔥 New Collection 2026
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Discover The Best
            <span className="text-cyan-400">
              {" "}Fashion
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Explore thousands of premium products with amazing discounts and
            fast delivery.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/products"
              className="bg-cyan-500 px-7 py-4 rounded-xl font-bold hover:bg-cyan-600 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              Explore
            </Link>

          </div>

        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Hero"
            className="rounded-3xl shadow-2xl w-[500px]"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;