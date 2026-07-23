import { Link } from "react-router-dom";

const Success = () => {

  const orderId = Math.floor(
    Math.random() * 1000000
  );


  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">


        <div className="text-green-500 text-6xl mb-5">
          ✓
        </div>


        <h1 className="text-3xl font-bold mb-3">
          Order Placed Successfully!
        </h1>


        <p className="text-gray-600">
          Thank you for your purchase.
          Your order has been confirmed.
        </p>


        <div className="bg-gray-100 rounded-lg p-4 mt-5">

          <p className="font-semibold">
            Order ID
          </p>

          <p className="text-blue-600 font-bold">
            #{orderId}
          </p>

        </div>



        <div className="flex gap-4 mt-6">


          <Link to="/products">
            <button
              className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </Link>



          <Link to="/">
            <button
              className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
            >
              Home
            </button>
          </Link>


        </div>


      </div>

    </div>
  );
};


export default Success;