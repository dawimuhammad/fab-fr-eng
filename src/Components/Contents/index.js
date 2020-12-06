import { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product';

const fetchProductUrl = 'http://www.mocky.io/v2/5c9105cb330000112b649af8';

class Contents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      furniture_styles: []
    };
  }

  componentDidMount() {
    fetch(fetchProductUrl)
      .then((response) => response.json())
      .then((data) => {
        const { products = [], furniture_styles = [] } = data;
        this.setState({ products, furniture_styles })
      });
  }

  render() {
    const { products } = this.state;

    return (
      <Grid container direction="row" justify="center" className="content-root">
        {
          (products.length) ? (
            products.map((product, index) => <Product key={index} product={product}/>)
          ) : (<></>)
        }
      </Grid>
    )
  }
}

export default Contents;