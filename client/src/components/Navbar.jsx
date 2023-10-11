import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { totalProducts } = useSelector((state) => state.cart);
  return (
    <div className="p-3 flex gap-3 justify-between">
      <div></div>
      <div className="flex justify-end w-1/2 gap-3">
        <Link to="/" className="py-2 px-5 bg-slate-300">
          Home
        </Link>
        <Link to="/cart" className="py-2 px-5 bg-slate-300">
          Cart
          {totalProducts > 0 ? ` (${totalProducts})` : ""}
        </Link>
        <Link to="/create-product" className="py-2 px-5 bg-slate-300">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
