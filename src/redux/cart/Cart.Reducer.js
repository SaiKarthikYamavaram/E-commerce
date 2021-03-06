import CartActionTypes from "./Cart.Types";
import { addItemToCart } from "./Cart.Utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default CartReducer;
