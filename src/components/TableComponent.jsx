import React from 'react'
import { Table } from 'react-bootstrap';
/**
 * Componente para la creación de tablas dinamicas
 * @param {*} props - Propiedades dinamicas pasadas desde el componente UserPage.jsx
 * headers     => Cabeceros de la tabla, elementos <th></th>
 * data        => Información (lista de objectos JSON)
 * dataHeaders => Variables del objecto JSON para pintar la tabla
 */
export const TableComponent = (props) => {

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
        { props.headers.map((data) => {
            return ( <th key={ data }>{ data }</th> )
          })
        }
        </tr>
      </thead>
      <tbody>   
        {
          props.data.map((data, index) => {
            return (
              <tr key={index}>
                {
                  props.dataHeaders.map((dataHeaders, index) => {
                    return ( <td key={index}>{ data[dataHeaders] }</td> )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}
