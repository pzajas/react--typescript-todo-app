import { ADD_TODO } from "./todoActions"

const initialState = {
  data: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, { text: action.text, id: action.id }],
      }
  }
}

export default todoReducer
