import React from "react"

export interface InterfaceTodo {
  userInput: string
  setUserInput: (userInput: string) => void

  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitHandler: (e: React.SyntheticEvent) => void
}

export interface InterfaceTodos {
  id: number
  text: string
}

export interface InterfaceSingleTodo {
  todo: {
    id: number
    text: string
  }
}
