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
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const productCartIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (
        state.cart[productCartIndex].stock >=
        state.cart[productCartIndex].quantity + 1
      ) {
        state.cart[productCartIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productCartIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (state.cart[productCartIndex].quantity === 1) {
        const updatedCart = state.cart.filter(
          (product) => product.id !== action.payload
        );
        state.cart = updatedCart;
      } else {
        state.cart[productCartIndex].quantity -= 1;
      }
    },
    calculateTotalAmount: (state, action) => {
      const subtotal = state.cart.reduce(
        (accumulator, product) =>
          accumulator + Number(product.price) * Number(product.quantity),
        0
      );
      state.totalAmount = subtotal;
    },
    calculateTotalProducts: (state, action) => {
      const total = state.cart.reduce(
        (accumulator, product) => accumulator + Number(product.quantity),
        0
      );
      state.totalProducts = total;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalAmount,
  calculateTotalProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
