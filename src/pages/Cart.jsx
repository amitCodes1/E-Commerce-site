import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();


  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const tax = subtotal * 0.18;

  const totalWithTax = subtotal + tax;


  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>


      {cart.length === 0 ? (

        <h2 className="text-xl">
          Your Cart is Empty
        </h2>

      ) : (

        <>

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center border-b py-5"
            >

              <div>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>


                <p className="text-gray-600">
                  ${item.price}
                </p>


                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>


                  <span className="font-bold">
                    {item.quantity}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>


                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="mt-3 bg-black text-white px-4 py-2 rounded"
                >
                  Remove
                </button>


              </div>


              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-28 h-28 rounded-lg object-cover"
              />

            </div>

          ))}



          {/* Order Summary */}

          <div className="mt-10 border-t pt-6">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>


            <div className="space-y-3">


              <div className="flex justify-between">
                <span>
                  Subtotal
                </span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>



              <div className="flex justify-between">
                <span>
                  Tax (18%)
                </span>

                <span>
                  ${tax.toFixed(2)}
                </span>
              </div>



              <div className="flex justify-between text-xl font-bold">
                <span>
                  Total With Tax
                </span>

                <span className="text-blue-600">
                  ${totalWithTax.toFixed(2)}
                </span>
              </div>


            </div>



            <div className="flex gap-4 mt-6">
              <Link to="/checkout">
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                  Pay With Tax
                </button>
              </Link>


            </div>


          </div>


        </>

      )}

    </div>
  );
};


export default Cart;