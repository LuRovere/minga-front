import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer.layout'
import Navbar from './Navbar'

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