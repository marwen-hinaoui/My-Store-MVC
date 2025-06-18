import { useNavigate } from "react-router-dom";
import { ProductsApi } from "../api/ProductsApi";
import { useAppDispatch } from "../store";
import { set_error, set_loading, set_products } from "../store/slices";

export const useProductController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    dispatch(set_loading(true));
    try {
      const products = await ProductsApi.getAllProducts();
      dispatch(set_products(products));
      
    } catch (error) {
      dispatch(set_error("Error fetching products"));
    } finally {
      dispatch(set_loading(false));
    }
  };

  //Navigation
  const navigateToProductDetails = (productId: string) => {
    navigate(`products/${productId}`);
  };

  return {
    navigateToProductDetails,
    fetchProducts,
  };
};
