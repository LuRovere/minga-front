import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
<<<<<<< HEAD:src/components/Chapters.jsx
import ChapterCard from "./ChapterCard";
=======
import ChapterCard from "./chapterCard";
>>>>>>> 816b451ce3cf0503c89c09819186f4e3a7b3a805:src/layout/chapters.jsx
import React from "react";
import chapterActions from "../store/chapters/actions";
import { useParams } from "react-router";

const { getChapters } = chapterActions;

export default function Chapters() {
  const chapterStore = useSelector((store) => store.chapters);
  console.log(chapterStore)
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
    <div className="nextPrev">
      {chapterStore.chapters.response?.length === 0 ? (
        <button className="prev" onClick={prev}>Prev</button>
      ) : (
        <div>
          {chapterStore.chapters.response?.map((chapter) => (
            <ChapterCard title={chapter.title} chapterId={chapter._id} />
          ))}
          <div className="nextPrev">
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