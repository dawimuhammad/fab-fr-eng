import { Component } from 'react';
import { Grid } from '@material-ui/core'
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
      <Grid container direction="row" justify="center" className="content-root">
        {
          products.map(() => <Product />)
        }
      </Grid>
    )
  }
}

export default Contents;