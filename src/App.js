import './App.css'
import { useEffect } from 'react'

import router from './services/routes'
import { RouterProvider } from "react-router-dom"


import { useDispatch, useSelector } from 'react-redux'
import authActions from "./store/auth/actions"
const { iniciar_sesion_con_token } = authActions

function App() {

    //useSelector(store => console.log(store))
    let dispatch = useDispatch()
    let { is_online } = useSelector(store => store.auth)
    
    useEffect(() => {
        let token = localStorage.getItem('token')
        //console.log(token)
        if (token) {
            dispatch(iniciar_sesion_con_token(token))
        }
    },[is_online])

    return (
        <RouterProvider router={ router } />
    )
}

export default App