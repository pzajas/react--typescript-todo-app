import { FunctionComponent, Dispatch, SetStateAction } from "react"
import { Todo } from "../../interfaces/Interfaces"
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

interface Props {
  userTodos: { id: number; text: string }[]
  setUserTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FunctionComponent<Props> = ({ userTodos, setUserTodos }: Props) => {
  return (
    <StyledTodoListContainer>
      {userTodos.map(todo => (
        <li key={todo.id} style={{ listStyle: "none" }}>
          <TodoItem todo={todo} userTodos={userTodos} setUserTodos={setUserTodos} />
        </li>
      ))}
    </StyledTodoListContainer>
  )
}

export default TodoList
