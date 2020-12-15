import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/ShopPage/Shop";



function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
