import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../features/search/searchSlice";
import { calculateTotalProducts } from "../features/cart/cartSlice";

const Navbar = () => {
  const { cart, totalProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(calculateTotalProducts());
  }, [cart, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(query));
  };

  return (
    <div className="p-3 flex gap-3 justify-between">
      <form className="flex justify-start w-1/2 gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-1 border w-full"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className="py-2 px-5 bg-slate-300">
          Search
        </button>
      </form>
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
