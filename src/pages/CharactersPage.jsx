import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";


export const CharactersPage = ({ }) => {
    const { store, dispatch } = useGlobalReducer();

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const foundCharacter = store?.characters.find((character) => character.uid === id);// within the store.planets your finding a planet with the same iud from the id from th url
        if (foundCharacter) {
            setCharacter(
                foundCharacter.properties
            )
        }
    })
    return (
        <div className="containercardStyle text-center mt-5">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt={`No image found for ${name}`}></img>
            <h1>Name: {character.name}</h1>
            <h1>gender: {character.gender}</h1>
            <h1> Hair Color: {character.hair_color}</h1>
            <h1>eye_color: {character.eye_color}</h1>
            <h1>Birth Year: {character.birth_year}</h1>
            <h1>Mass: {character.mass}</h1>
        </div>
    )
}