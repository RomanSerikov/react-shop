import React, { Component } from 'react';
import Catalog from './Catalog';
import { products } from './constants/products';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = { products: products }
  }
  
  render() {
    return <Catalog products={this.state.products} />;
  }
}

export default CatalogPage;
