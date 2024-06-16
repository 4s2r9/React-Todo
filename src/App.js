import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo1", completed: false }]);

  
  const todoNameRef = useRef()

  // タスクを追加する
  const handleAddTodo = () => {
    console.log(todoNameRef.current.value)
    const name = todoNameRef.current.value

    // 空文字の場合は追加しない
    if (name === "") return

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null
  }

  // 完了したタスクを削除する
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  return (
    <>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
