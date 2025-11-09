import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        <div>© 2025 Foodie. All rights reserved.</div>
        <div style={{display:'flex',gap:12}}>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
