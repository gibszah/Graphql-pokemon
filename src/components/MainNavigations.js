import React, { useState } from "react";
// import { Container, Navbar } from "react-bootstrap";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/pokemon.png";

import { Link } from "react-router-dom";

const MainNavigations = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handlerToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav
				className='navbar-end pt-2 mr-3'
				role='navigation'
				aria-label='main navigation'
			>
				<div className='navbar-brand ml-3'>
					<img
						src={logo}
						alt=' '
						style={{ width: "130px", height: "40px", paddingLeft: "5px" }}
					/>

					<Link
						role='button'
						className={`navbar-burger${isOpen ? "is-active" : ""}`}
						onClick={handlerToggle}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'
						to='/'
					>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</Link>
				</div>

				<div
					id='navbarBasicExample'
					className={`navbar-menu ${isOpen ? "is-active" : ""}`}
				>
					<div className='navbar-end'>
						<Link
							to='/'
							className='navbar-item'
							style={{ textDecoration: "none" }}
						>
							POKEMON
						</Link>

						<Link
							to='about'
							className='navbar-item'
							style={{ textDecoration: "none" }}
						>
							About Us
						</Link>
					</div>

					<div className='navbar-end'>
						<div className='navbar-item'>
							<div className='buttons'>
								<Link
									className='button is-primary'
									style={{ textDecoration: "none" }}
								>
									<strong>Sign up</strong>
								</Link>
								<Link
									to='login'
									className='button is-light'
									style={{ textDecoration: "none" }}
								>
									Log in
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default MainNavigations;
