import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TableComponent } from '../components/TableComponent';

/**
 * Componente de Usuario
 * Ejemplos de uso de: 
 *  useState - useEffect
 *  axios (http request)
 *  Formularios - Validación de formularios
 *  Importación de componentes <Table />
 */
export const UserPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const baseURL = 'http://localhost:8080/user'
  const headers = ['Nombre', 'Apellido', 'Username', 'Email', 'Status']
  const [userlist, setUserlist] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    getAll()
  }, [count])

  const onSubmit = (data) => {
    create(data)
  }

  /**
   * Http Request
   */
  const create = (data) => {
    axios.post(baseURL, data).then((response) => {
      setCount(count + 1)
    });
  }

  const getAll = () => {
    axios.get(baseURL).then((response) => {
      setUserlist(response.data)
    })
  } 

  return (
    <>
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-xs-12 col-md-10 col-lg-10">
          <div className="card">
            <div className="card-body">
              <h2>Formulario Usuario</h2>

              <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="row mb-4">

                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Nombre</label>
                    <input type="text" autoComplete="off"
                      className={"form-control " + (errors.name ? 'is-invalid' : '')}
                      {...register('name', {required: true, maxLength: 20} )} />
                      { errors.name && <span className='text-danger'>Nombre es requerido</span> }
                  </div>

                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Apellido</label>
                    <input type="text" autoComplete="off"
                      className={"form-control " + (errors.lastName ? 'is-invalid' : '')}
                      {...register('lastName', {required: true, maxLength: 30} )} />
                      { errors.lastName && <span className='text-danger'>Apellido es requerido</span> }
                  </div>

                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Username</label>
                    <input type="text" autoComplete="off"
                      className={"form-control " + (errors.username ? 'is-invalid' : '')}
                      {...register('username', {required: true, maxLength: 30} )} />
                      { errors.username && <span className='text-danger'>Nombre usuario es requerido</span> }
                  </div>

                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Contraseña</label>
                    <input type="text" autoComplete="off"
                      className={"form-control " + (errors.password ? 'is-invalid' : '')}
                      {...register('password', {required: true, maxLength: 30} )} />
                      { errors.password && <span className='text-danger'>Contraseña es requerido</span> }
                  </div>
                  
                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Email</label>
                    <input type="text" autoComplete="off"
                      className={"form-control " + (errors.email ? 'is-invalid' : '')}
                      {...register('email', {required: true, maxLength: 30} )} />
                      { errors.email && <span className='text-danger'>Email es requerido</span> }
                  </div>

                  <div className="col-12 col-xs-12 col-md-3 mb-2">
                    <label className='form-label'>Estatus</label>
                    <select 
                      defaultValue={'1'}
                      className={"form-select " + (errors.status ? 'is-invalid' : '')}
                      {...register('status', {required: true, valueAsNumber: true } )}  >
                      <option value="1">Activo</option>
                      <option value="0">Inactivo</option>
                    </select>
                    { errors.status && <span className='text-danger'>Estatus es requerido</span> }
                  </div>

                </div>

                <div className="row justify-content-center">
                  <div className="col-12 col-xs-12 col-md-5 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-download"></i>&nbsp;Guardar
                    </button>
                  </div>
                </div>
              </form>

              <div className="row mt-4">
                <TableComponent 
                  headers={headers}
                  data={userlist}
                  dataHeaders={['name', 'lastName', 'username', 'email', 'status']} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
