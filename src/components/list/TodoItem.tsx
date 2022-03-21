import { FunctionComponent } from "react"
import { InterfaceSingleTodo } from "../../interfaces/Interface"

const TodoItem: FunctionComponent<InterfaceSingleTodo> = ({ todo }) => {
  return (
    <div>
      {todo.id} <button>DELETE</button>
    </div>
  )
}

export default TodoItem
