import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    text: String,
    isCompleted: Boolean,
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
