import { ChangeEvent, FunctionComponent, useState } from "react"
import Form from "./components/form/Form"
import TodoList from "./components/list/TodoList"

interface InterfaceUserTodos {
  id: number
  text: string
}

const App: FunctionComponent = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [userTodos, setUserTodos] = useState<InterfaceUserTodos[]>([])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setUserTodos([...userTodos, { id: Math.random() * 1000, text: userInput }])
    setUserInput("")
  }

  return (
    <div>
      <Form
        userInput={userInput}
        setUserInput={setUserInput}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodoList userTodos={userTodos} setUserTodos={setUserTodos} />
    </div>
  )
}

export default App
