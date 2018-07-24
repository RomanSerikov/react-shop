import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from './src/CatalogPage';

class App extends Component {
  render () {
    return (
      <div>
        <CatalogPage />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
