import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    const { products, removeProduct, editProduct, previewProduct } = useContext(GlobalContext);
    return (
        <Fragment>
            {products.length > 0 ? <Fragment>
                {products.map(product => (
                    <div className="flex items-center bg-gray-100 mb-10 shadow" key={product.id}>
                        <div className="flex-auto text-left px-4 py-2 m-2">
                        <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">NAME:</span> {product.name}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">EAN:</span> {product.ean}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">TYPE:</span> {product.type}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">WEIGHT:</span> {product.weight}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">COLOR:</span> {product.color}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">ACTIVE:</span> {product.active}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">QUANTITY:</span> {product.quantity}</p>
                            <p className="text-gray-900 leading-none"><span className="inline-block text-base font-semibold mt-1">PRICE:</span> {product.price}</p>

                        </div>
                        <div className="flex-auto text-right px-4 py-2 m-2">
                            <Link to={`/products/${product.id}/edit`}>
                                <button onClick={() => editProduct(product.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </button>
                            </Link>
                            <button onClick={() => removeProduct(product.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                            
                            <Link to={`/products/${product.id}`}>
                                <button onClick={() => previewProduct(product.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="4"></circle></svg>
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>}
        </Fragment>
    )
}