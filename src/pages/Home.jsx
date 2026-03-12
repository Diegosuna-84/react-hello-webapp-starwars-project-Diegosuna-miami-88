import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import useActions from "../hooks/useActions.jsx";
import { StarWarsCharacterCard } from "../components/StartWarsCharacter.jsx";
import { PlanetCard } from "../components/Planets.jsx";
import { SpeciesCard } from "../components/Species.jsx";


export const Home = () => {
	const { getCharacters, getPlanets, getSpecies } = useActions(); //you use your name action/function from useActions
	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		getCharacters(),
			getPlanets(),
			getSpecies()
	}, [])




	return ( // the root of the container for your components UI 
		<div className="container text-center d-flex flex-column">
			<div className="row d-flex flex-nowrap text-center mt-5 overflow-x-scroll">
				{store.characters.map((character) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<StarWarsCharacterCard
						key={character._id || index}// information at the beggining at the map is what i need to refered to
						name={character.properties.name}
						hair_color={character.properties.hair_color}
						birth_year={character.properties.birth_year}
						id={character.uid}
					/>))}

			</div>
			<div className="row d-flex flex-nowrap text mt-5 overflow-x-scroll">
				{store.planets.map((planet) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<PlanetCard
						key={planet._id || index}// information at the beggining at the map is what i need to refered to
						name={planet.properties.name}
						id={planet.uid}
					/>))}

			</div>
			<div className="row d-flex flex-nowrap text mt-5 overflow-x-scroll">
				{store.species.map((species) => (
					<SpeciesCard
						key={species._id || index}
						name={species.properties.name}
						language={species.properties.language}
						id={species.uid}
					/>
				))}
			</div>
			<div>Learn more</div>
		</div>
	);

};
// data.result.properties.name