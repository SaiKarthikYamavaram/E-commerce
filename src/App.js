import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/ShopPage/Shop";
import { Header } from "./components/header/header.js";
import { Signin_signOut } from "./components/pages/sign-in-and-sign-up/Signin_signOut";
import { auth } from "./firebase/firebaseUtils";
import { Component } from "react";

class App extends Component {
	
	constructor(props) {
		super(props);
	this.state = {currentUser:null};

	}
	unSubscribeFromAuth = null;

	componentDidMount(){
		this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
			this.setState({currentUser:user})
			console.log(user)
		})
	}

	componentWillUnmount(){
		this.unSubscribeFromAuth();
	}



	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={Shop} />
					<Route exact path='/signin' component={Signin_signOut} />
				</Switch>
			</div>
		);
	}
}

export default App;
