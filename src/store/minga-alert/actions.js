import { createAction } from "@reduxjs/toolkit"

const mingaAlert = createAction(
  'alert',
  (data) => {
    console.log(data) // Datos que llegan a la accion
    return {
      payload: data
    }
  }
) 

const alertActions = { mingaAlert }
export default alertActions