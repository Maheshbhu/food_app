import React from "react";
import "./Profile.css";

const Profile = ({ user, orders }) => {
  if (!user)
    return (
      <div className="profile-container empty">
        <h2>Please log in to view your profile.</h2>
      </div>
    );

  return (
    <div className="profile-page">
      <div className="profile-left">
        <div className="profile-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <p className="join-date">Member since Jan 2025</p>
          <button className="edit-btn">Edit Profile</button>
        </div>

        <div className="profile-menu">
          <h3>Account Settings</h3>
          <ul>
            <li>👤 Edit Profile</li>
            <li>📦 My Orders</li>
            <li>🏠 Saved Addresses</li>
            <li>💳 Payment Methods</li>
            <li>🔔 Notifications</li>
            <li>⚙️ Preferences</li>
            <li>❓ Help & Support</li>
          </ul>
        </div>
      </div>

      <div className="profile-right">
        <h2>My Dashboard</h2>

        <div className="profile-stats">
          <div className="stat-card">
            <h3>🍔 Total Orders</h3>
            <p>{orders.length}</p>
          </div>
          <div className="stat-card">
            <h3>💰 Total Spent</h3>
            <p>
              ₹
              {orders.reduce(
                (sum, order) => sum + (order.total || 0),
                0
              )}
            </p>
          </div>
          <div className="stat-card">
            <h3>⭐ Rating</h3>
            <p>4.7</p>
          </div>
        </div>

        {/* 🧾 Dynamic Orders Section */}
        <div className="recent-orders">
          <h3>Recent Orders</h3>

          {orders.length === 0 ? (
            <p>No recent orders found.</p>
          ) : (
            orders.map((order, index) => (
              <div className="order-item" key={index}>
                <img
                  src={
                    order.items[0]?.image ||
                    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  }
                  alt="Order"
                />
                <div>
                  <h4>
                    {order.items[0]?.name || "Food Item"}{" "}
                    {order.items.length > 1 && `+${order.items.length - 1} more`}
                  </h4>
                  <p>Ordered on {order.date}</p>
                  <p>
                    <strong>₹{order.total}</strong>
                  </p>
                  <span
                    className={`status ${order.status?.toLowerCase() || "placed"}`}
                  >
                    {order.status || "Placed"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Addresses */}
        <div className="saved-addresses">
          <h3>Saved Addresses</h3>
          <ul>
            <li>
              🏠 <strong>Home:</strong> 301, Green Towers, Mumbai
            </li>
            <li>
              🏢 <strong>Office:</strong> Andheri West, Mumbai
            </li>
          </ul>
          <button className="add-btn">+ Add New Address</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
