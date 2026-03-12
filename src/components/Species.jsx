import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useGlobalReducer from "../hooks/useGlobalReducer";
                                

export const SpeciesCard = ({name, id}) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="cardStyle col-12 col-lg-4 mx-3 border rounded border-secondary text-center card">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`} className="img-thumbnail img-fluid rounde placeholder" alt="..."></img>
             <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                </div>
                <Link to={`/species/${id}`}>
                <button>Learn more</button>
                </Link>
                <button className="btn btn-warning" onClick={() => dispatch({ type: "toggle_favorite", payload: { name: name, uid: id, kind: "species" } })}>Faves</button>
        </div>
    )
}