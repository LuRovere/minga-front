import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import postData from "../services/postData";


const CreateComic = () => {
    const inputTitle = useRef("")
    const inputDescription = useRef("")
    const inputCoverPhoto = useRef("")
    const inputCategory = useRef("")
    const { mingaAlert } = alertActions;
	const dispatch = useDispatch();
    const _handleSubmit = async(e) => {
        e.preventDefault()
        let data = {
            author_id: "63b5ab3ef67ecbbe4fe5d0e9",
            company_id: "63ac47d8b4db2f7baacad498",
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            category: inputCategory.current.value,
            photo: inputCoverPhoto.current.value
        }
        const response = await postData('http://localhost:8080/api/comics/', data)
        console.log(response)
        if(!response.success) {
            if(typeof response.response === "object"){
                dispatch(mingaAlert({ message: response.response[0].message, visible: true, status: response.success }))
                return false
            }
            dispatch(mingaAlert({ message: response.response, visible: true, status: response.success }))
                return false
		}
		dispatch(mingaAlert({ message: response.response, visible: true, status: response.success }));
    }

    return(

        <div className="chapter">

         <Form handler={_handleSubmit}>
            <div className="editarcomic">
         
             <label htmlFor="titulo">
                    
             <input className="inputChapter"
              type="text" 
              id="titulo"
              placeholder="Insert title" 
              ref={inputTitle}
              />
             </label>
            <label>
            <select name="select" className="seleccion" defaultValue={""} ref = {inputCategory} >
                <option value="">Insert category</option>
                <option value="63b43895ad64747abfa80a58">Shonen</option>
                <option value="63b43895ad64747abfa80a59">Manhwa</option>
                <option value="63b43895ad64747abfa80a5a">Marvel</option>
                <option value="63b43895ad64747abfa80a5b">DC</option>
                <option value="63b43895ad64747abfa80a5c">Shojo</option>
                <option value="63b43895ad64747abfa80a5d">Seinen</option>
            </select>
            </label>
             <label htmlFor="Descripcion">
             <input className="inputChapter"
              type="text" 
              id="descripcion"
              placeholder="Insert description"
              ref={inputDescription}
             
              />
             </label>
             <label htmlFor="Foto de Portada">
             <input className="inputChapter"
              type="text" 
              id="fotoPortada"
              placeholder="Insert cover photo"
              ref={inputCoverPhoto}
              />
              </label>
             </div>
         </Form>
    </div>
     )
    }
 export default CreateComic