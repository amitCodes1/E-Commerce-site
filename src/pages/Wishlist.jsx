import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
const { wishlist, removeFromWishlist } = useWishlist();

  

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-3xl font-bold text-gray-500">
          ❤️ Your Wishlist is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>

      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {wishlist.map((product) => (
    <div key={product.id} className="bg-white rounded-xl shadow-lg p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="mt-4 font-bold text-lg">{product.title}</h2>

      <p className="text-blue-600 font-semibold mt-2">
        ${product.price}
      </p>

      <button
        onClick={() => removeFromWishlist(product.id)}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  ))}
</div>
      </div>
    
  );
};

export default Wishlist;