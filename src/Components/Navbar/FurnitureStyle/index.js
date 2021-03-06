import React from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core'
import { FabelioSelectField, GreenCheckbox } from '../../Shared/textfields';
import './index.css';

const furnitures = [
  "Contemporary",
  "Mid Century",
  "Modern",
  "Scandinavian",
  "Classic"
];

const FurnitureStyleSelection = () => {
  const [furnitureStyles, setFurnitureStyles] = React.useState([]);
  
  const handleChange = (event) => {
    setFurnitureStyles(event.target.value);
  };

  return (
    <Select
      fullWidth
      multiple
      input={<FabelioSelectField />}
      value={furnitureStyles}
      onChange={handleChange}
      renderValue={(selected) => selected.join(", ")}
      className="fieldbox"
    >
      {
        furnitures.map((style) => {
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
                <GreenCheckbox checked={furnitureStyles.indexOf(style) > -1 } />
              </Grid>
            </MenuItem>
          )
        })
      }
    </Select>
  )
};

export default FurnitureStyleSelection;