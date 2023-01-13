import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import filterCategoryComicsActions from '../store/comicCategories/actions'
const {filterCategoryComics}= filterCategoryComicsActions

export default function CategoryButton(props) {
    const [click, setClick] = useState(true)
    const dispatch = useDispatch()
    //console.log(props)
  const {id,index,name} = props
    const getId = (e)=>{
        //console.log(e.target.id)
        setClick(!click)
        //console.log(click)
            dispatch(filterCategoryComics(id))
        }
    
  return (
    
     <button onClick={getId}  id={id} className={"button"+(index+1)}>{name}</button>
  )
}

