import { FunctionComponent, Dispatch, SetStateAction } from "react"
import { Todo } from "../../interfaces/Interfaces"
import TodoItem from "./TodoItem"

interface Props {
  userTodos: { id: number; text: string }[]
  setUserTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FunctionComponent<Props> = ({ userTodos, setUserTodos }: Props) => {
  return (
    <div>
      {userTodos.map(todo => (
        <li key={todo.id} style={{ listStyle: "none" }}>
          <TodoItem todo={todo} userTodos={userTodos} setUserTodos={setUserTodos} />
        </li>
      ))}
    </div>
  )
}

export default TodoList
