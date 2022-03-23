import { useState, FunctionComponent, Dispatch, SetStateAction } from "react"
import { Todo } from "../../interfaces/Interfaces"

interface TodoItemProps {
  userTodos: Todo[]
  todo: Todo
  setUserTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, userTodos, setUserTodos }: TodoItemProps) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const handleToggleComplete = (): void => {
    setIsComplete(!isComplete)
  }

  const handleDeleteTodo = (): void => {
    setUserTodos(userTodos.filter(item => item.id !== todo.id))
  }

  return (
    <div>
      <div onClick={handleToggleComplete}>{todo.text}</div>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItem
