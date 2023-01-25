import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
 
export default function Alerts() {
    let view = useSelector(store => store.alert.view)
    let messages = useSelector(store => store.alert.messages)
    if(view){
        toast((typeof messages === "string") ? messages :  messages?.map(message => message.message).join(','),
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  return (
    <div>
        <ToastContainer/>
    </div>
  )
}