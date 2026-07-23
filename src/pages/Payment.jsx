import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Payment = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState("card");

  const [paymentData, setPaymentData] = useState({
    card: "",
    expiry: "",
    cvv: "",
    upi: "",
  });


  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };


  const handlePayment = (e) => {
  e.preventDefault();

  setLoading(true);

  toast.loading("Processing Payment...", {
    id: "payment",
  });

  setTimeout(() => {
    toast.success("Payment Successful!", {
      id: "payment",
    });

    navigate("/success");
  }, 2000);
};


  return (
    <div className="max-w-xl mx-auto px-6 py-10">


      <h1 className="text-4xl font-bold mb-8">
        Payment
      </h1>



      <div className="flex gap-4 mb-6">


        <button
          onClick={() => setMethod("card")}
          className={`px-5 py-3 rounded-xl ${
            method === "card"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
          }`}
        >
          Card
        </button>


        <button
          onClick={() => setMethod("upi")}
          className={`px-5 py-3 rounded-xl ${
            method === "upi"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
          }`}
        >
          UPI
        </button>


        <button
          onClick={() => setMethod("cod")}
          className={`px-5 py-3 rounded-xl ${
            method === "cod"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
          }`}
        >
          COD
        </button>


      </div>



      <form
        onSubmit={handlePayment}
        className="space-y-5"
      >


        {method === "card" && (

          <>

          <input
          type="text"
          name="card"
          placeholder="Card Number"
          value={paymentData.card}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
          />


          <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={paymentData.expiry}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
          />


          <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={paymentData.cvv}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
          />

          </>

        )}



        {method === "upi" && (

          <input
          type="text"
          name="upi"
          placeholder="Enter UPI ID"
          value={paymentData.upi}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
          />

        )}



        {method === "cod" && (

          <p className="bg-yellow-100 p-4 rounded-lg">
            Cash on Delivery Selected
          </p>

        )}



        <button
  type="submit"
  disabled={loading}
  className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400"
>
  {loading ? "Processing Payment..." : "Pay Now"}
</button>


      </form>


    </div>
  );
};


export default Payment;