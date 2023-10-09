import { Routes, Route } from "react-router-dom";

import Layout from "./views/Layout";
import Home from "./views/Home";
import ProductForm from "./views/ProductForm";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import Wishlist from "./views/Wishlist";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;