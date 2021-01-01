import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebaseUtils";

import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cartIcon";
import CartDropdown from "./../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
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
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						Signout
					</div>
				) : (
					<Link className='option' to='/signin'>
						Sign in
					</Link>
				)}

				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
