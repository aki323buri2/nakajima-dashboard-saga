import React from 'react';
import './App.css';
import CounterApp from './containers/CounterApp'; 
import DashboardLayout from './containers/DashboardLayout';
import {
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Tooltip, 
} from '@material-ui/core';
import { Switch, Route, Redirect, Link as RouterLink } from 'react-router-dom'; 
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Persons from './features/persons/Persons';

const TITLE = '中島　亮三';
const GIT_URL = 'https://github.com/aki323buri2';

const routers = [
  {
    name: 'first', 
    title: '初期画面', 
    element: <Persons />, 
  }, 
  {
    name: 'counter', 
    title: 'カウンター', 
    element: <CounterApp />, 
  }, 
].map(({ name, path, ...other }) => ({
  name, 
  path: path || `/${name}`, 
  ...other, 
}));

const App = () => {
  const header = null; 
  const drawer = (
    <List>
      {routers.map(({ name, path, title, icon, }) => (
        <ListItem button key={name} component={RouterLink} to={path}>
          <Tooltip title={title}>
            <ListItemIcon>
              {icon || <PlayCircleOutlineIcon />}
            </ListItemIcon>
          </Tooltip>
          <ListItemText>
            {title}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
  const main = (
    <Switch>
      <Route exact path="/">
        <Redirect to={routers[0].path} />
      </Route>
      {routers.map(({ name, path, element, }) => (
        <Route key={name} path={path}>
          {element}
        </Route>
      ))}
    </Switch>
  );
  return (
    <DashboardLayout
      title={TITLE}
      gitUrl={GIT_URL}
      header={header}
      drawer={drawer}
    >
      {main}
    </DashboardLayout>
  )
}

export default App
