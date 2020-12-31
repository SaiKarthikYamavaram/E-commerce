import React, { useState } from "react";
import "./SignIn.scss";
import { FormInput } from "./../../FormInput/FormInput";
import CustomButton from "./../../customButton/customButton";
import { auth, sinInWithGoogle } from "./../../../firebase/firebaseUtils";
export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>SignIn with your email and password</span>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					try {
						await auth.signInWithEmailAndPassword(email, password);

						setPassword("");
						setEmail("");
					} catch (error) {
						console.log(error);
					}
				}}>
				<FormInput
					handleChange={(event) => {
						setEmail(event.target.value);
					}}
					type='current-email'
					name='email'
					value={email}
					label='Email'
					required
				/>
				<FormInput
					handleChange={(event) => {
						setPassword(event.target.value);
					}}
					type='password'
					name='password'
					value={password}
					label='password'
					autoComplete='on'
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={sinInWithGoogle} isGoogleSignIn={true}>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
