import React from 'react'
import DataTable from 'react-data-table-component';

export const DataTableComponent = (props) => {

  return (
    <DataTable
      columns={props.columns}
      data={props.data}
      pagination
    />
  )
}
