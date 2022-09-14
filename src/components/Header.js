/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
	min-height: 60px;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
	transition: transform 0.2s ease-in-out;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		a {
			font-weight: 600;
		}
	}
`;

const CloseMenu = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Header = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<Link to="/">
				<img src="images/logo.svg" alt="" />
			</Link>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a key={index} href="#">
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href="#">Shop</a>
				<a href="/login">Tesla Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CloseMenu onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<li key={index}>
							<a href="#">{car}</a>
						</li>
					))}
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-in</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
				<li>
					<a href="#">Roadster</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
			</BurgerNav>
		</Container>
	);
};

export default Header;
