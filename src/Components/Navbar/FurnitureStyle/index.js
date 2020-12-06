import { Grid, Select, MenuItem } from '@material-ui/core'
import { FabelioSelectField, GreenCheckbox } from '../../Shared/textfields';
import './index.css';

const FurnitureStyle = () => {
  const furniture_styles = [1, 2, 3, 4, 5]

  const handleChange = (event) => {
    const name = event.target.value;
  };
   
  return (
    <Select
      fullWidth
      input={<FabelioSelectField />}
      className="fieldbox"
      onChange={handleChange}
    >
      {
        furniture_styles.map((style, index) => {
          console.log(style, index)

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