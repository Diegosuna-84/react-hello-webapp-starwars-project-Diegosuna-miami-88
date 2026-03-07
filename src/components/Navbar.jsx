import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-secondary">
			<img className="logo" src="src/assets/img/starwarslogo.png"></img>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
											<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">favorites</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
							</ul>
						</li>
					
				</div>
			</div>
		</nav>
	);
};