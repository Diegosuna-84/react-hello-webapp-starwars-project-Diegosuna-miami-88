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
        <div className="container border boder-rounded border border-danger text-center mt-4">
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} className="rounded cardImage float-start mb-5 img-fluid rounde placeholder" alt={`No image found for ${name}`}></img></div>
                <div className="container textStyle col-5 mt-5">
                    <h1 className="text-light border-bottom border-danger">Name: {character.name}</h1>
                    <h1 className="text-light border-bottom border-danger">gender: {character.gender}</h1>
                    <h1 className="text-light border-bottom border-danger"> Hair Color: {character.hair_color}</h1>
                    <h1 className="text-light border-bottom border-danger">eye_color: {character.eye_color}</h1>
                    <h1 className="text-light border-bottom border-danger">Birth Year: {character.birth_year}</h1>
                    <h1 className="text-light border-bottom border-danger">Mass: {character.mass}</h1></div>
            </div></div>
    )
}