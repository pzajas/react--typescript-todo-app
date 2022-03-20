import { ChangeEvent, FunctionComponent, useState } from "react"
import { InterfaceTodos } from "./interfaces/Interface"
import Form from "./components/form/Form"

const App: FunctionComponent = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [userTodos, setUserTodos] = useState<InterfaceTodos[]>([])

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
      {userTodos.map(todo => (
        <li>{todo.id}</li>
      ))}
    </div>
  )
}

export default App
