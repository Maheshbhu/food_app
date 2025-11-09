import React from "react";
import "./CartSidebar.css";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ cart, updateQty, removeItem, isCartOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      {/* 🩶 Background Blur Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* 🛒 Slide-in Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={closeSidebar}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty!</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <div className="qty-control">
                      <button
                        onClick={() => updateQty(item._id, Math.max(1, item.qty - 1))}
                        disabled={item.qty === 1}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove" onClick={() => removeItem(item._id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>Total: ₹{total}</h3>
              <button
                className="checkout-btn"
                onClick={() => {
                  closeSidebar();
                  navigate("/cart");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
