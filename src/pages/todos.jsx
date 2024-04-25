import React, { useState, useEffect } from "react";
import "./todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addToLocalStorage = (todo) => {
    const existingTodos = JSON.parse(localStorage.getItem("TODO_LIST")) || [];
    existingTodos.push(todo);
    localStorage.setItem("TODO_LIST", JSON.stringify(existingTodos));
  };

  const getFromLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("TODO_LIST"));
    return storedTodos || [];
  };

  useEffect(() => {
    const storedTodos = getFromLocalStorage();
    setTodos(storedTodos);
  }, []);

  const allTodosCompleted = () => {
    return todos.every((todo) => todo.completed);
  };

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      const newTodo = { text: todoInput, completed: false };
      setTodos([...todos, newTodo]);
      addToLocalStorage(newTodo);
      setTodoInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem("TODO_LIST", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    localStorage.setItem("TODO_LIST", JSON.stringify(updatedTodos));
  };

  const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("TODO_LIST");
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
      <button onClick={addTodo} className="todo-button">
        Lägg till
      </button>
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
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            </label>
            <button onClick={() => deleteTodo(index)} className="todo-button">
              Ta bort
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearTodos} className="todo-button">
        Rensa alla
      </button>

      {todos.length > 0 && allTodosCompleted() && (
        <p>Du är färdig. Bra jobbat!</p>
      )}
    </div>
  );
};

export default Todos;
