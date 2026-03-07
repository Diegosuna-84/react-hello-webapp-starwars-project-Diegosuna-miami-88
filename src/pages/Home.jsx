import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import useActions from "../hooks/useActions.jsx";
import { StarWarsCharacterCard } from "../components/StartWarsCharacter.jsx";
import { PlanetCard } from "../components/Planets.jsx";


export const Home = () => {
	const { getCharacters, getPlanets } = useActions(); //you use your name action/function from useActions
	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		getCharacters(),
			getPlanets()
	}, [])




	return ( // the root of the container for your components UI 
		<div className="d-flex flex-column">
			<div className="d-flex text mt-5">
				{store.characters.map((character) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<StarWarsCharacterCard
						key={character._id || index}
						name={character.properties.name}
						hair_color={character.properties.hair_color} // information at the beggining at the map is what i need to refered to
						id={character.uid}
					/>))}

			</div>
			<div className="d-flex text mt-5">
				{store.planets.map((planet) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<PlanetCard
						key={planet._id || index}// information at the beggining at the map is what i need to refered to
						name={planet.properties.name}
						id={planet.uid}
					/>))}

			</div>
			<div>Learn more</div>
		</div>
	);

};
// data.result.properties.name