import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/ShopPage/Shop";
import Header from "./components/header/header.js";
import { Signin_SignOut } from "./components/pages/sign-in-and-sign-up/Signin_signOut";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.Actions";

class App extends Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					this.props.setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			this.props.setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		console.log("====================================");
		console.log(this.props);
		console.log("====================================");
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={Shop} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <Signin_SignOut />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapsDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapsDispatchToProps)(App);
