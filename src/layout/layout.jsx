import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer.layout'
import Navbar from './Navbar'
import { useSelector, useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Layout = () => {
  const { visible, message, status } = useSelector((store) => store.alert)
  const dispatch = useDispatch()
  const { mingaAlert } = alertActions
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    console.log(status)
    if(visible) {
      MySwal.fire({
        title: <p>{message}</p>,
        didClose: () => {
          dispatch(mingaAlert({ message: "", visible: false }));
        },
        icon: status ? 'success' : 'error',
      })  
    }
  },[visible])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout