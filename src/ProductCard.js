import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const { imageUrl, title, price } = this.props.product;
    return (
      <div>
        <Image src={imageUrl} width='300' height='200' alt={title} />
        <TextBox>{title}</TextBox>
        <Price>{price}</Price>
      </div>
    );
  }
}

export default ProductCard;
