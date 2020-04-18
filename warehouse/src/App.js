import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ProductList } from './components/ProductList';
 

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={ProductList} exact />
        <Route path="/add" component={AddProduct} exact />
        <Route path="/edit/:id" component={EditProduct} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
