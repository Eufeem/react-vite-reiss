import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg 8">
          <h1 className='text-center'>Reiss</h1>
          <img
            src="./src/assets/react-drawing.svg"
            className="img-fluid rounded mx-auto d-block"
            alt="..."
            width={"200px"} />
        </div>
      </div>

      <div className="row justify-content-center">

        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4 text-center">Titulo</h5>
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Cupiditate omnis quae tempore natus, expedita reprehenderit commodi provident 
                dolorem repellat, velit officia incidunt deserunt mollitia aliquam maxime aliquid? 
                Libero, nesciunt eveniet?
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4 text-center">Titulo</h5>
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Cupiditate omnis quae tempore natus, expedita reprehenderit commodi provident 
                dolorem repellat, velit officia incidunt deserunt mollitia aliquam maxime aliquid? 
                Libero, nesciunt eveniet?
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
