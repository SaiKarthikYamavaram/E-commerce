import React from "react";
import "./CollectionItem.scss";
import CustomButton from "./../customButton/customButton";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/Cart.Actions";

const CollectionItem = ({ item, addItem }) => {
	const {  name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
