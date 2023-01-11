import React from "react"
import Comics from "./Comics.css"

const ComicsView = () =>{
    return (
        <div className="comicsBody">

<h1 className="tituloComics">Comics</h1>
<label className="contSearch" htmlFor="">
    <img className="searchImg" src="./assets/Search.png" alt="" />
    <input className="search" type="search" value="Find your comic here"/>
</label>

<section>
    
    <div className="exploradorDeComics">
    <h2 className="explore">Explore</h2>
        <div className="allButons">
            <button className="button1">Shōnen</button>
            <button className="button2">Seinen</button>
            <button className="button3">Shōjo</button>
            <button className="button4">Kodomo</button>
         </div>
         
         <div className="card">
            <div className="textoCard">
                <h2 className="tituloCard">Superman Comic</h2>
                <p className="pCard">Type</p>
            </div>
            <div className="divCardImg">
            <img className="cardIMG" src="./assets/ejemploCard.png" alt="" />
            </div>
            

         </div>
    </div>
</section>
            
        </div>
    )
    
}
export default ComicsView