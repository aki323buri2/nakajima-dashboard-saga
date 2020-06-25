import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper, 
  }, 
}));

const DashboardFooter = ({
  children, 
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className); 

  return (
    <Toolbar className={classes.root} {...other}>
      {children}
    </Toolbar>
  )
}

export default DashboardFooter
