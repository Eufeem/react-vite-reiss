import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { LayoutComponent } from './components/LayoutComponent'

// Pages
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import { ProductPage } from './pages/ProductPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TablePage } from './pages/TablePage';

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<HomePage />}/>
          <Route path='/Home' element={<HomePage />}/>
          <Route path='/User' element={<UserPage />}/>
          <Route path='/Product' element={<ProductPage />}/>
          <Route path='/Table' element={<TablePage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
