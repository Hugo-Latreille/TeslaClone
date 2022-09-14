import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/car/userSlice";
import Signup from "./components/Signup";
import TeslaAccount from "./components/TeslaAccount";
import auth from "./firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Header />
					<Home />
				</Route>
				<Route exact path="/login">
					{user ? <Redirect to="/teslaaccount" /> : <Login />}
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route exact path="/teslaaccount">
					{!user ? <Redirect to="/login" /> : <TeslaAccount />}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
