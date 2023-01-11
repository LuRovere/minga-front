import React, { useEffect } from "react"
import Categories from '../../components/ComicsCategories'
import Cards from '../../components/ComicsCards'
import "./Comics.css"
import { useSelector, useDispatch } from "react-redux"
import comicsActions from "../../store/comics/actions"
const {getComics}= comicsActions


const ComicsView = () =>{
    const {comics} = useSelector(store=>store.comics)//usar esto
    
    const dispatch = useDispatch()
    const inputText = ""
    const inputCategory = ""
    const inputSort = ""//capturarlas del front use ref use state


    useEffect(()=>{

        if (comics.length<1){
            dispatch(getComics({inputText,inputSort,inputCategory}))
            
 }
       
    },[])

    return (
        <div className="comicsBody">

<h1 className="tituloComics">Comics</h1>
<label className="contSearch" htmlFor="">
    <img className="searchImg" src="./assets/Search.png" alt="" />
    <input className="search" type="search" placeholder="Find your comic here"/>
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