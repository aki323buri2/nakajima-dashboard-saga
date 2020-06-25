import React from 'react';
import clsx from 'clsx'; 
import { makeStyles, Paper, TableCell } from '@material-ui/core';
import { AutoSizer, Column, Table } from 'react-virtualized'; 

const HEADER_HEIGHT = 36;
const ROW_HEIGHT = 36;

const useStyles = makeStyles(theme => ({
  root: {}, 
  paper: {
    width: '100%', 
    height: `calc(100vh - ${120}px)`, 
  }, 
  flexContainer: {
    display: 'flex', 
    alignItems: 'center', 
    boxSizing: 'border-box', 
  }, 
  table: {
    // '& .ReactVirtualized__table__headerRow': {
    //   flip: false, 
    //   paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined, 
    // }, 
  }, 
  tableCell: {
    flex: 1, 
  }, 
  tableRow: {
    cursor: 'pointer', 
  }, 
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200], 
    }, 
  }, 
  noClick: {
    cursor: 'initial', 
  }, 
}));

const PersonsVirtualizedTable = ({
  className, 
  headerHeight = HEADER_HEIGHT, 
  rowHeight = ROW_HEIGHT, 
  columns, 
  onRowClick, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className); 

  const getRowClassName = ({ index }) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHower]: index !== -1 && onRowClick !== null, 
    });
  };

  const headerRenderer = ({ label, columnIndex }) => {
    return (
      <TableCell 
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        component="div"
        variant="head"
        style={{ height: rowHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
        <span>{label}</span>
      </TableCell>
    );
  };
  
  const cellRenderer = ({ cellData, columnIndex }) => {
    return (
      <TableCell
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick === null, 
        })}
        component="div"
        variant="body"
        style={{ height: rowHeight }}
        align={columns[columnIndex].numeric || false ? 'right': 'left'}
      >
        {cellData}
      </TableCell>
    );
  };
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          className={classes.table}
          height={height}
          width={width}
          rowHeight={rowHeight}
          headerHeight={headerHeight}
          rowClassName={getRowClassName}
          onRowClick={onRowClick}
          {...other}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) => headerRenderer({
                  ...headerProps, 
                  columnIndex: index, 
                })}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  )
}

export const PersonsTable = ({
  data, 
  ...other 
}) => {
  const classes = useStyles(); 

  return (
    <Paper className={classes.paper}>
      <PersonsVirtualizedTable 
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        columns={columns}
        {...other}
      />
    </Paper>
  );
};

export default PersonsTable;

const columns = [
  {
    dataKey: 'id', 
    label: 'ID', 
    width: 50, 
    numeric: true, 
  }, 
  {
    dataKey: 'first_name', 
    label: '苗字', 
    width: 120, 
  }, 
  {
    dataKey: 'last_name', 
    label: '名前', 
    width: 120, 
  }, 
  {
    dataKey: 'email', 
    label: 'Eメール', 
    width: 180, 
  }, 
  {
    dataKey: 'gender', 
    label: '性別', 
    width: 120, 
  }, 
];
