import { TextField, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

export const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    }
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const FabelioRootTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ffffff',
    },
    '& label': {
      color: '#ffffff',
      fontSize: 20
    },
    '& .MuiInput-underline': {
      borderBottomColor: '#ffffff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffffff',
    },
    '& .MuiInputBase-input': {
      fontSize: 20,
      color: '#ffffff'
    }
  }
})(TextField);

export const FabelioSelectField = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#ffffff',
    fontSize: 20,
    textAlign: 'left',
    padding: '10px',
    '&:focus': {
      borderRadius: 4,
      borderColor: 'ffffff'
    },
  },
}))(InputBase);

