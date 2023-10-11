import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isError,
    error,
    isLoading,
  } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, quantity: Number(quantity) }));
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>{error}</h1>
      ) : (
        product && (
          <section className="flex h-screen p-3 justify-center items-start gap-3 bg-slate-300">
            <div id={product.id} className="w-1/2 h-96 bg-white flex">
              <img src={product.image} alt={product.title} />
              <div className="flex flex-col p-3 justify-between">
                <h3>{product.title}</h3>
                <div>
                  <h4 className="mb-3">{product.category}</h4>
                  <p className="text-sm mb-3">{product.description}</p>
                  <h5>Price: ${product.price}</h5>
                  <h5>Available: {product.stock} units</h5>
                  <label>Quantity:</label>
                  <input
                    className="p-1 border rounded-sm"
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="flex justify-between gap-1">
                  <button className="text-sm bg-slate-300 p-1">
                    Add to Wishlist
                  </button>
                  <button
                    className="text-sm bg-slate-300 disabled:text-slate-200 p-1"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default ProductDetails;
