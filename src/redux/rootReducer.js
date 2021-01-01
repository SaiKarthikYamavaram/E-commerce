import { combineReducers } from "redux";
import userReducer from "./user/user.Reducer";
import CartReducer from "./cart/Cart.Reducer";

export default combineReducers({
	user: userReducer,
	cart: CartReducer,
});
