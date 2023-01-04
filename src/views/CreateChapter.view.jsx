import axios from "axios";
import React, { useRef } from "react";


const CreateChapter = () => {

    return(
        <div className="chapter">

          
        
         <form className="formChapter">

         <legend className="chapterTitulo">New chapter</legend>
         
             <label htmlFor="titulo">
                    
             <input className="inputChapter"
              type="text" 
              id="titulo"
              placeholder="ingresar titulo"
              />
             </label>

 
             <label htmlFor="imagen">
             <input className="inputChapter"
              type="text" 
              id="imagen"
              placeholder="Ingresar foto"
             
              />
             </label>
             <label htmlFor="pages">
             <input className="inputChapter"
              type="text" 
              id="pages"
              placeholder="Ingresar pages"
              
              />
             </label>
             <label htmlFor="order">
             <input className="inputChapter"
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