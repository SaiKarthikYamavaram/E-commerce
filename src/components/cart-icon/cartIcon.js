import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../.././assets/shopping-bag .svg";
import toggleCardHiddens from "./../../redux/cart/Cart.Actions";

const CartIcon = ({ toggleCardHiddens }) => {
	return (
		<div className='cart-icon' onClick={() => toggleCardHiddens()}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

const dispatchStateToProps = (dispatch) => ({
	toggleCardHiddens: () => dispatch(toggleCardHiddens()),
});
export default connect(null, dispatchStateToProps)(CartIcon);
