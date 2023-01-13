import React, { useEffect, useRef, useState } from "react"
import Categories from '../../components/ComicsCategories'
import Cards from '../../components/ComicsCards'
import "./Comics.css"
import { useDispatch,useSelector } from "react-redux"
import comicsActions from "../../store/comics/actions"
const {getComics}= comicsActions


const ComicsView = () =>{
    const inputCategory = useSelector((store)=> store.filterCategoryComic.filterCategory)
   //console.log(inputCategory.join(","))
    
    
    const dispatch = useDispatch()
    const inputText = useRef("");
    const inputSort = "asc"
    console.log(inputText.current?.value)

    useEffect(()=>{
        
        // if (comics.length<1){
            dispatch(getComics({
                inputText:inputText.current.value
                ,inputSort,
                inputCategory:inputCategory.join(",")
            }))
            
//  }
       
    },[inputText.current?.value,inputCategory])

    return (
        <div className="comicsBody">
 
<h1 className="tituloComics">Comics</h1>
<label className="contSearch" htmlFor="search">
    <img className="searchImg" src="./assets/Search.png" alt="" />
    <input ref={inputText} className="search" type="text" id="search" placeholder="Find your comic here"/>
</label>

<section>
    
    <div className="exploradorDeComics">
    <h2 className="explore">Explore</h2>
    
    <div className="ancorsComics">
        <a className="ancorComics1" href="">Adventures</a>
        <a className="ancorComics2" href="">Nostalgic</a>
        <a className="ancorComics3" href="">Popular</a>
    </div>
    <Categories/>
    <Cards/>
         
         
    </div>
</section>
            
        </div>
    )
    
}
export default ComicsView