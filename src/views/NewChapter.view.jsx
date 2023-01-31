import React, { useRef } from "react";
import { Form } from "../components";
import postData from "../services/postData";
import { useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";




const CreateChapter = () => {
	const inputTitle = useRef("");
	const inputPages = useRef("");
	const inputOrder = useRef("");
	const { mingaAlert } = alertActions;
	const dispatch = useDispatch();
	const token = useSelector((store) => store.auth.token);
	const { id } = useParams ()
	console.log(id)
	
	let handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			comic_id: id,
			title: inputTitle.current.value,
			pages: inputPages.current.value.split(","),
			order: inputOrder.current.value,
		};
		const response = await postData("http://localhost:8080/api/chapters", data,token);
		console.log(response);
		if (!response.success) {
			if (typeof response.response === "object") {
				dispatch(
					mingaAlert({
						message: response.response[0].message,
						visible: true,
						status: response.success,
					})
				);
				return false;
			}
			dispatch(
				mingaAlert({
					message: response.response,
					visible: true,
					status: response.success,
				})
			);
			return false;
		}
		dispatch(
			mingaAlert({
				message: response.response,
				visible: true,
				status: response.success,
			})
		);
	};

	return (
		<div className='chapter'>
			<Form handler={handleSubmit}>
				<h1 className='chapterTitulo'>New Chapter</h1>

				<label htmlFor='titulo'>
					<input
						className='inputChapter'
						ref={inputTitle}
						type='text'
						id='titulo'
						placeholder='Enter title'
					/>
				</label>

				<label htmlFor='pages'>
					<input
						className='inputChapter'
						ref={inputPages}
						type='text'
						id='pages'
						placeholder='Enter pages'
					/>
				</label>
				<label htmlFor='order'>
					<input
						className='inputChapter'
						ref={inputOrder}
						type='text'
						id='order'
						placeholder='Enter order'
					/>
				</label>
			</Form>
		</div>
	);
};
export default CreateChapter;
