import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  products: [
    {
      id: 1,
      name: "Shoes",
      ean: "135665",
      type: "Running",
      weight: "450",
      color: "Blue",
      active: "True",
      quantity: "5",
      price: "600"
    },
    {
        id: 2,
        name: "Cake",
        ean: "0056652",
        type: "Chocolate",
        weight: "2500",
        color: "Brown",
        active: "False",
        quantity: "6",
        price: "15"
      },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeProduct(id) {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  }

  function addProduct(products) {
    dispatch({
      type: "ADD_PRODUCTS",
      payload: products,
    });
  }

  function editProduct(products) {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: products,
    });
  }
  function previewProduct(products) {
    dispatch({
      type: "PREVIEW_PRODUCT",
      payload: products,
    });
}

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        removeProduct,
        addProduct,
        editProduct,
        previewProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
