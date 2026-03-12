import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";

export const SpeciesPage = ({})=> {
    const { store, dispatch } = useGlobalReducer();

    const {id} = useParams()
    const [species, setSpecies] = useState({})

    useEffect(()=> {
        const foundSpecies = store?.species.find((species) => species.uid === id);
        if (foundSpecies) {
            setSpecies(
                foundSpecies.properties
            )
        }
    })
    return (
        <div className="containercardStyle text-center mt-5">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/species/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt={`No image found for ${name}`}></img>
            <h1>Name: {species.name}</h1>
        </div>
    )
}