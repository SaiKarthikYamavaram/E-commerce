import React from "react";
import "./CartDropdowm.scss";
import CustomButton from "./../customButton/customButton";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton> GOT TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
