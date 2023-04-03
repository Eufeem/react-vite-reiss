
import React from 'react'

export const NotFoundPage = () => {
  return (
    <>
        <div className="row gy-5">
            <div className="col-12 col-xs-12 col-md-12">
                <h1 className="display-1 text-center">404</h1>
            </div>
        </div>

        <div className="row gy-5">
            <div className="col-12 col-xs-12 col-md-12">
                <h1 className="display-3 text-center">Página no encontrada</h1>
            </div>
        </div>

        <div className="row mt-3 gy-5">
            <div className="col-12 col-xs-12 col-md-12">
                <p className="text-center fs-3">
                    Lo sentimos, la página que esta buscando no se encuentra.
                </p>
            </div>
        </div>

        <div className="row justify-content-center mt-3 gy-5">
            <div className="col-12 col-xs-12 col-md-4 d-grid gap-2">
                <a className='btn btn-lg btn-primary' href='/home'>
                    <i className="bi bi-house"></i> Página Inicio
                </a>
            </div>
        </div>
    </>
  )
}
