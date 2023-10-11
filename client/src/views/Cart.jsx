import React, { useEffect } from "react";
import CartProductCard from "../components/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalAmount,
  calculateTotalProducts,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalAmount, totalProducts } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const clearCartHandler = (cart) => {
    dispatch(clearCart(cart));
  };

  useEffect(() => {
    dispatch(calculateTotalAmount());
    dispatch(calculateTotalProducts());
  }, [cart]);

  return (
    <section className="flex items-start ">
      <div className="flex flex-col justify-center items-start gap-3 bg-slate-300 w-3/4 px-8 py-10">
        <h1 className="text-2xl">Shopping Cart</h1>
        {cart &&
          cart.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        <div className="flex gap-3">
          <Link to={"/"} className="bg-white px-5 py-2">
            Continue Shopping
          </Link>
          <button
            onClick={() => clearCartHandler(cart)}
            className="bg-white px-5 py-2"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="text-2xl mb-3">Order Summary</h1>
        <div className="flex justify-between">
          <span>Total Products:</span>
          <span>{totalProducts}</span>
        </div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
        <button className="bg-slate-300 mt-6 py-2 px-5 w-full">Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
