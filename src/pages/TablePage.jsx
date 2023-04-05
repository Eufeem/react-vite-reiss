import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataTableComponent } from '../components/DataTableComponent';
import { BadgeComponent } from '../components/BadgeComponent';
import { UserFormComponent } from '../components/UserFormComponent';

const columns = [
  {
    name: 'ID', selector: row => '#'+row.idUser ,sortable: true,
  },{
    name: 'Nombre', selector: row => row.name ,sortable: true,
  },{ 
    name: 'Apellido', selector: row => row.lastName, sortable: true,
  },{ 
    name: 'Username', selector: row => row.username, sortable: true,
  },{ 
    name: 'Contraseña', selector: row => row.password, sortable: true,
  },{ 
    name: 'Correo', selector: row => row.email, sortable: true,
  },{ 
    name: 'Estatus', selector: row => <BadgeComponent status={row.status} />, sortable: true,
  },
];

export const TablePage = () => {

  const [userlist, setUserlist] = useState([])
  const [count, setCount] = useState(0)
  const baseURL = 'http://localhost:8080/user'
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    getAll()
  }, [count])

  const getAll = () => {
    axios.get(baseURL).then((response) => {
      setUserlist(response.data)
    })
  } 

  const showFormFunction = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <div className="container mt-4">

        <div className="row justify-content-center">
          <div className="col-12 col-xs-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="card-body">

                <div className="row mt-2 mb-4">
                  <div className="col-12 col-sm-12 col-md-3 col-lg 3">
                    {
                      showForm ?
                      <button type="button" className="btn btn-danger" onClick={showFormFunction}>
                        <i className="bi bi-x-square"></i> Cerrar
                      </button> :
                      <button type="button" className="btn btn-success" onClick={showFormFunction}>
                        <i className="bi bi-plus-square"></i> Agregar Usuario
                      </button>
                    }
                  </div>
                </div>
                {
                  showForm ? <UserFormComponent setCount={setCount} setShowForm={setShowForm}/> : 
                  <>
                    <h2>Tabla Usuarios</h2>
                    <DataTableComponent columns={columns} data={userlist} />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
