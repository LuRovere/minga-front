import axios from "axios";
import React, { useRef } from "react";


const CreateComic = () => {

    const inputTitle = useRef("")
   
    const inputPages = useRef("")
    const inputOrder = useRef("")

    let guardarData = (e) =>{
        e.preventDefault()
        let data = {
            comic_id: "63ac47d8b4db2f7baacad498",
            title: inputTitle.current.value,
            pages:inputPages.current.value.split(",") ,
            order: inputOrder.current.value
        }
        axios.post("http://localhost:8080/api/comics", data)
        .then (e=>console.log(e))
        .catch(error=>console.log(error))
    }

    

    return(

        <div className="chapter">

         <form onSubmit={guardarData} className="formComic">
            <div className="editarcomic">
         
             <label htmlFor="titulo">
                    
             <input className="inputComic"
             ref={inputTitle}
              type="text" 
              id="titulo"
              placeholder="Ingresar titulo" 
              
              />
             </label>

 
            <div className="categorias">
             <label htmlFor="titulo">
                    
             <input className="inputComic"
             ref={inputTitle}
              type="text" 
              id="titulo"
              placeholder="Ingresar categoria" 
              
              />
             
             </label>
             <img src="../../assets/flechaabajo.png" alt="" className="flecha"/>
             </div>
             <label htmlFor="Descripcion">
             <input className="inputComic"
             ref={inputOrder}
              type="text" 
              id="descripcion"
              placeholder="Ingresar descripcion"
              
             
              />
             </label>

             <label htmlFor="Foto de Portada">
             <input className="inputComic"
             ref={inputOrder}
              type="text" 
              id="fotoPortada"
              placeholder="Foto de portada"
              />

              </label>

             <input type="submit" value="Crear 😊" className="enviar"/>
             </div>
         </form>
    </div>
     )
 };
 export default CreateComic