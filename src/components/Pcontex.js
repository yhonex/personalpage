import React, { Component } from "react";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import Productstate from "../context/Products/Productstate";

export default class Pcontex extends Component {
  render() {
    return (
      <div>
        <Productstate>
          <Product />
          <ProductList />
        </Productstate>
      </div>
    );
  }
}
