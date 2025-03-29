// part12-containers-applications/todo-app/todo-frontend/src/Todos/Form.jsx
import React, { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState('')

  const onChange = ({ target }) => {
    setText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo({ text })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  )
}

export default TodoForm
