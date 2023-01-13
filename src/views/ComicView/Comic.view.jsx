import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store";
import { useEffect, useState } from "react";
import './Comic.css'
import Chapters from "../../components/Chapter.one";
import React from "react";
import comicActions from "../../store/comic/actions";
import { useParams } from "react-router-dom";
const {getComic} = comicActions;


export default function Comic() {
  const comicStore = useSelector(store => store.comic)
  const dispatch= useDispatch()
  console.log(comicStore)
const { id } = useParams() 
  useEffect(()  => {
    dispatch(getComic(id))
  }, []
  )

  const [chapter, setChapter] = useState(false) 
  const handleClick = () => {
    setChapter(!chapter)
  }


  return (
      <div className="Comic">
        <div className="comicMargin">
      <img src={comicStore.comics.response?.photo} className="imageComic" alt={comicStore.comics.response?.photo}/>
      <p>{comicStore.comics.response?.title}</p>
      <div>
        <p>catego</p>
        <p>cumpa</p>
      </div>
      <h1>Riaction</h1>

      <div className="butons">
      <button className="botomcito">Manga</button>
      <button className="botomcito" onClick={handleClick}> Chapter </button> { chapter ? (<Chapters />) : null } 
      </div>
      <p className="">{comicStore.comics.response?.description}</p>
      </div>
    </div>
  );
} 