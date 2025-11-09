import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart, idSuffix = "" }) => {
  const btnId = `add-btn-${product._id}-${idSuffix}`;

  const handleAdd = () => {
    console.log(typeof(addToCart)+"is type")
    if (typeof addToCart === "function") {
      addToCart(product);
    } else {
      console.error("addToCart is not a function!");
    }

    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.classList.add("added");
    setTimeout(() => btn.classList.remove("added"), 260);
    console.log("button clicked")
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <h4>{product.name}</h4>
        <p className="muted">{product.description}</p>
        <div className="product-foot">
          <strong>₹{product.price}</strong>
          <button id={btnId} className="btn add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
