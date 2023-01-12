import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useNavigate, useParams } from "react-router-dom";
import { PageSlides } from "../../components";
import "./pages.css";

const Pages = () => {
	const { id } = useParams();
	const { response, success } = useSelector((store) => store.chapter);
	const dispatch = useDispatch();
  const navigate = useNavigate()
	const { getChapter } = chapterActions;
  const chaptersIdList = JSON.parse(localStorage.getItem('id-chapters')) || []
  const nextChapter = (option) => {
    const actual = chaptersIdList.findIndex(chapter => chapter === id)
    switch(option) {
      case 'prev':
        if(!actual) {
          return navigate('/test')
        }
        return navigate(`/pages/${chaptersIdList[actual - 1]}`)
      case 'next':
        if((actual === chaptersIdList.length - 1)) {
          return navigate('/test')
        }
        return navigate(`/pages/${chaptersIdList[actual + 1]}`)
      default:
        throw new Error('Wrong option')
    }
  }
	useEffect(() => {
		dispatch(getChapter(id));
	}, [id]);
	return (
		<div className='page-container'>
			{!success ? (
				<h2 className='message'>{response}</h2>
			) : (
				<>
					<div className='page-title'>
						<h2>
							{response?.order} - {response?.title}
						</h2>
					</div>
					<PageSlides nextChapter={nextChapter} />
				</>
			)}
		</div>
	);
};

export default Pages;
