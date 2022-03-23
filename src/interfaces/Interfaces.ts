export interface InterfaceTodo {
  userInput: string
  setUserInput: (userInput: string) => void

  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: (e: React.SyntheticEvent) => void
}

export interface Todo {
  id: number
  text: string
}
