import React from "react";
import ProductCard from "../Card/Card";
import styled from "styled-components";
import data from "../data";

const ProductContainer = styled.div`
  height: auto;
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Product = () => {
  const ProductList = data.map((product) => {
    return <ProductCard {...product} key={product.id} />;
  });
  return (
    <>
      <ProductContainer>{ProductList}</ProductContainer>
    </>
  );
};

export default Product;
