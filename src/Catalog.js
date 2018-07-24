import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render () {
    return (
      <ul>
        {
          this.props.products.map((product) =>
            <li>
              <ProductCard key={product.id} product={product} />
            </li>
          )
        }
      </ul>
    );
  }
}

export default Catalog;
