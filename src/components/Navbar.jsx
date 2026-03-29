import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();





	return (
		<nav className="navbar navbar-dark border border-warning">
			<img className="logo" src="src/assets/img/starwarslogo.png"></img>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand h1">Home</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{
								store?.favorites.characters.map((character,) => (
									<li className="dropdown-item d-flex justify-content-between align-items-center">
										<Link to={`/characters/${character.uid}`}>
											<p>{character.name}</p>
										</Link>
										<span className="text-danger p-2" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: character.name, uid: character.uid, kind: "characters" } })}>🗑️</span>
									</li>
								))
							}
							{
								store?.favorites.planets.map((planet,) => (
									<li className="dropdown-item d-flex justify-content-between align-items-center">
										<Link to={`/planets/${planet.uid}`}>
											<p>{planet.name}</p>
										</Link>
										<span className="text-danger p-2" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: planet.name, uid: planet.uid, kind: "planets" } })}>🗑️</span>
									</li>
								))
							}
							{
								store?.favorites.species.map((species,) => (
									<li className="dropdown-item d-flex justify-content-between align-items-center">
										<Link to={`/species/${species.uid}`}>
											<p>{species.name}</p>
										</Link>
										<span className="text-danger p-2" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: species.name, uid: species.uid, kind: "species" } })}>🗑️</span>
									</li>
								))
							}
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};