import React from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core'
import { FabelioSelectField, GreenCheckbox } from '../../Shared/textfields';
import './index.css';

const deliveryTime = [
  "1 Week",
  "2 Weeks",
  "3 Weeks",
  "1 Months",
  "More than 1 Months"
];

const DeliveryTimeSelection = () => {
  const [deliveryTimes, setDeliveryTimes] = React.useState([]);
  
  const handleChange = (event) => {
    setDeliveryTimes(event.target.value);
  };

  return (
    <Select
      fullWidth
      multiple
      input={<FabelioSelectField />}
      value={deliveryTimes}
      onChange={handleChange}
      renderValue={(selected) => selected.join(", ")}
      className="fieldbox"
    >
      {
        deliveryTime.map((style) => {
          return (
            <MenuItem key={style} value={style}>
              <Grid 
                container 
                key={style} 
                direction="row"
                justify="space-between"
                className="select-item"
              >
                <p>{style}</p>
                <GreenCheckbox checked={deliveryTimes.indexOf(style) > -1 } />
              </Grid>
            </MenuItem>
          )
        })
      }
    </Select>
  )

};

export default DeliveryTimeSelection;