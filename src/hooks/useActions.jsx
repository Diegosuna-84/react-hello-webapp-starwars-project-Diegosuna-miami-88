import { useEffect } from "react"
import useGlobalReducer from "./useGlobalReducer"


const useActions = () => {
    const { store, dispatch } = useGlobalReducer();

    const getCharacters = async () => {
        const response = await fetch("https://www.swapi.tech/api/people/?expanded=true")


        if (!response.ok) {
            console.log("error ', Response. status, response.statusText");
            return;
        }
        const data = await response.json();
        console.log(data.results)
        dispatch({ type: "update_characters", payload: data.results }
        ); return data
    };

    const getPlanets = async () => {
        const response = await fetch("https://www.swapi.tech/api/planets/?expanded=true")


        if (!response.ok) {
            console.log("error ', Response. status, response.statusText");
            return;
        }
        const data = await response.json();
        console.log(data.results)
        dispatch({ type: "update_planets", payload: data.results }
        ); return data
    };



    return { getCharacters, getPlanets }

    

   
}



export default useActions;
//write an actions for each fetch function planets and starship


// const getContacts = async () => {
//     const response = await fetch(
//       "https://playground.4geeks.com/contact/agendas/diego/contacts",
//     );

//     if (!response.ok) {
//       console.log("error ', Response.status, response.statusText");
//       return;
//     }
// const data = await response.json();
//     console.log(data.contacts)
//     dispatch({ type: "update_contacts", payload: data.contacts});
//     return data
//   };
