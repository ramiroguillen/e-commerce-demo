import React, { useEffect, useState } from "react";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../features/products/productsApi";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { data: products } = useGetAllProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "SMARTPHONE",
    price: 0,
    stock: 0,
    image: "",
  });

  useEffect(() => {
    if (params.id) {
      if (products) {
        const product = products.find(
          (product) => product.id === Number(params.id)
        );
        setProduct(product);
      }
    }
  }, [params.id, products]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateProduct(product);
    } else {
      createProduct(product);
    }
    navigate("/");
  };

  return (
    <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
      <h1>{params.id ? "Update" : "Create"} Product</h1>

      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleChange}
        required
      />

      <label>Description:</label>
      <textarea
        value={product.description}
        onChange={handleChange}
        name="description"
        required
      />

      <label>Category:</label>
      <select
        value={product.category}
        onChange={handleChange}
        required
        name="category"
      >
        <option value="SMARTPHONE">Smartphone</option>
        <option value="TABLET">Tablet</option>
        <option value="NOTEBOOK">Notebook</option>
      </select>

      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        required
      />

      <label>Stock:</label>
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
        required
      />

      <label>Thumbnail:</label>
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        required
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default ProductForm;
