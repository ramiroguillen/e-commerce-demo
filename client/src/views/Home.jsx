import React, { useMemo } from "react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  const { search } = useSelector((state) => state.search);

  const filteredProducts = useMemo(() => {
    products?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <section className="flex flex-wrap p-3 justify-center items-start gap-3 bg-slate-300 min-h-screen">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>{error}</h1>
      ) : filteredProducts?.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
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
