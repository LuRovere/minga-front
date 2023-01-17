import { useDispatch, useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import React from "react";
import comicActions from "../store/comic/actions";
import { useEffect } from "react";
import { useParams } from "react-router";

const modalContainer = document.querySelector("#modalContainer");

const { getComic } = comicActions;

const ChapterCard = ({ title, chapterId, isOpened, onClose }) => {
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
