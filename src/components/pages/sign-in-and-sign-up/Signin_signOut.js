import React from "react";
import { SignIn } from "./SignIn";
import Signup from "./Signup";
import "./Signin_signOut.scss";

export const Signin_SignOut = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<Signup />
		</div>
	);
};

export default Signin_SignOut;
