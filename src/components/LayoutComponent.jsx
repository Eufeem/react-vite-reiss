import React from 'react'
import { Outlet } from "react-router-dom";
import { NavbarComponent } from './NavbarComponent';

export const LayoutComponent = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  )
}
