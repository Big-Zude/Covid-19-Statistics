//importing starts here
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//importing stops here

//stylying starts
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f1f1f1',
  },
  title: {
    flexGrow: 1,
  },
}));
//styling ends

//function
export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Worldwide Covid-19 Statistics
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
