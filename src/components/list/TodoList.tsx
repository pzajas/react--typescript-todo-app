import { FunctionComponent } from "react"
import { InterfaceTodos } from "../../interfaces/Interface"
import TodoItem from "./TodoItem"

interface InterfaceListComponent {
  userTodos: InterfaceTodos[]
}

const TodoList: FunctionComponent<InterfaceListComponent> = ({ userTodos }) => {
  return (
    <div>
      {userTodos.map(todo => (
        <li key={todo.id} style={{ listStyle: "none" }}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </div>
  )
}

export default TodoList
