import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from '../store/reducers/CartSlice';
import productsReducer, { ProductsState } from '../store/reducers/ProductsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = {
  cart: CartState;
  products: ProductsState;
};

export type AppDispatch = typeof store.dispatch;
