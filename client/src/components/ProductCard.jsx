import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, description, category, price, stock, image } = product;
  return (
    <div id={id} className="w-96 h-96 bg-white flex">
      <img src={image} alt={title} />
      <div className="flex flex-col p-3 justify-between">
        <h3>{title}</h3>
        <div>
          <h4 className="mb-3">{category}</h4>
          <p className="text-sm mb-3">{description}</p>
          <h5>Price: ${price}</h5>
          <h5>Available: {stock > 0 ? "Yes" : "No"}</h5>
        </div>
        <div className="flex justify-between gap-1">
          <Link to={`/${id}`} className="text-sm bg-slate-300">
            View Product
          </Link>
          <button className="text-sm bg-slate-300">Add to Wishlist</button>
          <button
            className="text-sm bg-slate-300 disabled:text-slate-200"
            disabled={stock === 0 ? true : false}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
