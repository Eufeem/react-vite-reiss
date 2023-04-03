import React from 'react'
import { useForm } from 'react-hook-form'

export const ProductPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-xs-12 col-md-10 col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2>Formulario Producto</h2>

              <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="row mb-4">
                  <div className="col-12 col-xs-12 col-md-6">
                    <label className='form-label'>Nombre</label>
                    <input type="text" 
                      className="form-control" 
                      {...register('nombre', {required: true, maxLength: 20} )} />
                      { errors.nombre && <span>Nombre es requerido</span> }
                  </div>
                  <div className="col-12 col-xs-12 col-md-6">
                    <label className='form-label'>Descripción</label>
                    <input type="text" 
                      className="form-control" 
                      {...register('descripcion', {required: true, maxLength: 30} )}></input>
                      { errors.descripcion && <span>Descripción es requerido</span> }
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-12 col-xs-12 col-md-5 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-download"></i> Guardar
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
