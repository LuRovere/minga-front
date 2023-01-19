import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChapterCard from "./chapterCard";
import React from "react";
import chapterActions from "../store/chapters/actions";
import { useParams } from "react-router";

const { getChapters } = chapterActions;

export default function Chapters() {
  const chapterStore = useSelector((store) => store.chapters);
  const [page, setPage] = useState(1);
  const chapterDetail = chapterStore.chapters.response;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getChapters({ id, page}));
  }, [page]);
  const prev = ()=>{
    setPage(page-1);
  };
  const next = () => {
    setPage(page+1)
  };

  return (
    <div>
      {chapterStore.chapters.response?.length === 0 ? (
        <h2 className=""> Sorry, this manga has no chapters </h2>
      ) : (
        <div>
          {chapterStore.chapters.response?.map((chapter) => (
            <ChapterCard title={chapter.title} chapterId={chapter._id} />
          ))}
          <div className="">
            {page === 1 ? null : (
              <button className="prev" onClick={prev}>
                Prev
              </button>
            )}
            {chapterDetail?.length < 5 ? null : (
              <button className="next" onClick={next}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}