import useActions from "../hooks/useActions";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetCard = ({name}) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <>
            <div className="cardStyle border rounded border-secondary text-center card">
                <img src={""} className="img-thumbnail img-fluid rounde placeholder" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                </div>
            </div>
        </>

    )
}