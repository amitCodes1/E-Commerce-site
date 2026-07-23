import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  console.log("Checkout Page Loaded");

  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    clearCart();

    navigate("/success");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <form
        onSubmit={placeOrder}
        className="space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          rows="4"
          required
        />
        
          <button
            type="submit"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Place Order
          </button>
        
      </form>
    </div>
  );
};

export default Checkout;