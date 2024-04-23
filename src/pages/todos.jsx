import React, { useState } from 'react';
import './todos.css'; 

const Todos = () => { 
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Att göra-lista</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="todo-input"
        placeholder="Skriv din uppgift här..."
      />
      <button onClick={addTodo} className="todo-button">Lägg till</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
                className="todo-checkbox"
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>
            <button onClick={() => deleteTodo(index)} className="todo-button">Ta bort</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTodos} className="todo-button">Rensa alla</button>
    </div>
  );
}

export default Todos; 

