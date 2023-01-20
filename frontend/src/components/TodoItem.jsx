import React from 'react';
import DeleteIcon from '../assets/DeleteIcon.svg';
import DoneIcon from '../assets/DoneIcon.svg';
import { useState } from 'react';

const TodoItem = ({ todo, todos, setTodos }) => {
  const [isChecked, setIsChecked] = useState(false);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
    if (todo.completed) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <li>
      <span className={isChecked ? 'checked' : 'unchecked'}>{todo.text}</span>

      <div className="buttons">
        <button className="done_button" onClick={() => toggleTodo(todo)}>
          <img src={DoneIcon} alt="The done icon" />
        </button>
        <button className="delete_button" onClick={() => deleteTodo(todo.id)}>
          <img src={DeleteIcon} alt="The delete icon" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
