import React from "react";
import "./Orders.css";
import axiosInstance from "../../api/axiosInstance"
import { useState } from "react";
import { useEffect } from "react";
const OrdersPage = ({ orders }) => {

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order._id}</h3>
                <p className="order-date">{new Date(order.createdAt).toLocaleString("en-IN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
})}</p>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item._id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="order-item-details">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.qty}</p>
                      <p>Price: ₹{item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <p>
                  <strong>Total:</strong> ₹{order.total}
                </p>
                <p>
                  <strong>Payment:</strong> {order.paymentMethod?.toUpperCase()}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status">{order.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
