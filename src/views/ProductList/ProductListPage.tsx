import React, { useCallback, useEffect } from "react";

import { useAppSelector } from "../../store";
import { useProductController } from "../../controllers/ProductController";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Col, Flex, Row } from "antd";
import Spinner from "../../components/Spinner/Spinner";

export default function ProductListPage() {
  const { fetchProducts } = useProductController();
  const products = useAppSelector((state) => state.app.products);
  const loading = useAppSelector((state) => state.app.isLoading);
  console.log("products", products);

  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <Row  style={{maxWidth: 700, margin:'auto'}}  gutter={[16, 16]}>
      {products.map((item, index) => {
        return (
          <Col  xs={24} sm={12} md={12} lg={12}>
            <ProductCard
              id={index}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          </Col>
        );
      })}
    </Row>
  );
}
