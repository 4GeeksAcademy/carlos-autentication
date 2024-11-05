import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto">
					<Link to="/register" className="btn btn-link">Regístrate</Link>
					{!store.token && <Link to="/login">
						<button className="btn btn-success">Login</button>
					</Link>}
					{store.token && <button className="btn btn-danger" onClick={() => actions.logout()}>
							Logout
						</button>}
				</div>
			</div>
		</nav>
	);
};
