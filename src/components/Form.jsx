import React from "react";


export default function Form({children,handler}) {
  return (
    <form className="formChapter" onSubmit={handler}>
        {
            children
        }
        <input className="enviar" type="submit" value="Create 😊 " />
        </form>
  )
}
 