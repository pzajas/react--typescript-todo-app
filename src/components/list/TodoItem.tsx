import { useState, FunctionComponent, Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import { Todo } from "../../interfaces/Interfaces"

interface TodoItemProps {
  userTodos: Todo[]
  todo: Todo
  setUserTodos: Dispatch<SetStateAction<Todo[]>>
}

interface StyledTodoItemProps {
  isComplete: boolean
}

const StyledTodoItemContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #252525;
  margin-bottom: 0.2rem;

  div {
    cursor: pointer;
  }

  button {
    background-color: rgb(80, 80, 80);
    color: white;
    border: none;
    padding: 0.4rem;
  }
`
const StyledTodoTextContainer = styled.div<StyledTodoItemProps>`
  color: ${({ isComplete }) => (isComplete ? "rgba(100, 100, 100,.4)" : "white")};
  text-decoration: ${({ isComplete }) => (isComplete ? "line-through" : "none")};
`

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, userTodos, setUserTodos }: TodoItemProps) => {
  const [isComplete, setIsComplete] = useState(false)

  const handleToggleComplete = () => {
    setIsComplete(!isComplete)
    console.log(isComplete)
  }

  const handleDeleteTodo = (): void => {
    setUserTodos(userTodos.filter(item => item.id !== todo.id))
  }

  return (
    <StyledTodoItemContainer>
      <StyledTodoTextContainer isComplete={isComplete} onClick={handleToggleComplete}>
        {todo.text}
      </StyledTodoTextContainer>
      <button onClick={handleDeleteTodo}>Delete</button>
    </StyledTodoItemContainer>
  )
}

export default TodoItem
