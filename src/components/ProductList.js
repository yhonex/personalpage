import React, { useEffect } from "react";
import { useContext } from "react";
import ProductContext from "../context/Products/ProductContext";

const ProductList = () => {
  const { getAllProduct } = useContext(ProductContext);
  const { getProduct } = useContext(ProductContext);

  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);

  return <div> list</div>;
};

export default ProductList;
