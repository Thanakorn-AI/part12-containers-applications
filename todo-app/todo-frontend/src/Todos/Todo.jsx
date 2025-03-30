// part12-containers-applications/todo-app/todo-frontend/src/Todos/Todo.jsx
import React from 'react';

const Todo = ({ text, done }) => {
  return (
    <div style={{ marginRight: '1rem' }}>
      <span>{text}</span> - <span>{done ? 'Done' : 'Not Done'}</span>
    </div>
  );
};

export default Todo;