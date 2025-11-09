import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const carouselItems = [
  { type: "image", src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80" },
  { type: "offer", text: "🔥 50% OFF on your first order!", bgColor: "#fc8019" },
  { type: "image", src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1350&q=80" },
];

const HeroSection = ({ searchQuery, setSearchQuery, location, setLocation }) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ✅ for navigation

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % carouselItems.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setLocation(
            `Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`
          ),
        () => alert("Unable to fetch location")
      );
    } else alert("Geolocation not supported");
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % carouselItems.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length),
    trackMouse: true,
  });

  const handleExploreClick = () => {
    navigate("/restaurants"); // ✅ Navigate to restaurant page
  };

  return (
    <div className="hero-carousel" {...handlers}>
      <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {carouselItems.map((item, idx) => (
          <div
            key={idx}
            className="slide"
            style={{
              backgroundImage: item.type === "image" ? `url(${item.src})` : "none",
              backgroundColor: item.type === "offer" ? item.bgColor : "transparent",
            }}
          >
            {item.type === "offer" && <h2 className="offer-text">{item.text}</h2>}
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1>Order Your Favorite Food Online</h1>
        <p>Delicious meals delivered to your doorstep</p>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={detectLocation}>Use Current Location</button>
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleExploreClick}>Explore Restaurants</button> {/* ✅ Added click handler */}
      </div>

      <div className="carousel-indicators">
        {carouselItems.map((_, idx) => (
          <span
            key={idx}
            className={current === idx ? "active" : ""}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
