import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const decreaseHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const increaseHandler = (id) => {
    dispatch(increaseQuantity(id));
  };

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div id={product.id} className="w-full h-32 bg-white flex">
      <img src={product.image} alt={product.title} />
      <div className="flex flex-col p-3 justify-center w-1/3">
        <h3>{product.title}</h3>
        <h5>Price: ${product.price}</h5>
      </div>

      <div className="flex items-center justify-center mr-3 w-1/3">
        <label className="mr-3">Quantity:</label>
        <button
          className="bg-slate-300 px-5 py-2"
          onClick={() => decreaseHandler(product.id)}
        >
          -
        </button>
        <input
          className="p-1 w-12 text-center"
          min="1"
          max={product.stock}
          value={product.quantity}
          readOnly
        />
        <button
          className="bg-slate-300 px-5 py-2"
          onClick={() => increaseHandler(product.id)}
        >
          +
        </button>
      </div>

      <div className="flex items-center justify-center w-1/3">
        <button
          className="bg-slate-300 px-5 py-2"
          onClick={() => removeProductFromCart(product.id)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
