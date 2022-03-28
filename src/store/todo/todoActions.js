export const ADD_TODO = "ADD_TODO"
export const handleAddTodo = text => ({
  type: ADD_TODO,
  id: Math.random() * 1000,
  text,
})
