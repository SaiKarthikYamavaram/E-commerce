import CartActionTypes from "./Cart.Types";

export const toggleCardHiddens = () => ({
	type: CartActionTypes.TOGGLE_HIDDEN,
});

export const addItems = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});
