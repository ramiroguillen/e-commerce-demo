import { Routes, Route } from "react-router-dom";

import Layout from "./views/Layout";
import Home from "./views/Home";
import ProductForm from "./views/ProductForm";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import ProductDetails from "./views/ProductDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/update-product/:id" element={<ProductForm />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
