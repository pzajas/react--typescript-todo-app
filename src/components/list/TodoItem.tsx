import { FunctionComponent, Dispatch, SetStateAction } from "react"
import { Todo, UserTodos } from "../../interfaces/Interfaces"

interface TodoItemProps {
  userTodos: UserTodos[]
  todo: Todo
  setUserTodos: Dispatch<SetStateAction<UserTodos[]>>
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, userTodos, setUserTodos }: TodoItemProps) => {
  const handleDeleteTodo = (): void => {
    setUserTodos(userTodos.filter(item => item.id !== todo.id))
  }

  return (
    <div>
      <>{todo.text}</>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItem
