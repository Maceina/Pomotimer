import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const PreviewProduct = (route) => {
  let history = useHistory();
  const { products, editProduct } = useContext(GlobalContext);
  const [selectedProduct, setSeletedProduct] = useState({
    id: null,
    name: "",
    ean: "",
    type: "",
    weight: "",
    color: "",
    active: "",
  });
  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (emp) => emp.id === parseInt(productId)
    );
    setSeletedProduct(selectedProduct);
  }, []);

  if (!selectedProduct || !selectedProduct.id) {
    return <div>.....</div>;
  }

  return (
    <Fragment>
      <div className="flex items-center bg-gray-100 mb-10 shadow">
        <div className="w-full max-w-sm container mt-20 mx-auto">
          <div className="flex-grow text-center px-4 py-2 m-2">
            <h5 className="text-gray-900 font-bold text-xl">Product preview</h5>
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of the product: {selectedProduct.name}
            </label>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ean"
            >
              EAN: {selectedProduct.ean}
            </label>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="type"
            >
              Type: {selectedProduct.type}
            </label>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="weight"
            >
              WEIGHT IN GRAMS: {selectedProduct.weight}
            </label>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="color"
            >
              COLOR: {selectedProduct.color}
            </label>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="active"
            >
              ACTIVE: {selectedProduct.active}
            </label>
          </div>
          <div className="flex-grow text-center px-4 py-2 m-2">
            <div className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <Link to="/">Go to the main page</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
