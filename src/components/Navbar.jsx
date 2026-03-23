import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
const { store, dispatch } = useGlobalReducer();





	return (
		<nav className="navbar navbar-light bg-secondary">
			<img className="logo" src="src/assets/img/starwarslogo.png"></img>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand h1">Home</span>
				</Link>
				<div className="ml-auto">
											<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</a>
							<ul className="dropdown-menu">
								{
									store?.favorites.characters.map((character,)=>(
										<li className="dropdown-item">
											<Link to={`/characters/${character.uid}`}>
												<p>{character.name}</p>
											</Link>
											<span className="text-danger" onClick={()=>dispatch({ type: "toggle_favorite", payload: { name: character.name, uid: character.uid, kind: "characters"} })}>x</span>								
										</li>
									))
								}
								{
									store?.favorites.planets.map((planet,)=>(
										<li className="dropdown-item">
											<Link to={`/planets/${planet.uid}`}>
												<p>{planet.name}</p>
											</Link>
											<span className="text-danger" onClick={()=>dispatch({ type: "toggle_favorite", payload: { name: planet.name, uid: planet.uid, kind: "planets"} })}>x</span>								
										</li>
									))
								}
								{
									store?.favorites.species.map((species,)=>(
										<li className="dropdown-item">
											<Link to={`/species/${species.uid}`}>
												<p>{species.name}</p>
											</Link>
											<span className="text-danger" onClick={()=>dispatch({ type: "toggle_favorite", payload: { name: species.name, uid: species.uid, kind: "species"} })}>x</span>								
										</li>
									))
								}
							</ul>
						</li>
					
				</div>
			</div>
		</nav>
	);
};