import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productsApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
