import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render () {
    const products = this.props.products;
    console.log(products)
    const listItems = products.map((product) =>
      <ProductCard
        key={ product.id.toString() }
        src={ product.imageUrl }
        width='300'
        height='200'
        alt='I am placeholder'
        title={ product.title }
        price={ product.price }
      />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default Catalog;
