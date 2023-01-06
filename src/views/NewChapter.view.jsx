import React, { useRef } from "react";
import { Form } from "../components";
import postData from "../services/postData";



const CreateChapter = () => {

    const inputTitle = useRef("")
    const inputPages = useRef("")
    const inputOrder = useRef("")

    let handleSubmit = async(e) =>{
        e.preventDefault()
        let data = {
            comic_id: "63ac47d8b4db2f7baacad498",
            title: inputTitle.current.value,
            pages:inputPages.current.value.split(",") ,
            order: inputOrder.current.value
        }
        const response = await postData("http://localhost:8080/api/chapters", data)
        console.log(response)
    }
    

    

    return(

        <div className="chapter">
            
         <Form  handler ={handleSubmit}>

         <h1 className="chapterTitulo">New Chapter</h1>
            
             <label htmlFor="titulo">
                    
             <input className="inputChapter"
             ref={inputTitle}
              type="text" 
              id="titulo"
              placeholder="Enter title" 
              
              />
             </label>
           
             <label htmlFor="pages">
             <input className="inputChapter"
              ref={inputPages}
              type="text" 
              id="pages"
              placeholder="Enter pages"
             
              
              />
             </label>
             <label htmlFor="order">
             <input className="inputChapter"
             ref={inputOrder}
              type="text" 
              id="order"
              placeholder="Enter order"
              
             
              />
             </label>
           
             </Form>
           
    </div>
     )
 };
 export default CreateChapter