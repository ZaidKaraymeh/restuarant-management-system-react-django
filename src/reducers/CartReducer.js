import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: 0,
    date: "",
    price: 0,
    table: 0,
    items: []
  },
  reducers: {

    setCartPrice: (state, action) => {
      state.price += parseFloat(action.payload);
    },
    setCartTable: (state, action) => {
      state.table = action.payload;
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    setCartDate: (state, action) => {
      state.date = action.payload;
    },
    setCartNew: (state, action)  => {
      state.items = action.payload.items
      state.table = action.payload.table
      state.price = action.payload.price
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCartPrice, setCartTable, setCartItems, setCartDate, setCartNew } = cartSlice.actions;


export const selectPrice = (state) => state.cart.price;
export const selectTable = (state) => state.cart.table;
export const selectItems = (state) => state.cart.items;
export const selectDate = (state) => state.cart.date;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
