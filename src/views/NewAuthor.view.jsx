import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import postData from "../services/postData";

const NewAuthor = () => {
	const inputName = useRef();
	const inputLastName = useRef();
	const inputAddress = useRef();
	const inputBirthday = useRef();
	const inputImageUrl = useRef();
	const { mingaAlert } = alertActions;
	const dispatch = useDispatch();
	const _handleSubmit = async (e) => {
		e.preventDefault();
		const [city, country] = inputAddress.current.value.trim().split(",");
		const data = {
			name: inputName.current.value,
			last_name: inputLastName.current.value,
			city,
			country,
			date: inputBirthday.current.value,
			photo: inputImageUrl.current.value
		}
		// const response = await postData('http://localhost:8080/api/authors/', {...data, user_id: '63b58ab5f67ecbbe4fe5d0d8'})
		await dispatch(mingaAlert({ message: "Holi mami uwu", visible: true, status: false }));
	};
	return (
		<div>
			<h3>New Author</h3>
			<div></div>
			<Form handler={_handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='Insert name here...'
					ref={inputName}
				/>
				<input
					type='text'
					name='last-name'
					placeholder='Insert last name here...'
					ref={inputLastName}
				/>
				<input
					type='text'
					name='address'
					placeholder='Insert address here... (city, country)'
					ref={inputAddress}
				/>
				<input
					type='date'
					name='birth'
					placeholder='birthday'
					ref={inputBirthday}
				/>
				<input
					type='text'
					name='image'
					placeholder='Insert image url here...'
					ref={inputImageUrl}
				/>
			</Form>
		</div>
	);
};

export default NewAuthor;
