import { Component } from 'react';
import Product from './Product';

class Contents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div class="contents-root">
      {
        products.map(() => <Product /> )
      }
      </div>
    )
  }
}

export default Contents;