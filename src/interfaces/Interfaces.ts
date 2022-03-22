import { Dispatch, SetStateAction } from "react"

export interface InterfaceTodo {
  userInput: string
  setUserInput: (userInput: string) => void

  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitHandler: (e: React.SyntheticEvent) => void
}

export interface Todo {
  id: number
  text: string
}

export interface UserTodos {
  id: number
  text: string
}

export interface SetUserTodos {
  setUserTodos: Dispatch<SetStateAction<Todo>>
}
