import React from 'react';
import { useSelector, useDispatch, } from 'react-redux'; 
import {
  loading, 
  selectPersonsState, 
} from './personsSlice';
import { makeStyles, Button } from '@material-ui/core';
import clsx from 'clsx'; 
import PersonsTable from './PersonsTable';

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const Persons = ({
  className, 
  ...other 
}) => {
  const { status, error, data } = useSelector(selectPersonsState);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loading());
  };
  const classes = useStyles();
  classes.root = clsx(classes.root, className); 
  
  return (
    <div className={classes.root} {...other}>
      <div className={classes.header}>
        <Button onClick={handleClick}>load...</Button>    
      </div>
      {error && (
        <div className={classes.error}>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      <div className={classes.status}>
        {JSON.stringify(status, null, 2)}
      </div>

      <PersonsTable className={classes.table} 
        data={data} 
        onRowClick={a => console.log(a)}
      />
      
    </div>
  )
}

export default Persons;

