import React, { useState } from 'react';
import "./Categories.css";

const Categories = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState("Burgers");

  const cats = [
    "Burgers",
    "Pizza",
    "Pasta",
    "Desserts",
    "Chinese",
    "Indian",
    "Biryani",
    "South Indian",
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // highlight selected category
    onCategorySelect(category); // send category to parent
  };

  return (
    <div>
      <section className="categories container">
        <h3>Explore by category</h3>
        <div className="cat-scroll">
          {cats.map((c, idx) => (
            <button
              key={idx}
              className={`cat-chip ${activeCategory === c ? "active" : ""}`}
              onClick={() => handleCategoryClick(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
