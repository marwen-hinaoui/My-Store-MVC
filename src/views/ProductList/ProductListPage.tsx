import React, { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useProductController } from "../../controllers/ProductController";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Col, Result, Row } from "antd";
import Spinner from "../../components/Spinner/Spinner";
import { Fade, Slide } from "react-awesome-reveal";
import { useLoadingBar } from "react-top-loading-bar";

export default function ProductListPage() {
  const { fetchProducts } = useProductController();
  const products = useAppSelector((state) => state.app.products);
  const loading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Row style={{ maxWidth: "100%", margin: "auto" }} gutter={[16, 16]}>
      {products.length > 0 &&
        products.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={12} lg={8}>
              <Fade cascade triggerOnce>
                <ProductCard
                  id={index}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                />
              </Fade>
            </Col>
          );
        })}
    </Row>
  );
}
