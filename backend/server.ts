require('dotenv').config();
import express, { Request, Response } from 'express';
import Todo from './models/todoModel';
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(url, () => {
    console.log(`Connected to MongoDB`);
  })
  .catch((e: string) => console.log(e));

app.get('/api/todos', async (req: Request, res: Response) => {
  const todos = await Todo.find();
  res.status(200).send(todos);
});

app.post('/api/todos', (req: Request, res: Response) => {
  const body = req.body;
  const text = body.text;

  const todo = new Todo({
    text: text,
    isCompleted: false,
  });
  todo.save();

  res.status(200).send({ message: `new item created: ${text}` });
});

app.put('/api/todos/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  console.log(updatedTodo);
  await Todo.findByIdAndUpdate(id, updatedTodo);
  res.status(200).send(`Updated`);
});

app.delete('/api/todos/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  await Todo.findByIdAndDelete(id);
  res.status(200).send(`Deleted`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
