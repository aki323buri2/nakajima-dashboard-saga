import React from 'react';
import { makeStyles, Drawer, Toolbar, Divider } from '@material-ui/core';
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const DashboardDrawer = ({
  children, 
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className); 

  return (
    <Drawer className={classes.root}
      classes={{
        paper: classes.root, 
      }}
      open 
      variant="persistent"
      {...other}
    >
      <Toolbar />
      <Divider />
      {children}
    </Drawer>
  )
}

export default DashboardDrawer
