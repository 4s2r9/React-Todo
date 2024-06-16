import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <input type="checkbox" id={todo.id} checked={todo.completed} readOnly onChange={handleTodoClick}/>
      <label for={todo.id}>
        {todo.name}
      </label>
    </div>
  )
}

export default Todo