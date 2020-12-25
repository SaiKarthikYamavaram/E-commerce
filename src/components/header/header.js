import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from './../../firebase/firebaseUtils';

export const Header = ({currentUser}) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{
					currentUser ?
					<div className='option' onClick={()=>auth.signOut()}>Signout</div>
					:
					<Link className="option" to="#" >Sign in</Link>
				}
			</div>
		</div>
	);
};