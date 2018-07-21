import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Arithmetic from './src/arithmetic';
import Image from './src/Image';
import TextBox from './src/TextBox';
import ProductCard from './src/ProductCard';
import CatalogPage from './src/CatalogPage';

class App extends Component {
  render () {
    return (
      <div>
        <Image src='https://placeimg.com/300/200/tech' width='300' height='200' alt='I am placeholder' />
        <TextBox>I am inside TextBox</TextBox>
        <ProductCard
          src='https://placeimg.com/300/200/tech'
          width='300'
          height='200'
          alt='I am placeholder'
          title='First product'
          price='400'
        />
        <ProductCard
          src='https://placeimg.com/300/200/tech'
          width='300'
          height='200'
          alt='I am placeholder'
          title='Second product'
          price='500'
        />
        <ProductCard
          src='https://placeimg.com/300/200/tech'
          width='300'
          height='200'
          alt='I am placeholder'
          title='Third product'
          price='600'
        />
        <CatalogPage />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(new Arithmetic().sum(40, 2));
console.log(new Arithmetic().diff(40, 2));
console.log(new Arithmetic().product(40, 2));
console.log(new Arithmetic().quotient(40, 2));
