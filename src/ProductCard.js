import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const { src, width, height, alt, title, price } = this.props;
    return (
      <div>
        <Image src={ src } width={ width } height={ height } alt={ alt } />
        <TextBox>{ title }</TextBox>
        <Price>{ price }</Price>
      </div>
    );
  }
}

export default ProductCard;
