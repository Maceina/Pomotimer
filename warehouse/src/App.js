import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ProductList } from './components/ProductList';
import { PreviewProduct } from './components/PreviewProduct'
 

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={ProductList} exact />
        <Route path="/products/create" component={AddProduct} exact />
        <Route path="/products/:id/edit" component={EditProduct} exact />
        <Route path="/products/:id" component={PreviewProduct} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
