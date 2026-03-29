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
		<div className="container mt-5 border border-danger">
			<div className="row d-flex flex-nowrap border border-danger mt-5 overflow-x-scroll border">
				{store.characters.map((character) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<StarWarsCharacterCard
						key={character._id || index}// information at the beggining at the map is what i need to refered to
						name={character.properties.name}
						hair_color={character.properties.hair_color}
						birth_year={character.properties.birth_year}
						id={character.uid}
					/>))}

			</div>
			<div className="row d-flex flex-nowrap text mt-5 border-danger overflow-x-scroll border ">
				{store.planets.map((planet) => ( // react requires a unique prop!!! remember for list of elements to track changes efficiently. it priotizes the datebase id, falling back to the array index if necesary
					<PlanetCard
						key={planet._id || index}// information at the beggining at the map is what i need to refered to
						name={planet.properties.name}
						terrain={planet.properties.terrain}
						diameter={planet.properties.diameter}
						id={planet.uid}
					/>))}

			</div>
			<div className="row d-flex flex-nowrap text mt-5 border-danger overflow-x-scroll border">
				{store.species.map((species) => (
					<SpeciesCard
						key={species._id || index}
						name={species.properties.name}
						classification={species.properties.classification}
						language={species.properties.language}
						average_lifespan={species.properties.average_lifespan}
						id={species.uid}
					/>
				))}
			</div>
			
		</div>
	);

};
// data.result.properties.name