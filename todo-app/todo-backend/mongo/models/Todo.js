// part12-containers-applications/todo-app/todo-backend/mongo/models/Todo.js
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})

module.exports = mongoose.model('Todo', todoSchema)