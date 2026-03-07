import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useActions } from "react";

export const StarWarsCharacterCard = ({ name, hair_color, id }) => {
    const { store, dispatch } = useGlobalReducer();


    return (
        <>
            <div className="cardStyle border rounded border-secondary text-center card">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt={`No image found for ${name}`}></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Hair_color {hair_color}</h5>
                </div>
                <a href="#" className="btn btn-warning" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: name, uid: id, kind: "characters" } })}>Faves</a>
            </div>
        </>
    );
};
//