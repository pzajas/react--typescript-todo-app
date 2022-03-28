import { FunctionComponent } from "react"
import { InterfaceTodo } from "../../interfaces/Interfaces"
import styled from "styled-components"

const StyledTodoFormContainer = styled.div`
  width: 50%;
  margin-bottom: 1rem;

  form {
    display: flex;

    input {
      height: 1.5rem;
      width: 100%;
      outline: none;
      border: none;
      margin-right: 0.2rem;
    }

    button {
      border: none;
      width: 5vw;
    }
  }
`

const Form: FunctionComponent<InterfaceTodo> = ({ userInput, handleOnChange, handleOnSubmit }) => {
  return (
    <StyledTodoFormContainer>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} value={userInput} />
        <button type="submit">Add</button>
      </form>
    </StyledTodoFormContainer>
  )
}

export default Form
