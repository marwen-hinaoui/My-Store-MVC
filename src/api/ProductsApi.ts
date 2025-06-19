import { Product } from "../models/Product";
import { ApiInstance } from "../config/api";
import { set_error } from "../store/slices";
import { Dispatch } from "@reduxjs/toolkit";

export const ProductsApi = {
  getAllProducts: async (dispatch: Dispatch): Promise<Product[]> => {
    try {
      const response = await ApiInstance.get<Product[]>("/products");
      return response.data;
    } catch (error: any) {
      dispatch(set_error(error.message));
      return error.message;
    }
  },
};
