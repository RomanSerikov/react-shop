import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/hello';
import Arithmetic from './src/arithmetic';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

console.log(new Arithmetic().sum(40, 2));
console.log(new Arithmetic().diff(40, 2));
console.log(new Arithmetic().product(40, 2));
console.log(new Arithmetic().quotient(40, 2));
