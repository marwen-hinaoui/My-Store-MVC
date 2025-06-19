import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

export interface AppState {
  isLoading: boolean;
  products: Product[];
  productsLength: number;
  error: string | null;
}

const initialState: AppState = {
  isLoading: false,
  products: [],
  error: null,
  productsLength: 0,
};

export const AppSlices = createSlice({
  name: "app",
  initialState,
  reducers: {
    set_loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    set_error: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    set_products: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.productsLength = action.payload.length;
    },
  },
});

export const { set_loading, set_products, set_error } = AppSlices.actions;
export default AppSlices.reducer;
