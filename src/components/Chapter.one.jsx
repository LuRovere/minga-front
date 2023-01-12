import { useDispatch, useSelector } from "react-redux";

import React from "react";
import chapterActions from "../store/chapters/actions.js";
import { useEffect } from "react";
import { useParams } from "react-router";

const { getChapter } = chapterActions

export default function Chapters() {
  const chapterStore= useSelector(store => store.chapters) 
  const dispatch= useDispatch() 
  const { id } = useParams() 

useEffect(() => {
  dispatch(getChapter(id))
}, [])

  return (
    <div>
    {chapterStore.chapters.response?.map(chapter => chapter.title)}  
    </div>
  );
}