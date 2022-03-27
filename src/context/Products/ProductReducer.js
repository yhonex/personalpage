/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_PRODUCT, GET_PRODUCTLIST } from "../Types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTLIST:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
  }
};
