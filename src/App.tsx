import { ChangeEvent, FunctionComponent, useState } from "react"
import Form from "./components/form/Form"
import TodoList from "./components/list/TodoList"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { addTodo } from "./redux/slice/todoSlice/todoSlice"

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

const App: FunctionComponent = () => {
  const [userInput, setUserInput] = useState<string>("")

  const dispatch = useDispatch()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    dispatch(
      addTodo({
        title: userInput,
      })
    )
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
      <TodoList />
    </StyledApplicationContainer>
  )
}

export default App
