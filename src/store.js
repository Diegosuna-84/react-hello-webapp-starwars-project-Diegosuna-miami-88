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
    planets: []
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
    default:
      throw Error('Unknown action.');
  }
}
