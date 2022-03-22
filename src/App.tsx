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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setUserTodos([...userTodos, { id: Math.random() * 1000, text: userInput }])
    setUserInput("")
  }

  return (
    <div>
      <Form
        userInput={userInput}
        setUserInput={setUserInput}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <TodoList userTodos={userTodos} setUserTodos={setUserTodos} />
    </div>
  )
}

export default App
