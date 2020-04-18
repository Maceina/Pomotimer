import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const JustProductList = () => {
    const { products, removeProduct, editProduct, previewProduct } = useContext(GlobalContext);
    return (
        <Fragment>
            <div className="flex-grow text-center px-4 py-2 m-2">
                    <h4 className="text-gray-900 font-bold text-xl">List of all products</h4>
                </div>
            {products.length > 0 ? <Fragment>
                {products.map(product => (
                    <div className="flex items-center bg-gray-100 mb-10 shadow" key={product.id}>
                        <div className="flex-auto text-center px-4 py-2 m-2">
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">NAME:</span> {product.name}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">EAN:</span> {product.ean}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">TYPE:</span> {product.type}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">WEIGHT:</span> {product.weight}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">COLOR:</span> {product.color}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">ACTIVE:</span> {product.active}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">QUANTITY:</span> {product.quantity}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">PRICE:</span> {product.price}</p>
                        </div>
                    </div>
                ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>}
            <div className="flex-grow text-center px-4 py-2 m-2">
            <div className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <Link to="/">Go back to the main page</Link>
            </div>
          </div>
        </Fragment>
    )
}