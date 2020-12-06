import { Grid, Select, MenuItem } from '@material-ui/core'
import { FabelioSelectField, GreenCheckbox } from '../../Shared/textfields';
import './index.css';

const FurnitureStyle = () => {
  const furniture_styles = [1, 2, 3, 4, 5]
   
  return (
    <Select
      fullWidth
      input={<FabelioSelectField />}
      className="fieldbox"
    >
      {
        furniture_styles.map((style, index) => {
          return (
            <MenuItem>
              <Grid 
                container 
                key={index} 
                direction="row"
                justify="space-between"
                className="select-item"
              >
                <p>Contemporary {style}</p>
                <GreenCheckbox checked={true} />
              </Grid>
            </MenuItem>
          )
        })
      }
    </Select>
  )

};

export default FurnitureStyle