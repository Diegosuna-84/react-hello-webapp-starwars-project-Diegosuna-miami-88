import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";

export const SpeciesPage = ({ }) => {
    const { store, dispatch } = useGlobalReducer();

    const { id } = useParams()
    const [species, setSpecies] = useState({})

    useEffect(() => {
        const foundSpecies = store?.species.find((species) => species.uid === id);
        if (foundSpecies) {
            setSpecies(
                foundSpecies.properties
            )
        }
    })
    return (
        <div className="container border boder-rounded  text-center mt-4">
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/species/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt={`No image found for ${name}`}></img></div>
                <div className="col-4 mt-5">
                    <h1 className="text-light border-bottom border-danger">Name: {species.name}</h1>
                    <h1 className="text-light border-bottom border-danger">classification: {species.classification}</h1>
                    <h1 className="text-light border-bottom border-danger">Language: {species.language}</h1></div>
            </div></div>
    )
}