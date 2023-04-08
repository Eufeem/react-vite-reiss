import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export const UserFormComponent = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const baseURL = 'http://localhost:8080/user'

  const onSubmit = (data) => {
    create(data)
  }

  const create = (data) => {
    axios.post(baseURL, data).then((response) => {
      if (response.status == 201) {
        props.reloadData(null)
        props.setShowForm(false)
        props.notification(true, "create")
      }
    });
  }

  return (
    <>
      <h2>Formulario Usuarios</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Nombre</label>
            <input type="text" autoComplete="off" autoFocus
              className={"form-control " + (errors.name ? 'is-invalid' : '')}
              {...register('name', { required: true, maxLength: 20 })} />
            {errors.name && <span className='text-danger'>Nombre es requerido</span>}
          </div>

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Apellido</label>
            <input type="text" autoComplete="off"
              className={"form-control " + (errors.lastName ? 'is-invalid' : '')}
              {...register('lastName', { required: true, maxLength: 30 })} />
            {errors.lastName && <span className='text-danger'>Apellido es requerido</span>}
          </div>

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Username</label>
            <input type="text" autoComplete="off"
              className={"form-control " + (errors.username ? 'is-invalid' : '')}
              {...register('username', { required: true, maxLength: 30 })} />
            {errors.username && <span className='text-danger'>Nombre usuario es requerido</span>}
          </div>

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Contraseña</label>
            <input type="password" autoComplete="off"
              className={"form-control " + (errors.password ? 'is-invalid' : '')}
              {...register('password', { required: true, maxLength: 30 })} />
            {errors.password && <span className='text-danger'>Contraseña es requerido</span>}
          </div>

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Email</label>
            <input type="email" autoComplete="off"
              className={"form-control " + (errors.email ? 'is-invalid' : '')}
              {...register('email', { required: true, maxLength: 30 })} />
            {errors.email && <span className='text-danger'>Email es requerido</span>}
          </div>

          <div className="col-12 col-xs-12 col-md-3 mb-2">
            <label className='form-label'>Estatus</label>
            <select
              defaultValue={'1'}
              className={"form-select " + (errors.status ? 'is-invalid' : '')}
              {...register('status', { required: true, valueAsNumber: true })}  >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            {errors.status && <span className='text-danger'>Estatus es requerido</span>}
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
    </>
  )
}
