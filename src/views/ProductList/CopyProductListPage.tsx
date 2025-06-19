import React, { useEffect, useState } from "react";
import "./ProductListPage.module.css";
import { useAppSelector } from "../../store";
import { useProductController } from "../../controllers/ProductController";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Col, Row } from "antd";
import Spinner from "../../components/Spinner/Spinner";

export default function ProductListPageCopy() {
  const { fetchProducts } = useProductController();
  const products = useAppSelector((state) => state.app.products);
  const loading = useAppSelector((state) => state.app.isLoading);
  const productsLength = useAppSelector((state) => state.app.productsLength);

  const [visibility, setVisibility] = useState(
    new Array(productsLength).fill(false)
  );

  useEffect(() => {
    fetchProducts();
    let timer: any;

    for (let index = 0; index < productsLength; index++) {
      timer = setTimeout(() => {
        setVisibility((prevVisibilities) => {
          const newVisibilities = [...prevVisibilities];
          newVisibilities[index] = true;
          return newVisibilities;
        });
      }, index * 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [productsLength]);

  return (
    <Row style={{ maxWidth: '65%', margin: "auto" }} gutter={[16, 16]}>
      {products.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={12} lg={8}>
          <ProductCard
            id={index}
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
            category={item.category}
            visibility={visibility[index]}
          />
          </Col>
        );
      })}
    </Row>
  );
}
