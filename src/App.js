import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/pages/homepage/Homepage";

const Hats = () => {
	return <div>Hats</div>;
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop/hats' component={Hats} />
			</Switch>
		</div>
	);
}

export default App;
