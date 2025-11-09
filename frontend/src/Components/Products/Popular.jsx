import React from "react";
import ProductCard from "./ProductCard";
import "./Popular.css";

const Popular = ({ products, addToCart }) => {
  return (
    <section className="popular">
      <h3>Popular Near You</h3>
      <div className="popular-scroll">
        {products.map((p, i) => (
          <ProductCard
            key={p._id + "-" + i}
            product={p}
            addToCart={addToCart}
            idSuffix={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
