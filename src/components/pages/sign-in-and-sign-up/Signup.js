import React from "react";
import { FormInput } from "./../../FormInput/FormInput";
import CustomButton from "./../../customButton/customButton";
import {
	auth,
	createUserProfileDocument,
} from "./../../../firebase/firebaseUtils";

import "./Signup.scss";

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			conformPassword: "",
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, conformPassword } = this.state;
		if (password !== conformPassword) {
			alert("Passwords cont match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, {displayName});

			this.state = {
				displayName: "",
				email: "",
				password: "",
				conformPassword: "",
			};
		} catch (error) {
			console.log(error.message);
		}
	};

	handleChange = (event) => {
        // event.preventDefault();
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, conformPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Signup with email and password</span>
				<form className='signup-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='conformPassword'
						value={conformPassword}
						onChange={this.handleChange}
						label='Conform Password'
						required
					/>
					<CustomButton type='submit'>SignUp</CustomButton>
				</form>
			</div>
		);
	}
}
