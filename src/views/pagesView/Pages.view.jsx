import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useParams } from "react-router-dom";
import { PageSlides } from "../../components";
import "./pages.css";

const Pages = () => {
	const { id } = useParams();
	const { response, success } = useSelector((store) => store.chapter);
	const dispatch = useDispatch();
	const { getChapter } = chapterActions;
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
					<PageSlides />
				</>
			)}
		</div>
	);
};

export default Pages;
