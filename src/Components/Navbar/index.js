import { Component } from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core';
import { FabelioRootTextField, FabelioSelectField } from '../Shared/textfields';
import FurnitureStyleSelection from './FurnitureStyle';
import DeliveryTimeSelection from './DeliveryTime';
import './index.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid 
        container 
        direction="row" 
        justify="center" 
        className="navbar-root"
      >
        <Grid 
          item
          container 
          xs={12}
          spacing={3}
          direction="row" 
          justify="space-between"
        >
          <Grid 
            item 
            xs={6}
          >
            <FabelioRootTextField 
              id="filled-search" 
              className="fieldbox" 
              label="Search Furniture" 
              type="search" 
              fullWidth
            />
          </Grid>

          <Grid 
            item 
            container 
            spacing={3}
          >
            <Grid 
              item 
              xs={6}
            >
               <FurnitureStyleSelection />
            </Grid>

            <Grid 
              item 
              xs={6}
            >
               <DeliveryTimeSelection />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Navbar;