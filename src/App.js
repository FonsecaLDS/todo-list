import React, { useState } from "react";

function App() {
  // Estado para armazenar as tarefas
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Função para adicionar uma nova tarefa
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // Limpa o campo de input
    }
  };

  // Função para alternar o status de conclusão da tarefa via checkbox
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Função para remover uma tarefa
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
<div className="App">
  <h1>To-Do List</h1>

  <div className="input-container">
    <input
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Adicionar nova tarefa"
    />
    <button onClick={addTodo}>Adicionar</button>
  </div>

  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        <div className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
        </div>
        <button className="remove-btn" onClick={() => removeTodo(index)}>
          Remover
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}

export default App;
