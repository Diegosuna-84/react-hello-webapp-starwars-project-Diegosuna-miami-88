import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useActions } from "react";

export const StarWarsCharacterCard = ({ name, hair_color, birth_year, id }) => {
    const { store, dispatch } = useGlobalReducer();


    return (
        <>
            <div className="cardStyle col-12 col-lg-4 mx-3 border rounded border-secondary text-center card kings-regular">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt={`No image found for ${name}`}></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Hair_color: {hair_color}</h5>
                    <h5 className="card-title">birth_year: {birth_year}</h5>

                </div>
                <Link to={`/characters/${id}`}>
                <button className="btn btn-dark mb-2">Learn more</button>
                </Link>
                <button className="btn btn-primary" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: name, uid: id, kind: "characters"} })}>Heart</button>
            </div>
        </>
    );
};
//