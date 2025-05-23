// part12-containers-applications/todo-app/todo-frontend/src/Todos/List.jsx
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos.map(todo => {
        const doneInfo = (
          <>
            <span>This todo is done</span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
          </>
        );

        const notDoneInfo = (
          <>
            <span>
              This todo is not done
            </span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
          </>
        );

        return (
          <div key={todo._id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <Todo text={todo.text} done={todo.done} />
            {todo.done ? doneInfo : notDoneInfo}
          </div>
        );
      }).reduce((acc, cur) => [...acc, <hr key={`hr-${cur.key}`} />, cur], [])}
    </>
  );
};

export default TodoList;