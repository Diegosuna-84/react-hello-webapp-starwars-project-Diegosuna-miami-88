import React from "react";
import useActions from "../hooks/useActions";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetsPage = ({}) => {
    const { store, dispatch } = useGlobalReducer();

    const { id } = useParams()
    const [planet, setPlanet] = useState({})

    useEffect (() => {
        const foundPlanet = store ?.planets.find((planet)=> planet.uid === id);
        if (foundPlanet){
            setPlanet (
                foundPlanet.properties
            )
        }
    })
    return (
       <div className="text mt-5">
        {store.planets.map((planet, index) => (
            <PLanetCard
            key={planet || index}
            name={planet.name}
        />))}
       </div>
    )
}