import React, { Component } from 'react';
import Catalog from './Catalog';
import { Products } from './constants/products';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = { products: [] }
  }
  
  componentDidMount() {
    this.setState({ products: Products });
  }
  
  render() {
    return <Catalog products={this.state.products} />;
  }
}

export default CatalogPage;
