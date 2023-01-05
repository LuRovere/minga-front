import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import postData from "../services/postData";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const NewAuthor = () => {
	const [inputName, setInputName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputAddress, setInputAddress] = useState("");
	const [inputBirthday, setInputBirthday] = useState("");
	const [inputImageUrl, setInputImageUrl] = useState("");
	const { mingaAlert } = alertActions;
	// const alert = useSelector(store => console.log(store))
	let visible = useSelector((store) => store.alert.visible);
	let message = useSelector((store) => store.alert.message);
	const dispatch = useDispatch();
	const MySwal = withReactContent(Swal);
	const _handleSubmit = async (e) => {
		e.preventDefault();
		const [city, country] = inputAddress.trim().split(",");
		await dispatch(mingaAlert({ message: "Holi mami uwu", visible: true }));
		MySwal.fire({
			title: <p>{message}</p>,
			didOpen: () => {
				console.log(message);
			},
			didClose: () => {
				dispatch(mingaAlert({ message: "", visible: false }));
				console.log(visible);
			},
			icon: "success",
		});
		// const message = await postData('http://localhost:8080/api/authors/', {...response.data, user_id: '63b58ab5f67ecbbe4fe5d0d8'})
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
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
				/>
				<input
					type='text'
					name='last-name'
					placeholder='Insert last name here...'
					value={inputLastName}
					onChange={(e) => setInputLastName(e.target.value)}
				/>
				<input
					type='text'
					name='address'
					placeholder='Insert address here... (city, country)'
					value={inputAddress}
					onChange={(e) => setInputAddress(e.target.value)}
				/>
				<input
					type='date'
					name='birth'
					placeholder='birthday'
					value={inputBirthday}
					onChange={(e) => setInputBirthday(e.target.value)}
				/>
				<input
					type='text'
					name='image'
					placeholder='Insert image url here...'
					value={inputImageUrl}
					onChange={(e) => setInputImageUrl(e.target.value)}
				/>
			</Form>
		</div>
	);
};

export default NewAuthor;
