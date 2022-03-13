import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CartReducer from '../reducers/CartReducer.js'
import RecieptReducer from '../reducers/RecieptReducer';
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    reciepts: RecieptReducer,
  },
});
