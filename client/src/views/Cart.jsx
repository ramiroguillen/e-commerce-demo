import React, { useEffect } from "react";
import CartProductCard from "../components/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clearCartHandler = (cart) => {
    dispatch(clearCart(cart));
  };
  return (
    <section className="flex flex-col p-3 justify-center items-start gap-3 bg-slate-300">
      {cart &&
        cart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      <button onClick={() => clearCartHandler(cart)}>Clear Cart</button>
    </section>
  );
};

export default Cart;
