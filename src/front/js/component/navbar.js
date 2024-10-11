import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto">
					<Link to="/register" className="btn btn-link">Regístrate</Link>
					<Link to="/login">
						<button className="btn btn-success">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
