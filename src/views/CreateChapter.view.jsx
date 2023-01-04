import axios from "axios";
import React, { useRef } from "react";


const CreateChapter = () => {

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
        axios.post("http://localhost:8080/api/chapters", data)
        .then (e=>console.log(e))
        .catch(error=>console.log(error))
    }

    

    return(

        <div className="chapter">

         <form onSubmit={guardarData} className="formChapter">

         <legend className="chapterTitulo">New chapter</legend>
         
             <label htmlFor="titulo">
                    
             <input className="inputChapter"
             ref={inputTitle}
              type="text" 
              id="titulo"
              placeholder="ingresar titulo" 
              
              />
             </label>

 
           
             <label htmlFor="pages">
             <input className="inputChapter"
              ref={inputPages}
              type="text" 
              id="pages"
              placeholder="Ingresar pages"
             
              
              />
             </label>
             <label htmlFor="order">
             <input className="inputChapter"
             ref={inputOrder}
              type="text" 
              id="order"
              placeholder="Ingresar order"
              
             
              />
             </label>
             <input type="submit" value="Crear 😊" className="enviar"/>
         </form>
    </div>
     )
 };
 export default CreateChapter