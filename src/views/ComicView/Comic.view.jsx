import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './Comic.css'
// import Chapters from "../../components/Chapter.one";
import React from "react";
import comicActions from "../../store/comic/actions";
import { useParams } from "react-router-dom";

export default function ComicView() {
  const comicStore = useSelector(store => store)
  console.log(comicStore)
  const {getComic} = comicActions
  const dispatch= useDispatch()

const { id } = useParams() 

  useEffect(()  => {
    dispatch(getComic(id))
    console.log(comicStore)
  }, []
  )

  // const [chapter, setChapter] = useState(false) 
  // const handleClick = () => {
  //   setChapter(!chapter) onClick={handleClick}
  // }


  return (
      <div className="Comic">
        <div className="comicMargin">
      <img src={comicStore?.photo} className="imageComic" alt=""/><p className="">Parasyte</p>
      <button > Chapter que no hace nada </button>
      </div>
    </div>
  );
} 