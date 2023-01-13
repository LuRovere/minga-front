import axios from "axios";
import React, {useEffect,useState} from "react";
import { useSelector } from "react-redux";

const ComicsCards=() =>{
    const {comics} = useSelector(store=>store.comics)
 //console.log(comics.comics)
    return (
        <>
            {
                comics.comics?.map((card,index)=>{return<div key={index} className="card">
 
                <div className="textoCard">
                               <h2 className="tituloCard">{card.title}</h2>
                               <p className="pCard">{card.category_id}</p>
                           </div>
               
                           <div className="divCardImg">
                               <img className="cardIMG" src={card.photo} alt="" />
                           </div>
                       </div>})
            }
           
            

           </>
    )
}
export default ComicsCards