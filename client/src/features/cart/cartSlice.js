import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalAmount: 0,
  totalProducts: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productCartIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productCartIndex >= 0) {
        state.cart[productCartIndex].quantity += action.payload.quantity;
        state.totalAmount += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
        state.totalAmount += action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.totalAmount = 0;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {},
    increaseQuantity: (state, action) => {},
    decreaseQuantity: (state, action) => {},
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
