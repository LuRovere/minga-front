import { useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import React from "react";

const ChapterCard = ({ title, chapterId }) => {
    const comicStore = useSelector((store) => store.comic);

return (
    <div className="chapterCard">
        <img
            className="imgChapters"
            src={comicStore?.comics?.response?.photo}
            alt={title}
        />
        <div className="titleChapter">
        <p className=""> {title} </p>
        </div>
        <div className="boxRead">
        <Anchor to={`/pages/${chapterId}`} className="read">
            Read
        </Anchor>
        </div>
    </div>
);
};

export default ChapterCard;
