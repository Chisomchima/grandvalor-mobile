import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload)
      state.total += action.payload?.price * state.quantity
    },
    
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
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
    }
  },
});

export const { addProduct, removeProduct, increaseProduct, decreaseProduct, calculateTotals, reset } = cartSlice.actions;
export default cartSlice.reducer;