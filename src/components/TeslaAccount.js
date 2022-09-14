import { Link } from "@mui/material";
import React from "react";
import "./TeslaAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/car/userSlice";
import Car from "./Car";
import auth from "../firebase";
import { useHistory } from "react-router-dom";
import { signOut } from "@firebase/auth";

const TeslaAccount = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();
	const logoutOfApp = () => {
		signOut(auth)
			.then(() => {
				dispatch(logout());
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="teslaAccount">
			<div className="teslaAccount__header">
				<div className="teslaAccount__logo">
					<Link to="/">
						<img src="images/logo.svg" alt="" />
					</Link>
				</div>
				<div className="teslaAccount__links">
					<Link to="/teslaaccount">Model S</Link>
					<Link to="/teslaaccount">Model 3</Link>
					<Link to="/teslaaccount">Model X</Link>
					<Link to="/teslaaccount">Model Y</Link>
					<Link to="/teslaaccount">Solar Roof</Link>
					<Link to="/teslaaccount">Solar Panels</Link>
					<Link to="/teslaaccount">Shop</Link>
					<Link to="/teslaaccount">Tesla Account</Link>
					<Link onClick={logoutOfApp}>Log Out</Link>
					<div className="teslaAccount__menu"></div>
				</div>
			</div>
			<div className="teslaAccount__infol">
				<div className="teslaAccount__person">
					<h4>{user?.displayName + "'s"} Tesla</h4>
				</div>
				<div className="teslaAccount__infoRight">
					<Link>Home</Link>
					<Link>Account</Link>
					<Link>History</Link>
					<Link onClick={logoutOfApp}>Log Out</Link>
				</div>
			</div>
			<div className="teslaAccount__car">
				<Car
					imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
					model="model s"
					testDrive
				/>
				<Car
					imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
					model="model x"
				/>
			</div>
		</div>
	);
};

export default TeslaAccount;
