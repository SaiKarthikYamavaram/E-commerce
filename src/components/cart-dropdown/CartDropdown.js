import React from "react";
import "./CartDropdowm.scss";
import CustomButton from "./../customButton/customButton";
import CartItem from "./../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from './../../redux/cart/Cart.Selectors';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton> GOT TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems:selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
