// part12-containers-applications/todo-app/todo-backend/routes/todos.js
const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { setAsync, getAsync } = require('../redis');

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  });
  let count = await getAsync('added_todos');
  count = count ? parseInt(count) + 1 : 1;
  await setAsync('added_todos', count);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo); // Return the todo object
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  req.todo.text = req.body.text || req.todo.text;
  req.todo.done = req.body.done !== undefined ? req.body.done : req.todo.done;
  const updatedTodo = await req.todo.save();
  res.send(updatedTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;