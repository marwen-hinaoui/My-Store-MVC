import { Product } from "../models/Product";
import { ApiInstance } from "../config/api";

export const ProductsApi = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const response = await ApiInstance.get<Product[]>("/products");
      return response.data;
    } catch (error: any) {
        return error
    }
  },
};
