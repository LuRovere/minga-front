import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './Comic.css'
//, useSelector
import Chapters from "../../components/Chapter.one";
import React from "react";
import comicActions from "../../store/comic/actions";
import { useParams } from "react-router-dom";

const { getComic } = comicActions;

export default function ComicView() {
//   const comicStore = useSelector(store => store.comics) 
  const dispatch= useDispatch()

const { id } = useParams() 

  useEffect(()  => {
    dispatch(getComic(id))
  })

  const [chapter, setChapter] = useState(false) 
  const handleClick = () => {
    setChapter(!chapter) 
  }


  return (
      <div className="Comic"> 
      <img src="https://storage.googleapis.com/minga/mangas/parasyte/main__parasyte.jpg" className="imageComic" alt="" /> 
      <p className="">Parasyte</p>
      <button onClick={handleClick}> Chapter </button> { chapter ? (<Chapters />) : null } 
    </div>
  );
} 