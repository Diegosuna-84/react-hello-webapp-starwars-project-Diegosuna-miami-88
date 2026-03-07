import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetCard = ({name, id}) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <>
            <div className="cardStyle border rounded border-secondary text-center card">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                </div>
                <Link to={`/planets/${id}`}>
                <button>Learn more</button>
                </Link>
                <a href="#" className="btn btn-warning" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: name, uid: id, kind: "planets" } })}>Faves</a>
            </div>
        </>

    )
}