import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"

import TodoItem from "./TodoItem"
import styled from "styled-components"

const StyledTodoListContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    width: 100%;

    & * {
      justify-content: space-between;
      align-items: center;
    }
  }
`
const TodoList: FunctionComponent = () => {
  const userTodoList = useSelector((state: RootState) => state.todos)

  return (
    <StyledTodoListContainer>
      {userTodoList.map(todo => (
        <li key={todo.id} style={{ listStyle: "none" }}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </StyledTodoListContainer>
  )
}

export default TodoList
