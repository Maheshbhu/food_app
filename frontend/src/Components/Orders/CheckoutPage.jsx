import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance"// ✅ Import axios instance

const CheckoutPage = ({ cart, setCart, setOrders }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 🧩 Function to handle placing an order
  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      alert("⚠️ Please enter your delivery address!");
      return;
    }

    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    try {
      setLoading(true);

      // 🧾 Payload to match backend API
       const payload = {
    items: cart.map((item) => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
      image: item.image, // ✅ Include image field
    })),
    total,
    address,
    paymentMethod: payment,
  };

      // 🚀 POST API call
      const { data } = await axiosInstance.post("/orders", payload);

      if (data.success) {
        alert("✅ Order placed successfully!");
        console.log(data)
        setOrders((prev) => [...prev, data.order]); // Add new order
        setCart([]); // Clear local cart
        localStorage.removeItem("cart"); // Clear saved cart from localStorage
        navigate("/orders"); // Redirect to Orders page
      } else {
        alert("❌ Failed to place order. Please try again!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-details">
        {/* LEFT SIDE */}
        <div className="checkout-left">
          <h3>Delivery Address</h3>
          <textarea
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={payment === "COD"}
                onChange={() => setPayment("COD")}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Online"
                checked={payment === "Online"}
                onChange={() => setPayment("Online")}
              />
              Online Payment
            </label>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item._id} className="checkout-item">
              <p>
                {item.name} × {item.qty}
              </p>
              <p>₹{item.price * item.qty}</p>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{total}</h3>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
