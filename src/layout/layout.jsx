import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer.layout'
import Navbar from './navbar.layout'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout