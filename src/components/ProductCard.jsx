import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">

      <div className="relative overflow-hidden">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        <button
          onClick={() => {
            if (isInWishlist(product.id)) {
              removeFromWishlist(product.id);
              toast.success("Removed from Wishlist");
            } else {
              addToWishlist(product);
              toast.success("Added to Wishlist ❤️");
            }
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
        >
          <Heart
            size={18}
            className={
              isInWishlist(product.id)
                ? "text-red-500 fill-red-500"
                : ""
            }
          />
        </button>

        <div className="absolute left-3 top-3 bg-yellow-400 text-black px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-semibold">
          <Star size={14} fill="black" />
          {product.rating}
        </div>

      </div>

      <div className="p-5">

        <h2 className="text-lg font-bold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <p className="text-2xl font-bold text-blue-600">
              ${product.price}
            </p>

            <p className="text-sm text-green-600">
              {product.discountPercentage}% OFF
            </p>
          </div>

          <button
            onClick={() => {
              addToCart(product);
              toast.success("Product added to cart");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
          >
            <ShoppingCart size={20} />
          </button>

        </div>

        <Link
          to={`/product/${product.id}`}
          className="block mt-5 text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;