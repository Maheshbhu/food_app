import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onCartClick, cartCount, user, setUser }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // 🍔 State for hamburger toggle

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/auth");
    console.log("Logout successfully..");
    setMenuOpen(false); // Close menu on logout (mobile)
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu when navigating
  };

  return (
    <nav className="navbar">
      {/* 🍴 Logo */}
      <h2 className="logo" onClick={() => handleNavClick("/")}>
        FoodieHub 🍴
      </h2>

      {/* 🍔 Hamburger Icon (visible only on mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 🔗 Navigation Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/restaurants" onClick={() => setMenuOpen(false)}>
          Restaurants
        </Link>
        <Link to="/orders" onClick={() => setMenuOpen(false)}>
          Orders
        </Link>

        {user ? (
          <>
            <span
              className="profile-name"
              onClick={() => handleNavClick("/profile")}
              title="View Profile"
            >
              👤 {user.name}
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" onClick={() => setMenuOpen(false)}>
            Login / Register
          </Link>
        )}

        {/* 🛒 Cart */}
        <button className="cart-btn" onClick={() => {
          onCartClick();
          setMenuOpen(false);
        }}>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Header;
