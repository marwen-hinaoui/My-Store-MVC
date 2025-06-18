import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

export interface AppState {
  isLoading: boolean;
  products: Product[];
  error: string;
}

const initialState: AppState = {
  isLoading: false,
  products: [],
  error: "",
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
    },
  },
});

export const { set_loading, set_products, set_error } = AppSlices.actions;
export default AppSlices.reducer;
