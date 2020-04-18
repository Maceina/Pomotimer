import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  products: [
    {
      id: 1,
      name: "Pyragas",
      ean: "159",
      type: "Sokoladinis",
      weight: "100",
      color: "Blue",
      active: "True",
    },
    {
        id: 2,
        name: "Tortas",
        ean: "100",
        type: "Zefyrinis",
        weight: "500",
        color: "Red",
        active: "False",
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

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        removeProduct,
        addProduct,
        editProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
