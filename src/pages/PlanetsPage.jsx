import React from "react";
import useActions from "../hooks/useActions";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetsPage = ({ }) => {
    const { store, dispatch } = useGlobalReducer();

    const { id } = useParams()
    const [planet, setPlanet] = useState({}) //

    useEffect(() => {
        const foundPlanet = store?.planets.find((planet) => planet.uid === id);// within the store.planets your finding a planet with the same iud from the id from th url
        if (foundPlanet) {
            setPlanet(
                foundPlanet.properties
            )
        }
    })
    return (
        <div className="container border boder-rounded  text-center mt-4">
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt="..."></img></div>
                <div className="col-4 mt-5">
                    <h1 className="text-light border-bottom border-danger">Name: {planet.name}</h1>
                    <h1 className="text-light border-bottom border-danger">Population: {planet.population}</h1>
                    <h1 className="text-light border-bottom border-danger">Climate: {planet.climate}</h1>
                    <h1 className="text-light border-bottom border-danger">gravity: {planet.gravity}</h1>
                    <h1 className="text-light border-bottom border-danger">diameter: {planet.diameter}</h1></div>
            </div></div>
    )
}