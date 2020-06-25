import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton, 
  Typography, 
  Link, 
} from '@material-ui/core';
import clsx from 'clsx'; 
import MenuIcon from '@material-ui/icons/Menu'; 
import GitHubIcon from '@material-ui/icons/GitHub'; 

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const DashboardHeader = ({
  children, 
  className, 
  title, 
  gitUrl, 
  menuClick, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className); 

  return (
    <AppBar className={classes.root} {...other}>
      <Toolbar>
        <Icon icon={<MenuIcon/>} title="メニュー" onClick={menuClick} edge="start" />
        <Logo title={title} href="/" />
        <Spacer />
        {children}
        <Icon icon={<GitHubIcon/>} title="Gitリポジトリ" href={gitUrl} edge="end" />
      </Toolbar>
    </AppBar>
  )
}

export default DashboardHeader;

const Icon = ({ icon, title, ...other }) => (
  <IconButton color="inherit" {...other}>
    {icon}
  </IconButton>
);
const Logo = ({ title, href, onClick, ...other }) => (
  <Typography {...other}>
    <Link color="inherit" underline="none" href={href} onClick={onClick}>
      {title}
    </Link>
  </Typography>
);
const Spacer = () => <div style={{ flexGrow: 1 }} />;