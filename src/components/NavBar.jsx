import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const NavBar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ShopEase
        </NavLink>


        <div className="flex gap-8 text-lg font-medium">

          <NavLink 
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </NavLink>


          <NavLink 
            to="/products"
            className="hover:text-blue-600"
          >
            Products
          </NavLink>

        </div>


        <div className="flex gap-6">


          <NavLink 
            to="/wishlist"
            className="relative"
          >

            <FaHeart 
              size={24}
              className="text-red-500"
            />


            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">
                {wishlist.length}
              </span>
            )}

          </NavLink>



          <NavLink 
            to="/cart"
            className="relative"
          >

            <FaShoppingCart size={24}/>


            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">
                {cart.length}
              </span>
            )}

          </NavLink>


        </div>


      </div>

    </nav>
  );
};

export default NavBar;