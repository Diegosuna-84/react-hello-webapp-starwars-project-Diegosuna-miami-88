import { useId } from "react";

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    favorites: {
      characters: [],
      planets: []
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        data: store.data.map((data) => (data.id === id ? { ...data, background: color } : data))
      };

    case "update_characters":
      return {
        ...store,
        characters: action.payload
      }

    case "update_planets":
      return {
        ...store,
        planets: action.payload
      }

    case "toggle_favorite":
      const { uid, name, kind, } = action.payload // we deconstruct 
      if (store.favorites[kind].find(element => element.uid === uid)) { // this line changes when adding to planets and else
        const newFavorites = store.favorites[kind].filter(element => element.uid != uid) // elaborate this 
        return {
          ...store,
          favorites: {
            ...store.favorites,
            [kind]: newFavorites
          }
        }
      }

      return {
        ...store,
        favorites: {
          ...store.favorites,
          [kind]: [...store.favorites[kind], { name, uid }
          ]
        }
      }

    default:
      throw Error('Unknown action.');
  }
}
