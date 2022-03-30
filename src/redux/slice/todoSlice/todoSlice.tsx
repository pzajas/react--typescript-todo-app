import { createSlice } from "@reduxjs/toolkit"

// interface X {
//   id: number
//   title: string
//   completed: boolean

//   push: any
//   filter: any
// }

// const initialState = { id: Math.random() * 1000 } as X

interface InterfaceTodoSlice {
  id: number
  title: string
  completed: boolean
}

const initialState: InterfaceTodoSlice[] = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const handleSubmitTodo = {
        id: Math.random() * 1000,
        title: action.payload.title,
        completed: false,
      }
      state.push(handleSubmitTodo)
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
