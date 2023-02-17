import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    product: {},
    productQuantity: 0,
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      // state.products.push(action.payload)
      state.total += action.payload?.price * action.payload?.quantity;
    },

    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item._id !== itemId);
    },
    increaseProduct: (state, { payload }) => {
      state.products.push(payload);
      const findProd = state.products?.find(
        (item) => item?._id == payload._id
      );
      const singleProd = findProd[0];
      state.productQuantity += 1;
      state.product = { ...singleProd, quantity: state.productQuantity };
      state.total += state.product?.price * state.product?.quantity;
    },
    decreaseProduct: (state) => {
      if (state.product.quantity <= 0) return;
      state.product.quantity -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = amount;
      state.total = total;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  calculateTotals,
  reset,
} = cartSlice.actions;
export default cartSlice.reducer;
