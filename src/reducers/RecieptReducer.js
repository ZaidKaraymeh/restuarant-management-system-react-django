import { createSlice } from "@reduxjs/toolkit";

export const recipetSlice = createSlice({
  name: "reciepts",
  initialState: {
    items: [],
  },
  reducers: {
    setRecieptItems: (state, action) => {
      state.items = [...state.items, action.payload]
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRecieptItems } = recipetSlice.actions;

export const selectReciepts = (state) => state.reciepts.items;

export default recipetSlice.reducer;
