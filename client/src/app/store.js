import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import { productsApi } from "../features/products/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
