import React, { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";
import Global from "../../Global";

const Productstate = (props) => {
  const initialState = {
    products: [],
    selectedProduct: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getAllProduct = async () => {
    const res = await axios.get(Global.url + "/products");
    console.log(res.data);
  };

  const getProduct = async (_id) => {
    const res = await axios.get(Global.url + "/products" + _id);
    console.log(res);
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        selectedProduct: state.selectedProduct,
        getAllProduct,
        getProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default Productstate;
