import axios from "axios";
import React, {useEffect,useState} from "react";


const ComicsCards=() =>{
    const [cards,setCards] = useState([])

    const getData = async()=>{
        try {
            const response = await axios.get('http://localhost:8080/api/comics')
            setCards(response.data.response)
          
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getData()
    }
    ,[])
    return (
        <>
            {
                cards.map((card,index)=>{return<div key={index} className="card">
 
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