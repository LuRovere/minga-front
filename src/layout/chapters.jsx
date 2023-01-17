import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import ChapterCard from "./chapterCard";
import React from "react";
import chapterActions from "../store/chapters/actions";
import { useParams } from "react-router";

const { getChapters } = chapterActions;

export default function Chapters() {
  const chapterStore = useSelector((store) => store.chapter.chapters);
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const limit = 10
  
  useEffect(() => {
    dispatch(getChapters({ id, pages, limit }));
  }, [pages]);
        const seeMore = () => {
          const limitt = chapterStore.response?.length;
          console.log(limitt)
          dispatch(
            getChapters({
              limit: limitt + 5,
      })
    );
  };

  const boton = () => {
    const limitt = chapterStore.response?.length;
    if (limitt === 34) {
      return <div className="noMore">No more comics</div>;
    } else {
      return (
        <div className="seeMore">
        <button onClick={seeMore} className="buttonSeeMore">
          See more
        </button>
        </div>
      );
    }
  };
  return (
    <div>
      {chapterStore?.response?.length === 0 ? (
        <h2 className=""> Sorry, this manga has no chapters </h2>
      ) : (
        <div className="chapterAlldivs">
          {chapterStore?.response?.map((chapter) => (
            <ChapterCard key={chapter._id} title={chapter.title} chapterId={chapter._id} />
          ))}
          {boton()}
        </div>
      )}
    </div>
  );
}