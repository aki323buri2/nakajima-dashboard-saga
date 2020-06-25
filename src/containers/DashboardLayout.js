import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'; 
import DashboardHeader from '../components/DashboardHeader';
import DashboardDrawer from '../components/DashboardDrawer';
import DashboardFooter from '../components/DashboardFooter';

const DRAWER_WIDTH = 200; 
const FOOTER_WIDTH = 500; 

const useStyles = makeStyles(theme => {
  const drawerWidth = open => open ? DRAWER_WIDTH : theme.spacing(7); 
  const headerWidth = open => `calc(100vw - ${drawerWidth(open) + theme.spacing(2)}px)`;
  const headerHeight = theme.mixins.toolbar.minHeight; 
  const mainHeight = `calc(100vh - ${headerHeight}px)`;
  const footerWidth = FOOTER_WIDTH; 
  const transition = theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp, 
    duration: theme.transitions.duration.enteringScreen, 
  });

  return {
    root: {}, 
    header: {
      transition, 
      width: headerWidth, 
    }, 
    drawer: {
      transition, 
      width: drawerWidth, 
      boxShadow: theme.shadows[5], 
      whiteSpace: 'nowrap', 
      overflowY: 'hidden', 
    }, 
    main: {
      transition, 
      marginLeft: drawerWidth, 
      marginTop: headerHeight, 
      minHeight: mainHeight, 
      padding: theme.spacing(1), 
    }, 
    footer: {
      width: footerWidth, 
      position: 'sticky', 
      bottom: 0, 
      margin: '0 auto', 
      boxShadow: theme.shadows[5], 
    }, 
  };
});

const DashboardLayout = ({
  children, 
  className, 
  title, 
  gitUrl, 
  header, 
  drawer, 
  footer, 
  ...other 
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles(open);
  classes.root = clsx(classes.root, className); 
  const toggleOpen = () => setOpen(!open);

  return (
    <div className={classes.root} {...other}>
      <DashboardHeader className={classes.header} title={title} gitUrl={gitUrl} menuClick={toggleOpen}>
        {header}
      </DashboardHeader>
      
      <DashboardDrawer className={classes.drawer}>
        {drawer}
      </DashboardDrawer>
      
      <main className={classes.main}>
        {children}
      </main>
      
      <DashboardFooter className={classes.footer}>
        {footer}
      </DashboardFooter>
    </div>
  )
}

export default DashboardLayout
