import React from 'react';
import { Grid } from '@material-ui/core'
import './index.css';

const Product = () => {
  return (
    <div className="product-root">
      <Grid item container direction="row">
        <Grid item container direction="row" justify="space-between">
          <p className="title">Product Name</p>
          <p className="price">Price</p>
        </Grid>
        
        <Grid item xs={12}>
          <p className="description">This is life from a disabled lens. Disability Visibility is a podcast hosted by San Francisco night owl Alice Wong featuring conversations on politics, culture, and media with disabled people. If you're interested in disability rights, social justice, and intersectionality, this show is for you. It's time to hear more disabled voices in radio.</p>
        </Grid>

        <Grid item>
          <p className="styles">Furniture Styles</p>
        </Grid>

        <Grid item container direction="row" justify="flex-end">
          <p className="delivery-days">Delivery Time</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product;