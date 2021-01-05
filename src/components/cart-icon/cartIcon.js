import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../.././assets/shopping-bag .svg";
import { toggleCardHiddens } from "./../../redux/cart/Cart.Actions";
import { selectCartItemsCount } from './../../redux/cart/Cart.Selectors';

const CartIcon = ({ toggleCardHiddens, itemCount }) => {
	return (
		<div className='cart-icon' onClick={() => toggleCardHiddens()}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state) 
});

const dispatchStateToProps = (dispatch) => ({
	toggleCardHiddens: () => dispatch(toggleCardHiddens()),
});
export default connect(mapStateToProps, dispatchStateToProps)(CartIcon);
