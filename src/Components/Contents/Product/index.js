import React from 'react';
import { Grid } from '@material-ui/core'
import './index.css';

const Product = ({ product }) => {
  const { name, price, description, furniture_style, delivery_time } = product;

  return (
    <div className="product-root">
      <Grid item container direction="row">
        <Grid item container direction="row" justify="space-between">
          <p className="title">{ name }</p>
          <p className="price">{ price }</p>
        </Grid>
        
        <Grid item xs={12}>
          <p className="description">{ description }</p>
        </Grid>

        <Grid item>
          <p className="styles">Furniture Styles</p>
        </Grid>

        <Grid item container direction="row" justify="flex-end">
          <p className="delivery-days">Dikirim dalam { delivery_time } Hari</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product;