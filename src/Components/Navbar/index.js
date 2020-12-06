import { Component } from 'react';
import { Grid, MenuItem, Select } from '@material-ui/core';
import { FabelioRootTextField, FabelioSelectField } from '../Shared/textfields';
import FurnitureStyle from './FurnitureStyle';
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
          direction="row" 
          justify="space-between"
        >
          <Grid 
            xs={6}
            item 
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
            container>
            <Grid 
              item 
              xs={6}
            >
               <FurnitureStyle />
            </Grid>

            <Grid 
              item 
              xs={6}
            >
               <Select
                  fullWidth
                  input={<FabelioSelectField />}
                  className="fieldbox fdeliverytime"
                  placeholder="Delivery Time"
                >
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Navbar;