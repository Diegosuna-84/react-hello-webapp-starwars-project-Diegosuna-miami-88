import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetCard = ({name, diameter, terrain, id}) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        
            <div className="cardStyle col-12 col-lg-4 mx-3 textStyle border rounded border-secondary card">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`} className="cardImage img-fluid rounde placeholder" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Diameter: {diameter}</h5>
                    <h5 className="card-title">Terrain: {terrain}</h5>
                </div>
                <Link to={`/planets/${id}`}>
                <button className="btn btn-dark d-flex mb-2">Learn more</button>
                </Link>
                <button className="favorite-btn" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: name, uid: id, kind: "planets" } })}>♥</button>
            </div>
       

    )
}