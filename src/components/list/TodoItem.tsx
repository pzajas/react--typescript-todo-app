import { useState, FunctionComponent } from "react"
import { useDispatch } from "react-redux"
import { Todo } from "../../interfaces/Interfaces"
import { deleteTodo } from "../../redux/slice/todoSlice/todoSlice"

import styled from "styled-components"

interface TodoItemProps {
  todo: Todo
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

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch()
  const [isComplete, setIsComplete] = useState(false)

  const handleToggleComplete = () => {
    setIsComplete(!isComplete)
    console.log(isComplete)
  }

  const handleDeleteTodo = () => {
    dispatch(
      deleteTodo({
        id: todo.id,
      })
    )
  }

  return (
    <StyledTodoItemContainer>
      <StyledTodoTextContainer isComplete={isComplete} onClick={handleToggleComplete}>
        {todo.title}
      </StyledTodoTextContainer>
      <button onClick={handleDeleteTodo}>Delete</button>
    </StyledTodoItemContainer>
  )
}

export default TodoItem
