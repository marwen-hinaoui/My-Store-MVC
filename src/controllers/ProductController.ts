import { useNavigate } from "react-router-dom";
import { ProductsApi } from "../api/ProductsApi";
import { useAppDispatch } from "../store";
import { set_error, set_loading, set_products } from "../store/slices";
import { useLoadingBar } from "react-top-loading-bar";

export const useProductController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { start, complete } = useLoadingBar({ color: "#c9a892", height: 3 });

  const fetchProducts = async () => {
    start();
    dispatch(set_loading(true));
    try {
      const products = await ProductsApi.getAllProducts(dispatch);
      if (products.length > 0) {
        dispatch(set_products(products));
      }
    } catch (error: any) {
      dispatch(set_error(error.message));
    } finally {
      dispatch(set_loading(false));
      complete();
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
