import React from "react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  return (
    <div className="w-screen h-screen p-3 bg-slate-300 flex gap-3 justify-center flex-wrap">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>{error}</h1>
      ) : (
        products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Home;
