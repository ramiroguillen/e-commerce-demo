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
    <section className="flex flex-wrap p-3 justify-center items-start gap-3 bg-slate-300">
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
    </section>
  );
};

export default Home;
