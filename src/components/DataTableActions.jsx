import React, { useEffect } from 'react'
import axios from 'axios';

export const DataTableActions = (props) => {

  return (
    <>
      <button 
        type="button" 
        className="btn btn-danger">
          <i className="bi bi-trash"></i> </button> &nbsp;
      <button 
        type="button" 
        className="btn btn-warning">
          <i className="bi bi-pencil"></i> </button>
    </>
  )
}
