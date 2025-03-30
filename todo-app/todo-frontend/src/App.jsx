// part12-containers-applications/todo-app/todo-frontend/src/App.jsx
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todos/Todo'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/todos`)
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <>
      <h1>Todos</h1>
      {todos.map(todo => (
        <Todo key={todo._id} text={todo.text} done={todo.done} />
      ))}
    </>
  );
}

export default App;