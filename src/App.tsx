import { ChangeEvent, FunctionComponent, useState } from "react"
import Form from "./components/form/Form"
import TodoList from "./components/list/TodoList"
import styled from "styled-components"

const StyledApplicationContainer = styled.div`
  box-sizing: border-box;
  padding: 10rem;
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  & * {
    font-family: "Poppins", sans-serif;
  }
`

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
    <StyledApplicationContainer>
      <Form
        userInput={userInput}
        setUserInput={setUserInput}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodoList userTodos={userTodos} setUserTodos={setUserTodos} />
    </StyledApplicationContainer>
  )
}

export default App
