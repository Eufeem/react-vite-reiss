import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div className='header-top'><br />
        <div className="container">
          <div className="row align-items-center mt-1">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6"><br />
              <h1 className='text-white fs-1'>React App Reponsive</h1><br /><hr />
              <p className='text-justify text-white fs-4'>
                This is a react application, in this app we can use some modules to develop
                your front-end proyects.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src="./src/assets/pages.png"
                className="img-fluid rounded mx-auto d-block bounce"
                alt="..."
                width={"350px"} />
            </div>
          </div>
          </div>
      </div>

      <div className="container mt-5">

        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 mt-2">
            <div className="card pt-3 pb-3">
              <div className="card-body">
                <h1 className='text-center fs-1 color-primary'>
                  What is Reiss?
                </h1>
                <img
                  src="./src/assets/react-drawing.svg"
                  className="img-fluid rounded mx-auto d-block bounce"
                  alt="..."
                  width={"300px"} />
                
                <p className="card-text text-justify fs-5">
                  Reiss is a application proyect to beginners, the final prupose is show some examples to develop
                  in the library React, this front-end application uses a Java back-end to get the data from 
                  the data base to show, insert, update and delete information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="card">
              <div className="card-body">
                <h1 className='text-center fs-1 color-secondary'>
                  Technology
                </h1>
                
                <p className="card-text text-justify">
                  Reiss is a application proyect to beginners, the final prupose is show some examples to develop
                  in the library React, this front-end application uses a Java back-end to get the data from 
                  the data base to show, insert, update and delete.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="card">
              <div className="card-body">
                <h1 className='text-center fs-1 color-third'>
                  Some helpers!
                </h1>
                
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
      </div>
    </>
  )
}
