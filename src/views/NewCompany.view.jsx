import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import postData from "../services/postData";

const NewCompany = () => {
	const inputName = useRef();
	const inputWebsite = useRef();
	const inputImageUrl = useRef();
	const inputDescription= useRef();
	const { token } = useSelector(store =>store.auth)
	const { mingaAlert } = alertActions;
	const dispatch = useDispatch();
	const _handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: inputName.current.value,
			website: inputWebsite.current.value,
			logo: inputImageUrl.current.value,
			description: inputDescription.current.value
		}
		const response = await postData('http://localhost:8080/api/companies', data, token)
		if(!response.success) {
			return dispatch(mingaAlert({ message: response.response[0].message, visible: true, status: response.success }))
		}
		dispatch(mingaAlert({ message: response.response, visible: true, status: response.success }));
	};
	return (
		<div className="chapter">
			<Form handler={_handleSubmit}>
				<h1 className="chapterTitulo">New Company</h1>
				<div></div>
				<label htmlFor="name">
					<input
						type='text'
						name='name'
						id="name"
						className='inputChapter'
						placeholder='Name'
						ref={inputName}
					/>
				</label>
				<label htmlFor="website">
					<input
						type='text'
						name='website'
						id="website"
						className='inputChapter'
						placeholder='Website'
						ref={inputWebsite}
					/>
				</label>
				<label htmlFor="image">
					<input
						type='text'
						name='image'
						id='image'
						className='inputChapter'
						placeholder='URL Profile Image'
						ref={inputImageUrl}
					/>
				</label>
				<label htmlFor="descrption">
					<input
						type='text'
						name='description'
						id="description"
						className='inputChapter'
						placeholder='Description'
						ref={inputDescription}
					/>
				</label>
			</Form>
		</div>
	);
};

export default NewCompany;