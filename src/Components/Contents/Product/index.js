import React from 'react';
import { Grid } from '@material-ui/core'
import './index.css';
import Styles from './styles';
import { formatNumberToRupiahCurrency } from '../../../Lib'

const Product = ({ product }) => {
  const { name, price, description, furniture_style, delivery_time } = product;
  const priceInRupiah = price && formatNumberToRupiahCurrency(price)

  return (
    <Grid item xs={12} sm={6}>
      <Grid container className="product-root">

      <Grid item container direction="row" justify="space-between">
        <p className="title">{ name }</p>
        <p className="price">{ priceInRupiah }</p>
      </Grid>
      
      <Grid item xs={12}>
        <p className="description">{ description }</p>
      </Grid>

      <Grid item container direction="row" justify="flex-start">
        <Styles furniture_style={furniture_style} />
      </Grid>

      <Grid item container direction="row" justify="flex-end">
        <p className="delivery-days">{ delivery_time } Hari Pengiriman</p>
      </Grid>
      </Grid>
    </Grid>
  )
};

export default Product;