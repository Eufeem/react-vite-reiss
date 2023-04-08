import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { DataTableComponent } from '../components/DataTableComponent';
import { BadgeComponent } from '../components/BadgeComponent';
import { UserFormComponent } from '../components/UserFormComponent';
import { DataTableActions } from '../components/DataTableActions';

const baseURL = 'http://localhost:8080/user'
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
    name: 'Estatus', 
    selector: row => <BadgeComponent status={row.status} />, 
    sortable: true, 
    center: true
  }, {
    name: 'Acciones', 
    selector: row => <DataTableActions id={row.idUser} url={baseURL} />, 
    sortable: false,
    omit: true  
  }
];

export const TablePage = () => {

  const [userlist, setUserlist] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [rowsSelect, setRowsSelect] = useState([])

  useEffect(() => {
    getAll(null)
  }, [])

  const getAll = (data) => {
    if (data == null) {
      axios.get(baseURL).then((response) => {
        setUserlist(response.data)
      })
    }
  } 

  const showNotification = (flag, type) => {
    if (flag) {
      switch (type) {
        case "create":
          toast.success("Elemento guardado", {
            theme: "colored"
          })
          break;
        case "delete":
          toast.error("Elemento eliminado", {
            theme: "colored"
          })
          break;
        default:
          break;
      }
    }
  }

  const getRows = (rows) => {
    setRowsSelect(rows);
  }

  const showFormFunction = () => {
    setShowForm(!showForm)
  }

  const deleteRows = () => {
    if (rowsSelect.length > 0) {
      rowsSelect.forEach(element => {
        axios.delete(baseURL + "/" + element.idUser).then((response) => {
          console.log(response)
          if (response.status == 204) {
            getAll(null)
            showNotification(true, "delete")
          }
        })
      });
    }
  }

  const searchInput = (event) => {
    axios.post(baseURL + "/findByName", {name: event.target.value}).then( (response) => {
      setUserlist(response.data)
    })
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
                      <>
                        <button type="button" className="btn btn-success mx-2" onClick={showFormFunction}>
                          <i className="bi bi-plus-square"></i> Agregar Usuario
                        </button> 
                        <button type="button" className="btn btn-danger" onClick={deleteRows}>
                          <i className="bi bi-trash"></i> Eliminar
                        </button>

                      </>
                    }
                  </div>
                </div>
                {
                  showForm ? <UserFormComponent 
                                setShowForm={setShowForm} 
                                reloadData={getAll}
                                notification={showNotification} /> : 
                  <>
                    <div className="row justify-content-between">
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <h2>Tabla Usuarios</h2>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Busca por nombre"
                          onChange={searchInput} />
                      </div>
                    </div>
                    <DataTableComponent 
                      columns={columns} 
                      data={userlist} 
                      rows={getRows} />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}
