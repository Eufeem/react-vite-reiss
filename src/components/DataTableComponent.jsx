import React from 'react'
import DataTable from 'react-data-table-component';

export const DataTableComponent = (props) => {

  const handleChange = ({ selectedRows }) => {
    // console.log('Selected Rows: ', selectedRows);
    props.rows(selectedRows);
  };

  return (
    <DataTable
      columns={props.columns}
      data={props.data}
      pagination
      selectableRows
      onSelectedRowsChange={handleChange}
    />
  )
}
