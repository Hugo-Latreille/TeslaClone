import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";
import auth from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/car/userSlice";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const signUp = (e) => {
		e.preventDefault();

		if (!firstName) {
			return alert("Please enter a first name !");
		}
		if (!lastName) {
			return alert("Please enter a last name !");
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				updateProfile(userAuth.user, {
					displayName: firstName,
				}).then(() => {
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
							displayName: firstName,
						})
					);
					history.push("/teslaaccount");
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="signup">
			<div className="signup__header">
				<div className="signup__logo">
					<Link to="/">
						<img src="images/logo.svg" alt="" />
					</Link>
				</div>
				<div className="signup__language">
					<LanguageIcon /> <span>en-US</span>
				</div>
			</div>
			<div className="signup__info">
				<h1>Signup</h1>
				<form className="signup__form">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="email">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<ButtonPrimary name="Create Account" type="submit" onClick={signUp} />
				</form>
				<div className="signup__divider">
					<hr /> <span>OR</span> <hr />
				</div>
				<Link to="/login">
					<ButtonSecondary name="Sign In" />
				</Link>
			</div>
		</div>
	);
};

export default Signup;
