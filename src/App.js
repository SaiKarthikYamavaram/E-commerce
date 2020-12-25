import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/ShopPage/Shop";
import { Header } from "./components/header/header.js";
import { Signin_signOut } from "./components/pages/sign-in-and-sign-up/Signin_signOut";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { Component } from "react";

class App extends Component {
	
	constructor(props) {
		super(props);
	this.state = {currentUser:null};

	}
	unSubscribeFromAuth = null;

	componentDidMount(){
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
			if(userAuth){
			const userRef = await createUserProfileDocument(userAuth)
			userRef.onSnapshot(snapshot=>{
			this.setState({currentUser:{
				currentUser:{
					id:snapshot.id,
					...snapshot.data()
				}
			}},()=>console.log(this.state))
				// if(snapshot.exists) console.log(snapshot.data());
			})
		}
		else{
			this.setState({currentUser:null})
		}
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
