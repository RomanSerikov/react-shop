import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render () {
    const products = this.props.products;
    const redundant = products.map((product) =>
      <li><ProductCard
        key={ `${product.id}` }
        src={ product.imageUrl }
        width='300'
        height='200'
        alt={ product.title }
        title={ product.title }
        price={ product.price }
      /></li>
    );
    return (
      <ul>
        {redundant}
      </ul>
    );
  }
}

export default Catalog;
