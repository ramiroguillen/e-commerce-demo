import React, { useState } from "react";

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const decreaseHandler = () => {};
  const increaseHandler = () => {};
  
  return (
    <div id={product.id} className="w-1/2 h-48 bg-white flex">
      <img src={product.image} alt={product.title} />
      <div className="flex flex-col p-3 justify-between w-1/3">
        <h3>{product.title}</h3>
        <h5>Price: ${product.price}</h5>
        <h5>Available: {product.stock} units</h5>
      </div>

      <div className="flex items-center justify-center mr-3 w-1/3">
        <label className="mr-3">Quantity:</label>
        <button
          className="text-sm bg-slate-300 disabled:text-slate-200 p-1 h-8 w-8"
          onClick={decreaseHandler}
        >
          -
        </button>
        <input
          className="p-1 w-12 text-center"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="text-sm bg-slate-300 disabled:text-slate-200 p-1 h-8 w-8"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>

      <div className="flex items-center w-1/3 p-3">
        <button className="text-sm bg-slate-300 disabled:text-slate-200 p-2">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
